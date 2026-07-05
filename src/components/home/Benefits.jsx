import "../../styles/Benefits.css";
import { FaUsers, FaLandmark, FaBuilding } from "react-icons/fa";

function Benefits() {
  const benefits = [
    {
      icon: <FaUsers />,
      title: "For Citizens",
      points: [
        "Quick access to government services",
        "One secure digital identity",
        "Reduced paperwork",
        "Fast identity verification",
      ],
    },
    {
      icon: <FaLandmark />,
      title: "For Government",
      points: [
        "Efficient citizen management",
        "Reduced fraud",
        "Improved public service delivery",
        "Secure data management",
      ],
    },
    {
      icon: <FaBuilding />,
      title: "For Businesses",
      points: [
        "Fast customer verification",
        "Secure digital transactions",
        "Trusted identity validation",
        "Reduced operational costs",
      ],
    },
  ];

  return (
    <section className="benefits">
      <div className="benefits-title">
        <h2>Benefits of the National e-ID System</h2>
        <p>
          The National e-ID System creates value for citizens, government
          institutions, and businesses by providing a secure and efficient
          digital identity platform.
        </p>
      </div>

      <div className="benefits-grid">
        {benefits.map((item, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <ul>
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Benefits;