import "../../styles/Navbar.css";
import logo from "../../assets/logos/logo.jpeg";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="National e-ID Logo" />
        <span>National E-ID</span>
      </div>

      <ul className="nav-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li>Features</li>
        <li>Security</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-buttons">
        {location.pathname !== "/login" && (
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
        {location.pathname !== "/register" && (
          <button className="register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
        )}
      </div>
    </nav>
  );
}
export default Navbar;