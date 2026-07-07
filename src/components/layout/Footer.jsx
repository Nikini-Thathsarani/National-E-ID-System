import "../../styles/Footer.css";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer id="contact" className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>National e-ID</h2>

          <p>
            Sri Lanka's trusted digital identity platform providing secure,
            convenient, and reliable access to government services.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#security">Security</a></li>
          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>Email: support@nationaleid.lk</p>
          <p>Phone: +94 11 234 5678</p>
          <p>Colombo, Sri Lanka</p>

        </div>

        <div className="footer-social">

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaGithub /></a>
            <a href="#"><FaEnvelope /></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 National e-ID System | All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;