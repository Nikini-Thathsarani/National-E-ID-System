import "../../styles/Navbar.css";
import logo from "../../assets/logos/logo.jpeg";

function Navbar() {
  return (
    <nav className="navbar">

     <div className="logo">
  <img src={logo} alt="National e-ID Logo" />
  <span>National E-ID</span>
</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Features</li>
        <li>Security</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-buttons">
        <button className="login-btn">Login</button>
        <button className="register-btn">Register</button>
      </div>

    </nav>
  );
}

export default Navbar;