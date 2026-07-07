import "../../styles/Hero.css";
import IDCard from "./IDCard";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";

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

        <div className="hero-buttons">

          <button className="primary-btn">
            Get Started
            <FaArrowRight />
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

        <div className="hero-stats">

          <div>
            <h2>5M+</h2>
            <span>Citizens</span>
          </div>

          <div>
            <h2>150+</h2>
            <span>Government Services</span>
          </div>

          <div>
            <h2>99.9%</h2>
            <span>Security</span>
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