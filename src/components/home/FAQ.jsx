import { useState } from "react";
import "../../styles/FAQ.css";

function FAQ() {
  const faqs = [
    {
      question: "What is the National e-ID System?",
      answer:
        "It is a secure digital identity platform that allows citizens to access government services online."
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Yes. The system uses encryption, biometric verification and multi-factor authentication."
    },
    {
      question: "Can I use my e-ID on mobile devices?",
      answer:
        "Yes. Your digital identity can be securely accessed from smartphones and tablets."
    },
    {
      question: "How do I register?",
      answer:
        "Visit the nearest registration center or use the online registration portal when available."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">

      <div className="section-title">
        <h2>Frequently Asked Questions</h2>

        <p>
          Find answers to the most commonly asked questions about the National e-ID System.
        </p>
      </div>

      <div className="faq-container">

        {faqs.map((faq, index) => (

          <div className="faq-item" key={index}>

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}

              <span>
                {activeIndex === index ? "-" : "+"}
              </span>

            </button>

            {activeIndex === index && (

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;