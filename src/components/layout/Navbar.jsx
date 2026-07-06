import "../../styles/Navbar.css";
import { FaGlobe } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <div className="logo-icon">ID</div>

        <div className="logo-text">
          <h2>National e-ID</h2>
          <span>Sri Lanka Digital Identity</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Security</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className="navbar-right">

        <div className="language">
          <FaGlobe />
          <span>English</span>
        </div>

        <button className="login-btn">
          Login
        </button>

        <button className="register-btn">
          Register
        </button>

      </div>

    </nav>
  );
}

export default Navbar;