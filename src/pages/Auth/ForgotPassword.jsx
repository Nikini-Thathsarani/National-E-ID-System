import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const ShieldMark = () => (
  <svg className="login-brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L27 7V15C27 21.6 22.4 27.6 16 29C9.6 27.6 5 21.6 5 15V7L16 3Z" fill="#2563EB" />
    <path d="M11 16L14.5 19.5L21 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityPattern = () => (
  <svg className="login-security-pattern" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="guilloche-forgot" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
        <path d="M0 23 Q 11.5 0 23 23 T 46 23" fill="none" stroke="#BFDBFE" strokeWidth="0.6" opacity="0.5" />
        <path d="M0 11.5 Q 11.5 -11.5 23 11.5 T 46 11.5" fill="none" stroke="#BFDBFE" strokeWidth="0.5" opacity="0.35" />
        <path d="M0 34.5 Q 11.5 11.5 23 34.5 T 46 34.5" fill="none" stroke="#BFDBFE" strokeWidth="0.5" opacity="0.35" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#guilloche-forgot)" />
  </svg>
);

const IdCardIllustration = () => (
  <svg className="login-id-card" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="292" height="182" rx="18" fill="#1D4ED8" stroke="#BFDBFE" strokeWidth="1.5" />
    <rect x="28" y="30" width="40" height="30" rx="5" fill="#DBEAFE" />
    <line x1="28" y1="40" x2="68" y2="40" stroke="#1D4ED8" strokeWidth="1" />
    <line x1="28" y1="50" x2="68" y2="50" stroke="#1D4ED8" strokeWidth="1" />
    <line x1="40" y1="30" x2="40" y2="60" stroke="#1D4ED8" strokeWidth="1" />
    <line x1="56" y1="30" x2="56" y2="60" stroke="#1D4ED8" strokeWidth="1" />
    <rect x="28" y="82" width="120" height="8" rx="4" fill="#93C5FD" />
    <rect x="28" y="98" width="90" height="6" rx="3" fill="#60A5FA" />
    <rect x="28" y="112" width="100" height="6" rx="3" fill="#60A5FA" />
    <g opacity="0.9">
      <circle cx="248" cy="150" r="26" fill="none" stroke="#BFDBFE" strokeWidth="1.4" />
      <circle cx="248" cy="150" r="19" fill="none" stroke="#BFDBFE" strokeWidth="1.2" opacity="0.7" />
      <circle cx="248" cy="150" r="12" fill="none" stroke="#BFDBFE" strokeWidth="1" opacity="0.5" />
    </g>
    <g transform="translate(228,20)">
      <circle cx="20" cy="20" r="20" fill="#22C55E" />
      <path d="M12 20l5.5 5.5L28 14" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </svg>
);

const ERROR_MESSAGES = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "No account found with that email address.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
};

const friendlyError = (code) => ERROR_MESSAGES[code] || "Something went wrong. Please try again.";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setSent(true);
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        {/* Form side */}
        <div className="login-form-side">
          <div className="login-brand">
            <ShieldMark />
            <span>National E-ID</span>
          </div>

          {sent ? (
            <>
              <h1 className="login-title">Check your email</h1>
              <p className="login-subtitle">
                We've sent a password reset link to <strong>{email}</strong>. Open that email and
                follow the link to choose a new password.
              </p>
              <button
                type="button"
                className="login-btn"
                onClick={() => navigate("/login")}
              >
                Back to login
              </button>
              <p className="register-link">
                Didn't get it?{" "}
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "#2563EB",
                    fontWeight: 600,
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Try a different email
                </button>
              </p>
            </>
          ) : (
            <>
              <h1 className="login-title">Reset your password</h1>
              <p className="login-subtitle">
                Enter the email address linked to your account and we'll send you a link to reset
                your password.
              </p>

              {error && (
                <div className="login-error" role="alert">
                  {error}
                </div>
              )}

              <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email address</label>
                <input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email"  required
                />

                <button type="submit" className="login-btn" disabled={loading}>
                  {loading ? "Sending…" : "Send reset link"}
                </button>
              </form>

              <p className="register-link">
                Remembered your password? <Link to="/login">Log in</Link>
              </p>
            </>
          )}
        </div>
        <div className="login-image-side">
          <SecurityPattern />
          <div className="login-image-content">
            <IdCardIllustration />
            <h2>Your identity, verified.</h2>
            <p>One secure account for every national digital service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;