import "../../styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2>National e-ID</h2>

          <p>
            Sri Lanka's secure digital identity platform designed to provide
            fast, safe and convenient access to government services.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>

          <ul>
            <li>Digital Identity</li>
            <li>Identity Verification</li>
            <li>Government Services</li>
            <li>Secure Authentication</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>

          <p><FaEnvelope /> support@eid.gov.lk</p>

          <p><FaPhoneAlt /> +94 11 234 5678</p>

          <p><FaMapMarkerAlt /> Colombo, Sri Lanka</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 National e-ID System | All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;