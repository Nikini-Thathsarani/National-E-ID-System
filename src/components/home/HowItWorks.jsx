import "../../styles/HowItWorks.css";

import {
  FaUserPlus,
  FaUserCheck,
  FaIdCard,
  FaUniversity,
} from "react-icons/fa";

function HowItWorks() {

  const steps = [
    {
      icon: <FaUserPlus />,
      title: "Register",
      description:
        "Create your National e-ID account using your personal information.",
    },
    {
      icon: <FaUserCheck />,
      title: "Verify Identity",
      description:
        "Your identity is verified securely using official government records.",
    },
    {
      icon: <FaIdCard />,
      title: "Receive Digital ID",
      description:
        "After successful verification, your secure Digital e-ID is created.",
    },
    {
      icon: <FaUniversity />,
      title: "Access Government Services",
      description:
        "Use one digital identity to access all connected government services.",
    },
  ];

  return (
    <section className="how-it-works">

      <div className="section-title">
        <h2>How It Works</h2>

        <p>
          Getting your National e-ID is simple, secure and fast.
        </p>
      </div>

      <div className="steps-container">

        {steps.map((step, index) => (

          <div className="step-card" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default HowItWorks;