import "../styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">
          <span className="hero-badge">
            🚀 Learn Smarter
          </span>

          <h1>
            Where Curiosity
            <br />
            Meets <span>Excellence</span>
          </h1>

          <p>
            Discover engaging quizzes designed to help you learn faster,
            remember better, and achieve your academic goals with
            <strong> AI-powered learning.</strong>
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              ▶ Start Quiz
            </button>

            <button className="secondary-btn">
              💬 Talk with AI
            </button>
          </div>
        </div>

        {/* Right Side Illustration */}
        <div className="hero-visual">

          <div className="glow-circle"></div>

          <div className="quiz-score">
            <h4>Quiz Score</h4>

            <div className="score-circle">
              <span>85%</span>
            </div>

            <p>Great Job! 🎉</p>
          </div>

          <div className="student-card">
            <div className="student">
              <div className="head"></div>
              <div className="body"></div>
            </div>

            <div className="laptop">
              <div className="screen">
                🧠
              </div>
              <div className="keyboard"></div>
            </div>
          </div>

          <div className="grade-card">
            <h2>A+</h2>

            <div className="grade-line"></div>
            <div className="grade-line"></div>
            <div className="grade-line"></div>
          </div>

          <div className="book-stack">
            📚
          </div>

        </div>

      </div>
    </section>
  );
}