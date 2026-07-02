import "../../styles/Statistics.css";

function Statistics() {
  return (
    <section className="statistics">

      <h2>National e-ID in Numbers</h2>

      <p>
        Building a secure digital future for every Sri Lankan citizen.
      </p>

      <div className="stats-container">

        <div className="stat-card">
          <h1>22M+</h1>
          <span>Citizens</span>
        </div>

        <div className="stat-card">
          <h1>300+</h1>
          <span>Government Services</span>
        </div>

        <div className="stat-card">
          <h1>99.9%</h1>
          <span>System Availability</span>
        </div>

        <div className="stat-card">
          <h1>100%</h1>
          <span>Secure Authentication</span>
        </div>

      </div>

    </section>
  );
}

export default Statistics;