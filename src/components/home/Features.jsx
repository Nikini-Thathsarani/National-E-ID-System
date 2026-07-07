import "../../styles/Features.css";

import {
  FaShieldAlt,
  FaIdCard,
  FaBolt,
  FaLock,
  FaUniversity,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShieldAlt />,
    title: "Secure Identity",
    description:
      "Advanced encryption keeps every citizen's digital identity safe."
  },
  {
    icon: <FaIdCard />,
    title: "Digital ID Card",
    description:
      "Access your National e-ID digitally anytime and anywhere."
  },
  {
    icon: <FaBolt />,
    title: "Fast Verification",
    description:
      "Verify identities instantly using secure technology."
  },
  {
    icon: <FaLock />,
    title: "Privacy Protection",
    description:
      "Your personal information remains private and protected."
  },
  {
    icon: <FaUniversity />,
    title: "Government Services",
    description:
      "One login for all government digital services."
  },
  {
    icon: <FaClock />,
    title: "24/7 Availability",
    description:
      "Use your e-ID anytime without visiting government offices."
  },
];

function Features() {
  return (
    <section id="features" className="features">

      <div className="section-header">

        <span>OUR FEATURES</span>

        <h2>
          Why Choose National e-ID?
        </h2>

        <p>
          A trusted digital identity platform built for every Sri Lankan citizen,
          ensuring security, convenience, and accessibility.
        </p>

      </div>

      <div className="features-grid">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;