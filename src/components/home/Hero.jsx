import "../../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="badge">
          🇱🇰 Sri Lanka Digital Identity
        </span>

        <h1>
          National <span>E-ID</span>
          <br />
          Digital Identity System
        </h1>

        <p>
          A secure and trusted digital identity platform that allows
          Sri Lankan citizens to verify their identity, access
          government services, and protect personal information.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

      </div>

      <div className="hero-right">

        <div className="id-card">

          <div className="card-top">
            <h3>National e-ID</h3>
            <span>Verified</span>
          </div>

          <div className="profile-circle"></div>

          <h2>Citizen Name</h2>

          <p>ID : 200XXXXXXXXX</p>

          <div className="status">
            Active Citizen
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;