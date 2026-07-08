import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  FaHome,
  FaUsers,
  FaIdCard,
  FaCheckCircle,
  FaChartBar,
  FaCog,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.clear(); 
    navigate("/login");   
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>National e-ID</h2>
        <p>Administration Panel</p>
      </div>

      <nav>
        <ul>

          <li>
            <NavLink to="/admin" end>
              <FaHome className="menu-icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/citizens">
              <FaUsers className="menu-icon" />
              <span>Citizens</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/digital-ids">
              <FaIdCard className="menu-icon" />
              <span>Digital IDs</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/verification">
              <FaCheckCircle className="menu-icon" />
              <span>Verification</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/reports">
              <FaChartBar className="menu-icon" />
              <span>Reports</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/settings">
              <FaCog className="menu-icon" />
              <span>Settings</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/profile">
              <FaUserCircle className="menu-icon" />
              <span>Profile</span>
            </NavLink>
          </li>

        </ul>
      </nav>

      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </aside>
  );
}

export default Sidebar;