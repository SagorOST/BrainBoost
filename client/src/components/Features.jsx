import "../styles/Features.css";

export default function Features() {
  return (
    <section className="features">
      <h2>Popular Quiz Categories</h2>
      <p className="feature-subtitle">
        Choose your favorite topic and start learning today.
      </p>

      <div className="feature-cards">
        <div className="card">
          <div className="icon">💻</div>
          <h3>Programming</h3>
          <p>Practice C, C++, Java, Python and more.</p>
        </div>

        <div className="card">
          <div className="icon">🌐</div>
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, React and modern web technologies.</p>
        </div>

        <div className="card">
          <div className="icon">🤖</div>
          <h3>Artificial Intelligence</h3>
          <p>Machine Learning, Deep Learning and AI fundamentals.</p>
        </div>

        <div className="card">
          <div className="icon">🗄️</div>
          <h3>Database</h3>
          <p>Learn SQL, MySQL and Database Management Systems.</p>
        </div>

        <div className="card">
          <div className="icon">🔐</div>
          <h3>Cyber Security</h3>
          <p>Understand ethical hacking and online security basics.</p>
        </div>

        <div className="card">
          <div className="icon">📚</div>
          <h3>General Knowledge</h3>
          <p>Improve your knowledge with fun daily quizzes.</p>
        </div>
      </div>
    </section>
  );
}