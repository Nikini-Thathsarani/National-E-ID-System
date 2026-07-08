import "../../styles/Hero.css";
import IDCard from "./IDCard";
import { FaShieldAlt } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <span className="hero-badge">
          <FaShieldAlt />
          Secure Government Digital Identity
        </span>

        <h1>
          Sri Lanka's
          <span> National e-ID </span>
          Platform
        </h1>

        <p>
          A secure digital identity platform that enables Sri Lankan citizens
          to access government services quickly, safely, and conveniently from
          anywhere.
        </p>

        <div className="hero-features">

  <div className="feature-item">
    🛡️ Secure
  </div>

  <div className="feature-item">
    🔒 Encrypted
  </div>

  <div className="feature-item">
    ⚡ Fast Verification
  </div>

</div>

      </div>

      <div className="hero-image">
        <IDCard />
      </div>

    </section>
  );
}

export default Hero;