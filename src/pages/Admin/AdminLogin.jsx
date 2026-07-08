import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/Admin.css";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";


const ShieldMark = () => (
  <svg className="admin-brand-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 3L27 7V15C27 21.6 22.4 27.6 16 29C9.6 27.6 5 21.6 5 15V7L16 3Z" fill="#3B82F6" />
    <path d="M11 16L14.5 19.5L21 12" stroke="#0B1220" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const credential = await signInWithEmailAndPassword(auth, email, password);

      // Client-side check — a UX convenience only. The real enforcement
      // must live in Firestore Security Rules (see the rules snippet).
      const snap = await getDoc(doc(db, "users", credential.user.uid));
      const role = snap.exists() ? snap.data().role : null;

      if (role !== "admin") {
        await signOut(auth);
        setError("This account doesn't have admin access.");
        setLoading(false);
        return;
      }

      navigate("/admin");
    } catch (err) {
      setError(friendlyError(err.code));
      setLoading(false);
    }
  };

  return (
    <div className="admin-wrapper">
      <div className="admin-card">
        <div className="admin-brand">
          <ShieldMark />
          <span>National E-ID <em>Admin</em></span>
        </div>

        <h1 className="admin-title">Staff sign-in</h1>
        <p className="admin-subtitle">Restricted access. Authorized personnel only.</p>

        {error && (
          <div className="admin-error" role="alert">
            {error}
          </div>
        )}

        <form className="admin-form" onSubmit={handleSubmit}>
          <label htmlFor="admin-email">Email address</label>
          <input
            id="admin-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="username"
            required
          />

          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />

          <button type="submit" className="admin-btn" disabled={loading}>
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <Link to="/" className="admin-back-link">← Back to citizen portal</Link>
      </div>
    </div>
  );
}

export default AdminLogin;