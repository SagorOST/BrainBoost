import "../styles/Hero.css";
import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-badge">
          🚀 Learn Smarter
        </span>

        <h1>
          Where Curiosity
          <br />
          Meets Excellence
        </h1>

        <p>
          Discover engaging quizzes designed to help you learn faster,
          remember better, and achieve your academic goals with AI-powered
          learning.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Quiz
          </button>

          <button className="secondary-btn">
            Talk with AI
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img src={heroImage} alt="Hero" />
      </div>
    </section>
  );
}