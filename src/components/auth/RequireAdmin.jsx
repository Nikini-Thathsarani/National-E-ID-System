import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

/**
 * Wrap any admin-only route with this component:
 *   <Route path="/admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
 *
 * It re-checks on every mount (page refresh, direct link) rather than trusting
 * cached client state, and always falls back to /admin-login when unsure.
 */
function RequireAdmin({ children }) {
  const [status, setStatus] = useState("checking"); // checking | authorized | unauthorized

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setStatus("unauthorized");
        return;
      }
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        setStatus(snap.exists() && snap.data().role === "admin" ? "authorized" : "unauthorized");
      } catch {
        setStatus("unauthorized");
      }
    });
    return () => unsubscribe();
  }, []);

  if (status === "checking") {
    return <div className="admin-guard-loading">Checking access…</div>;
  }

  if (status === "unauthorized") {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
}

export default RequireAdmin;