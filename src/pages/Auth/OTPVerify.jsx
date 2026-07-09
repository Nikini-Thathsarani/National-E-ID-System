import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../../styles/OTPVerify.css";
import emailjs from "@emailjs/browser";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../../emailjsConfig";

const ShieldMark = () => (
  <svg className="otp-brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L27 7V15C27 21.6 22.4 27.6 16 29C9.6 27.6 5 21.6 5 15V7L16 3Z" fill="#2563EB" />
    <path d="M11 16L14.5 19.5L21 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityPattern = () => (
  <svg className="otp-security-pattern" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="guilloche-otp" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
        <path d="M0 23 Q 11.5 0 23 23 T 46 23" fill="none" stroke="#BFDBFE" strokeWidth="0.6" opacity="0.5" />
        <path d="M0 11.5 Q 11.5 -11.5 23 11.5 T 46 11.5" fill="none" stroke="#BFDBFE" strokeWidth="0.5" opacity="0.35" />
        <path d="M0 34.5 Q 11.5 11.5 23 34.5 T 46 34.5" fill="none" stroke="#BFDBFE" strokeWidth="0.5" opacity="0.35" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#guilloche-otp)" />
  </svg>
);

const OtpLockIllustration = () => (
  <svg className="otp-lock-illustration" viewBox="0 0 260 220" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="92" width="120" height="98" rx="14" fill="#1D4ED8" stroke="#BFDBFE" strokeWidth="1.5" />
    <path d="M92 92V64a38 38 0 0176 0v28" stroke="#BFDBFE" strokeWidth="6" fill="none" strokeLinecap="round" />
    <circle cx="130" cy="132" r="12" fill="#DBEAFE" />
    <rect x="125" y="140" width="10" height="22" rx="4" fill="#DBEAFE" />
    <g opacity="0.85">
      <rect x="18" y="150" width="26" height="26" rx="6" stroke="#BFDBFE" strokeWidth="1.3" fill="none" />
      <rect x="216" y="30" width="26" height="26" rx="6" stroke="#BFDBFE" strokeWidth="1.3" fill="none" />
    </g>
  </svg>
);

const RESEND_SECONDS = 60;
const OTP_LENGTH = 6;
const OTP_VALID_MS = 5 * 60 * 1000;

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

const maskEmail = (email) => {
  if (!email) return "";
  const [name, domain] = email.split("@");
  if (!domain) return email;
  const visible = name.slice(0, 2);
  return `${visible}${"*".repeat(Math.max(name.length - 2, 1))}@${domain}`;
};

function OTPVerify() {
  const navigate = useNavigate();
  const location = useLocation();
  const { uid, email } = location.state || {};

  const [otp, setOtp] = useState(new Array(OTP_LENGTH).fill(""));
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(RESEND_SECONDS);
  const inputRefs = useRef([]);

  /* Resend cooldown ticker */
  useEffect(() => {
    if (resendCooldown <= 0) return undefined;
    const timer = setInterval(() => setResendCooldown((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleResend = async () => {
    if (resendCooldown > 0 || !uid || sending) return;
    setError("");
    setSending(true);
    try {
      const newCode = generateOtp();
      const newExpiry = Date.now() + OTP_VALID_MS;

      await updateDoc(doc(db, "users", uid), {
        otpCode: newCode,
        otpExpiresAt: newExpiry,
      });

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        to_name: email,
        to_email: email,
        otp_code: newCode,
      });

      setOtp(new Array(OTP_LENGTH).fill(""));
      inputRefs.current[0]?.focus();
      setResendCooldown(RESEND_SECONDS);
    } catch (err) {
      console.error(err);
      setError("Couldn't resend the code. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (value, index) => {
    if (value && isNaN(value)) return;
    const digit = value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = digit;
    setOtp(newOtp);
    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    setError("");
    const finalOtp = otp.join("");

    if (finalOtp.length !== OTP_LENGTH) {
      setError("Please enter the full 6-digit code.");
      return;
    }
    if (!uid) {
      setError("This session has expired. Please go back and register again.");
      return;
    }

    setLoading(true);
    try {
      const userRef = doc(db, "users", uid);
      const snap = await getDoc(userRef);

      if (!snap.exists()) {
        setError("We couldn't find your registration. Please register again.");
        return;
      }

      const data = snap.data();

      if (!data.otpCode || Date.now() > data.otpExpiresAt) {
        setError("This code has expired. Please request a new one.");
        return;
      }

      if (data.otpCode !== finalOtp) {
        setError("That code doesn't look right. Please check and try again.");
        return;
      }

      await updateDoc(userRef, {
        emailVerified: true,
        status: "pending",
        otpCode: null,
        otpExpiresAt: null,
      });

      navigate("/");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!uid || !email) {
    return (
      <div className="otp-wrapper">
        <div className="otp-card">
          <div className="otp-form-side">
            <div className="otp-brand">
              <ShieldMark />
              <span>National E-ID</span>
            </div>
            <h1 className="otp-title">No verification in progress</h1>
            <p className="otp-subtitle">
              We couldn't find a registration session to verify. Please register again to receive a code.
            </p>
            <Link to="/register" className="otp-btn otp-btn-link">
              Back to registration
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="otp-wrapper">
      <div className="otp-card">
        <div className="otp-form-side">
          <div className="otp-brand">
            <ShieldMark />
            <span>National E-ID</span>
          </div>

          <h1 className="otp-title">Verify your email address</h1>
          <p className="otp-subtitle">
            Enter the 6-digit code we sent to <strong>{maskEmail(email)}</strong>.
          </p>

          {error && (
            <div className="otp-error" role="alert">
              {error}
            </div>
          )}

          <div className="otp-inputs">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputRefs.current[index] = el)}
                className="otp-box"
              />
            ))}
          </div>

          <button type="button" className="otp-btn" onClick={handleVerify} disabled={loading}>
            {loading ? "Verifying…" : "Verify"}
          </button>

          <p className="resend-text">
            Didn't receive it?{" "}
            {resendCooldown > 0 ? (
              <span className="resend-disabled">Resend in {resendCooldown}s</span>
            ) : (
              <button type="button" className="resend-link" onClick={handleResend} disabled={sending}>
                {sending ? "Sending…" : "Resend"}
              </button>
            )}
          </p>
        </div>

        <div className="otp-image-side">
          <SecurityPattern />
          <div className="otp-image-content">
            <OtpLockIllustration />
            <h2>Almost there.</h2>
            <p>A one-time code keeps your identity safe.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPVerify;