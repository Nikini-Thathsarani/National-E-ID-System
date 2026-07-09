import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Login.css";

import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";

import { auth, db } from "../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ShieldMark = () => (
  <svg
    className="login-brand-mark"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 3L27 7V15C27 21.6 22.4 27.6 16 29C9.6 27.6 5 21.6 5 15V7L16 3Z"
      fill="#2563EB"
    />
    <path
      d="M11 16L14.5 19.5L21 12"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SecurityPattern = () => (
  <svg
    className="login-security-pattern"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="loginGuilloche"
        width="46"
        height="46"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(8)"
      >
        <path
          d="M0 23 Q 11.5 0 23 23 T 46 23"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="0.6"
          opacity="0.45"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#loginGuilloche)" />
  </svg>
);

const IdCardIllustration = () => (
  <svg
    className="login-id-card"
    viewBox="0 0 300 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="292"
      height="182"
      rx="18"
      fill="#3B67F5"
      stroke="#8FA8FF"
      strokeWidth="1.5"
    />
    <rect
      x="28"
      y="30"
      width="40"
      height="30"
      rx="8"
      fill="#FFFFFF"
      opacity="0.9"
    />
  </svg>
);

const EyeIcon = ({ visible }) =>
  visible ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 12s3.6-7 9-7 9 7 9 7-3.6 7-9 7-9-7-9-7z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3l18 18"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );

const ERROR_MESSAGES = {
  "auth/invalid-email": "Please enter a valid email address.",
  "auth/user-not-found": "Incorrect email or password.",
  "auth/wrong-password": "Incorrect email or password.",
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/too-many-requests":
    "Too many attempts. Please wait and try again.",
};

const friendlyError = (code) =>
  ERROR_MESSAGES[code] || "Something went wrong.";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await setPersistence(
        auth,
        rememberMe
          ? browserLocalPersistence
          : browserSessionPersistence
      );

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

      const uid = userCredential.user.uid;

      const userDoc = await getDoc(doc(db, "users", uid));

      if (!userDoc.exists()) {
        setError("User profile not found.");
        return;
      }

      const userData = userDoc.data();

      if (userData.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <div className="login-form-side">

          <div className="login-brand">
            <ShieldMark />
            <span>National E-ID</span>
          </div>

          <h1 className="login-title">
            Sign in to your account
          </h1>

          <p className="login-subtitle">
            Access your verified identity and connected government services.
          </p>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="login-form">

            <label>Email address</label>

            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <div className="password-field">

              <input
                type={showPassword ? "text":"password"}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={()=>setShowPassword(!showPassword)}
              >
                <EyeIcon visible={showPassword}/>
              </button>

            </div>

            <div className="login-meta-row">

              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e)=>setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="forgot-link"
              >
                Forgot password?
              </Link>

            </div>

            <button
              className="login-btn"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Log in"}
            </button>

          </form>

          <p className="register-link">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </div>

        <div className="login-image-side">

          <SecurityPattern />

          <div className="login-image-content">

            <IdCardIllustration />

            <h2>Your identity, verified.</h2>

            <p>
              One secure account for every national digital service.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Login;