import "../../styles/Security.css";
import {
  FaLock,
  FaShieldAlt,
  FaFingerprint,
  FaServer,
} from "react-icons/fa";

function Security() {
  const securityFeatures = [
    {
      icon: <FaLock />,
      title: "End-to-End Encryption",
      description:
        "All personal information is encrypted to protect your privacy and identity.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Multi-Factor Authentication",
      description:
        "Secure login using passwords, OTP verification, and trusted devices.",
    },
    {
      icon: <FaFingerprint />,
      title: "Biometric Verification",
      description:
        "Fingerprint and facial recognition ensure only you can access your account.",
    },
    {
      icon: <FaServer />,
      title: "Secure Government Servers",
      description:
        "Citizen information is stored in highly secure government infrastructure.",
    },
  ];

  return (
    <section id="security" className="security-section">

      <div className="security-title">
        <span>SECURITY</span>

        <h2>Your Identity is Protected</h2>

        <p>
          Advanced security technologies keep your National e-ID safe,
          private, and trusted.
        </p>
      </div>

      <div className="security-grid">

        {securityFeatures.map((item, index) => (

          <div className="security-card" key={index}>

            <div className="security-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Security;