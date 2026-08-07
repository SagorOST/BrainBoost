import {
  FaBrain,
  FaBolt,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

import "../styles/WhyChoose.css";

export default function WhyChoose() {
  const features = [
    {
      icon: <FaBrain />,
      title: "AI-Powered Learning",
      description:
        "Get intelligent learning support and personalized guidance whenever you need it.",
    },
    {
      icon: <FaBolt />,
      title: "Smart Practice",
      description:
        "Practice with interactive quizzes that make learning faster, easier, and more engaging.",
    },
    {
      icon: <FaChartLine />,
      title: "Track Your Progress",
      description:
        "Monitor your performance and understand where you are improving and where you need more practice.",
    },
    {
      icon: <FaTrophy />,
      title: "Compete & Improve",
      description:
        "Challenge yourself, improve your scores, and stay motivated throughout your learning journey.",
    },
  ];

  return (
    <section className="why-choose">
      <div className="why-container">

        <div className="why-heading">
          <span>WHY BRAINBOOST?</span>

          <h2>
            Learn Smarter.
            <br />
            <span>Achieve More.</span>
          </h2>

          <p>
            Everything you need to make learning more effective,
            interactive, and enjoyable.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <div className="why-number">
                0{index + 1}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}