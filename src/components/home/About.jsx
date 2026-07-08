import "../../styles/About.css";
import {
  FaShieldAlt,
  FaFingerprint,
  FaUniversity,
  FaUserCheck,
  FaArrowRight,
} from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-left">

        <div className="digital-card">

          <div className="digital-header">
            <span className="badge">National e-ID</span>
            <span className="status">Verified</span>
          </div>
          
         <div className="avatar">
          <FaUserCircle />
          </div>

          <h3>Nikini Thathsarani</h3>

          <p>Digital Citizen</p>

          <div className="info-box">

            <div>
              <strong>ID</strong>
              <span>SL2026XXXXXX</span>
            </div>

            <div>
              <strong>Status</strong>
              <span>Active</span>
            </div>

          </div>

        </div>

      </div>

      <div className="about-right">

        <span className="section-title">
          ABOUT NATIONAL e-ID
        </span>

        <h2>
          One Secure Identity for Every Sri Lankan Citizen
        </h2>

        <p>
          The National Electronic Identity System provides a trusted,
          secure, and convenient digital identity that allows citizens
          to access government services anytime and anywhere.
        </p>

        <div className="feature-list">

          <div>
            <FaShieldAlt />
            Secure Authentication
          </div>

          <div>
            <FaUniversity />
            Government Integration
          </div>

          <div>
            <FaUserCheck />
            Verified Citizens
          </div>

          <div>
            <FaFingerprint />
            Biometric Verification
          </div>

        </div>

      

      </div>

    </section>
  );
}

export default About;