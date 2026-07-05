import "../../styles/Security.css";

import {
  FaLock,
  FaFingerprint,
  FaShieldAlt,
  FaQrcode,
} from "react-icons/fa";

function Security() {

  const securityItems = [

    {
      icon: <FaLock />,
      title: "End-to-End Encryption",
      description:
        "All citizen data is encrypted during transmission and storage."
    },

    {
      icon: <FaShieldAlt />,
      title: "Multi-Factor Authentication",
      description:
        "Secure login using password and additional verification methods."
    },

    {
      icon: <FaFingerprint />,
      title: "Biometric Verification",
      description:
        "Fingerprint or facial recognition can be used for identity verification."
    },

    {
      icon: <FaQrcode />,
      title: "QR Verification",
      description:
        "Government agencies can instantly verify a citizen's digital identity."
    }

  ];

  return (

    <section className="security">

      <div className="security-title">

        <h2>Security & Privacy</h2>

        <p>
          The National e-ID System is designed with advanced security
          technologies to protect every citizen's digital identity.
        </p>

      </div>

      <div className="security-grid">

        {securityItems.map((item, index) => (

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