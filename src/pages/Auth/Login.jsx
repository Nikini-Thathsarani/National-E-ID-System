import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";
import {signInWithEmailAndPassword,setPersistence,browserLocalPersistence,browserSessionPersistence,} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ShieldMark = () => (
  <svg className="login-brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L27 7V15C27 21.6 22.4 27.6 16 29C9.6 27.6 5 21.6 5 15V7L16 3Z" fill="#2563EB" />
    <path d="M11 16L14.5 19.5L21 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityPattern = () => (
  <svg className="login-security-pattern" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="loginGuilloche" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
        <path d="M0 23 Q 11.5 0 23 23 T 46 23" fill="none" stroke="#FFFFFF" strokeWidth="0.6" opacity="0.45" />
        <path d="M0 11.5 Q 11.5 -11.5 23 11.5 T 46 11.5" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.28" />
        <path d="M0 34.5 Q 11.5 11.5 23 34.5 T 46 34.5" fill="none" stroke="#FFFFFF" strokeWidth="0.5" opacity="0.28" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#loginGuilloche)" />
  </svg>
);

const IdCardIllustration = () => (
  <svg className="login-id-card" viewBox="0 0 300 190" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="292" height="182" rx="18" fill="#3B67F5" stroke="#8FA8FF" strokeWidth="1.5" />
    <rect x="28" y="30" width="40" height="30" rx="8" fill="#FFFFFF" opacity="0.9" />
    <g stroke="#3B67F5" strokeWidth="1.4">
      <line x1="38" y1="30" x2="38" y2="60" />
      <line x1="58" y1="30" x2="58" y2="60" />
      <line x1="28" y1="40" x2="68" y2="40" />
      <line x1="28" y1="50" x2="68" y2="50" />
    </g>
    <rect x="28" y="84" width="120" height="9" rx="4.5" fill="#FFFFFF" opacity="0.9" />
    <rect x="28" y="101" width="150" height="7" rx="3.5" fill="#FFFFFF" opacity="0.55" />
    <rect x="28" y="115" width="130" height="7" rx="3.5" fill="#FFFFFF" opacity="0.55" />
    <g transform="translate(230,18)">
      <circle cx="22" cy="22" r="22" fill="#22C55E" />
      <path d="M13 22l6 6L32 15" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
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

const ERROR_MESSAGES = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "Incorrect email or password.",
  "auth/wrong-password": "Incorrect email or password.",
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/too-many-requests": "Too many attempts. Please wait a moment and try again.",
};

const friendlyError = (code) => ERROR_MESSAGES[code] || "Something went wrong. Please try again.";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await setPersistence(auth, rememberMe ? browserLocalPersistence : browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
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

          <h1 className="login-title">Sign in to your account</h1>
          <p className="login-subtitle">
            Access your verified identity and connected government services.
          </p>

          {error && (
            <div className="login-error" role="alert">
              {error}
            </div>
          )}

          <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)}autoComplete="email"
              required
            />

            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input id="password"  type={showPassword ? "text" : "password"}  placeholder="At least 8 characters" value={password} onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                minLength={8}
                required
              />
              <button
                type="button"
                className="password-toggle" onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"} >
                <EyeIcon visible={showPassword} />
              </button>
            </div>

            <div className="login-meta-row">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Signing in…" : "Log in"}
            </button>
          </form>

          <p className="register-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>
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

export default Login;