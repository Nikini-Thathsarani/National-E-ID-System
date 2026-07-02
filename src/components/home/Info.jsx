import "../../styles/Info.css";

function Info() {
  return (
    <section className="info">

      <h2>Why National e-ID?</h2>

      <p className="info-subtitle">
        A secure digital identity platform for every Sri Lankan citizen.
      </p>

      <div className="info-grid">

        <div className="info-card">
          <h3>🔐 High Security</h3>
          <p>
            Protects citizens' personal information using secure authentication
            and encrypted storage.
          </p>
        </div>

        <div className="info-card">
          <h3>🏛 Government Services</h3>
          <p>
            Access government services online without carrying physical
            documents.
          </p>
        </div>

        <div className="info-card">
          <h3>⚡ Fast Verification</h3>
          <p>
            Verify identity instantly for hospitals, banks, universities,
            and government offices.
          </p>
        </div>

        <div className="info-card">
          <h3>🌐 Digital Future</h3>
          <p>
            Supports Sri Lanka's digital transformation and smart government
            initiatives.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Info;