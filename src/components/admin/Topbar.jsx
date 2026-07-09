import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "../../styles/AdminDashboard.css";

function Topbar({ search, setSearch }) {
  const navigate = useNavigate();
  const location = useLocation();

  // Search box only on Citizens page
  const showSearch = location.pathname === "/admin/citizens";

  const [admin, setAdmin] = useState({
    name: "System Administrator",
    role: "Super Admin",
    email: "",
  });

  const [pendingCount, setPendingCount] = useState(0);

  useEffect(() => {
    loadAdmin();
    loadNotifications();
  }, []);

  // Load Admin Details
  const loadAdmin = async () => {
    const snapshot = await getDocs(collection(db, "users"));

    snapshot.forEach((doc) => {
      const user = doc.data();

      if (user.role === "admin") {
        setAdmin({
          name: user.fullName || "System Administrator",
          role: "Super Admin",
          email: user.email,
        });
      }
    });
  };

  // Pending Requests Count
  const loadNotifications = async () => {
    const snapshot = await getDocs(collection(db, "users"));

    let count = 0;

    snapshot.forEach((doc) => {
      const user = doc.data();

      if (
        user.role !== "admin" &&
        user.emailVerified === true &&
        (!user.status || user.status.toLowerCase() === "pending")
      ) {
        count++;
      }
    });

    setPendingCount(count);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1>National e-ID Administration</h1>
      </div>

      <div className="topbar-right">

        {showSearch && (
          <input
            type="text"
            placeholder="Search Citizens..."
            className="search-box"
            value={search}
            onChange={handleSearch}
          />
        )}

        <button
          className="notification-btn"
          onClick={() => navigate("/admin/verification")}
        >
          🔔

          {pendingCount > 0 && (
            <span className="notification-count">
              {pendingCount}
            </span>
          )}
        </button>

        <div className="admin-profile">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
          />

          <div>
            <h4>{admin.name}</h4>
            <p>{admin.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;