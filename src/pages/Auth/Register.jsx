import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from "../../emailjsConfig";

const OTP_VALID_MS = 5 * 60 * 1000;
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

const ShieldMark = () => (
  <svg className="register-brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L27 7V15C27 21.6 22.4 27.6 16 29C9.6 27.6 5 21.6 5 15V7L16 3Z" fill="#2563EB" />
    <path d="M11 16L14.5 19.5L21 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityPattern = () => (
  <svg className="register-security-pattern" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="regGuilloche" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
        <path d="M0 23 Q 11.5 0 23 23 T 46 23" fill="none" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.45" />
        <path d="M0 11.5 Q 11.5 -11.5 23 11.5 T 46 11.5" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.28" />
        <path d="M0 34.5 Q 11.5 11.5 23 34.5 T 46 34.5" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.28" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#regGuilloche)" />
  </svg>
);

const EyeIcon = ({ visible }) =>
  visible ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 12s3.6-7 9-7 9 7 9 7-3.6 7-9 7-9-7-9-7z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.9 5.1A9.8 9.8 0 0112 5c5 0 9 4.5 9 7-.6 1.05-1.4 2.2-2.4 3.2M6.5 6.6C4.4 8 3 9.9 3 12c0 2.5 4 7 9 7 1 0 2-.15 2.9-.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

const UserIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const IdCardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="9" cy="12" r="2" />
    <path d="M14 10h4M14 14h4" />
  </svg>
);
const LockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 118 0v4" />
  </svg>
);
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const STEPS = [
  { label: "Personal details", caption: "Tell us who you are", icon: <UserIcon /> },
  { label: "Contact details", caption: "How we can reach you", icon: <MailIcon /> },
  { label: "Identity documents", caption: "Upload your NIC", icon: <IdCardIcon /> },
  { label: "Security", caption: "Set your password", icon: <LockIcon /> },
];

const ERROR_MESSAGES = {
  "auth/email-already-in-use": "This email is already registered. Try logging in instead.",
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/weak-password": "Please choose a stronger password (at least 6 characters).",
};

const friendlyError = (code) => ERROR_MESSAGES[code] || "Something went wrong. Please try again.";

const initialFormData = {
  fullName: "",
  nic: "",
  dob: "",
  gender: "",
  nationality: "",
  email: "",
  mobile: "",
  address: "",
  password: "",
};

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [nicFrontName, setNicFrontName] = useState("");
  const [nicBackName, setNicBackName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveStep(Number(entry.target.dataset.stepIndex));
          }
        });
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: 0 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormReset = () => {
    setFormData(initialFormData);
    setNicFrontName("");
    setNicBackName("");
    setError("");
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // 1. Create the Firebase Auth account
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const uid = userCredential.user.uid;

      // 2. Generate a 6-digit code + expiry, save alongside the profile
      const otpCode = generateOtp();
      const otpExpiresAt = Date.now() + OTP_VALID_MS;

      await setDoc(doc(db, "users", uid), {
        ...formData,
        createdAt: new Date(),
        emailVerified: false,
        otpCode,
        otpExpiresAt,
      });

      // 3. Email the code via EmailJS
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_name: formData.fullName,
        to_email: formData.email,
        otp_code: otpCode,
      });

      // 4. Go verify — pass uid + email, which is what OTPVerify.jsx expects
      navigate("/otp-verify", { state: { uid, email: formData.email } });
    } catch (err) {
      console.error(err);
      setError(friendlyError(err.code));
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <form className="register-form-panel" onSubmit={handleRegister} onReset={handleFormReset}>
        <div className="register-brand">
          <ShieldMark />
          <span>National E-ID</span>
        </div>

        <h2>Create your account</h2>
        <p className="register-subtitle">
          Register once to access every verified government service.
        </p>

        {error && (
          <div className="register-error" role="alert">
            {error}
          </div>
        )}

        <div className="form-section" ref={(el) => (sectionRefs.current[0] = el)} data-step-index="0">
          <h3 className="section-label">Personal details</h3>
          <div className="form-grid">
            <div className="input-group">
              <label>Full name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>NIC number</label>
              <input type="text" name="nic" value={formData.nic} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Date of birth</label>
              <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Gender</label>
              <select name="gender" value={formData.gender} onChange={handleChange} required>
                <option value="" disabled>Select gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group">
              <label>Nationality</label>
              <input  type="text"  name="nationality"  placeholder="e.g. Sri Lankan"  value={formData.nationality}  onChange={handleChange}/>
            </div>
          </div>
        </div>

        <div className="form-section" ref={(el) => (sectionRefs.current[1] = el)} data-step-index="1">
          <h3 className="section-label">Contact details</h3>
          <div className="form-grid">
            <div className="input-group">
              <label>Email address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Mobile number</label>
              <input type="tel" name="mobile"   placeholder="+94 7X XXX XXXX"   value={formData.mobile}   onChange={handleChange}   required />
            </div>
          </div>
          <div className="input-group full-width">
            <label>Address</label>
            <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
          </div>
        </div>

        <div className="form-section" ref={(el) => (sectionRefs.current[2] = el)} data-step-index="2">
          <h3 className="section-label">Identity documents</h3>
          <div className="form-grid">
            <div className="input-group">
              <label>NIC front</label>
              <div className="file-drop">
                <input type="file" accept="image/*" onChange={(e) => setNicFrontName(e.target.files[0]?.name || "")}/>
                {nicFrontName ? (
                  <span className="file-chip">{nicFrontName}</span>
                ) : (
                  <span className="file-drop-label">Click to upload the front side</span>
                )}
              </div>
            </div>
            <div className="input-group">
              <label>NIC back</label>
              <div className="file-drop">
                <input type="file" accept="image/*" onChange={(e) => setNicBackName(e.target.files[0]?.name || "")} />
                {nicBackName ? (
                  <span className="file-chip">{nicBackName}</span>
                ) : (
                  <span className="file-drop-label">Click to upload the back side</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="form-section" ref={(el) => (sectionRefs.current[3] = el)} data-step-index="3">
          <h3 className="section-label">Security</h3>
          <div className="form-grid">
            <div className="input-group">
              <label>Password</label>
              <div className="password-field">
                <input  type={showPassword ? "text" : "password"}  name="password"  placeholder="At least 8 characters"  value={formData.password}  onChange={handleChange}
                  minLength={8}   required />
                <button  type="button"    className="password-toggle"    onClick={() => setShowPassword((v) => !v)}    aria-label={showPassword ? "Hide password" : "Show password"}  >
                  <EyeIcon visible={showPassword} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="terms-section">
          <label><input type="checkbox" required /> I accept the Terms & Conditions</label>
          <label><input type="checkbox" required /> I agree to the Privacy Policy</label>
        </div>

        <div className="action-buttons">
          <button type="submit" className="primary-btn" disabled={loading}>
            {loading ? "Creating account…" : "Create account"}
          </button>
          <button type="reset" className="reset-btn" disabled={loading}>Reset</button>
        </div>

        <p className="login-link">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>

      <div className="register-illustration-panel">
        <SecurityPattern />
        <div className="register-illustration-content">
          <div className="stepper-header">
            <span className="stepper-title">Setting up your e-ID</span>
            <span className="stepper-count">Step {activeStep + 1} of {STEPS.length}</span>
          </div>
          <div className="stepper-progress-track">
            <div
              className="stepper-progress-fill"
              style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
            />
          </div>

          <div className="register-stepper">
            {STEPS.map((step, i) => {
              const state = i < activeStep ? "done" : i === activeStep ? "active" : "upcoming";
              return (
                <div className={`stepper-item stepper-item--${state}`} key={step.label}>
                  <div className="stepper-node">
                    <span className="stepper-circle">{state === "done" ? <CheckIcon /> : step.icon}</span>
                    {i < STEPS.length - 1 && <span className="stepper-line" />}
                  </div>
                  <div className="stepper-text">
                    <p className="stepper-label">{step.label}</p>
                    <p className="stepper-caption">{step.caption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;