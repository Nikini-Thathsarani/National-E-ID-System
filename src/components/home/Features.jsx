import "../../styles/Features.css";
import {
  FaIdCard,
  FaShieldAlt,
  FaMobileAlt,
  FaUniversity,
  FaFileAlt,
  FaQrcode,
} from "react-icons/fa";

function Features() {
  return (
    <section className="features">

      <div className="features-title">
        <h2>Key Features</h2>
        <p>
          The National e-ID System provides a secure and modern digital identity
          platform for every Sri Lankan citizen.
        </p>
      </div>

      <div className="features-grid">

        <div className="feature-card">
          <FaIdCard className="feature-icon" />
          <h3>Digital Identity</h3>
          <p>
            Every citizen receives a secure digital identity for online and
            offline services.
          </p>
        </div>

        <div className="feature-card">
          <FaShieldAlt className="feature-icon" />
          <h3>Secure Authentication</h3>
          <p>
            Multi-layer authentication with strong encryption protects your
            identity.
          </p>
        </div>

        <div className="feature-card">
          <FaMobileAlt className="feature-icon" />
          <h3>Mobile Access</h3>
          <p>
            Access government services securely using your smartphone or
            computer.
          </p>
        </div>

        <div className="feature-card">
          <FaUniversity className="feature-icon" />
          <h3>Government Services</h3>
          <p>
            Use one digital identity across all participating government
            institutions.
          </p>
        </div>

        <div className="feature-card">
          <FaFileAlt className="feature-icon" />
          <h3>Digital Documents</h3>
          <p>
            Store and verify important digital documents safely in one place.
          </p>
        </div>

        <div className="feature-card">
          <FaQrcode className="feature-icon" />
          <h3>QR Verification</h3>
          <p>
            Instantly verify identity using secure QR code technology.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;