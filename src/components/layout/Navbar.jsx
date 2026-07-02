import "../../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🛡️  National e-ID
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