import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const [quizzes] = useState(() => {
    const savedQuizzes =
      JSON.parse(localStorage.getItem("brainboostQuizzes")) || [];

    // Only published quizzes
    return savedQuizzes.filter(
      (quiz) => quiz.status === "published"
    );
  });

  return (
    <div className="dashboard-page">

      <div className="dashboard-container">

        {/* ================= HEADER ================= */}

        <div className="dashboard-header">

          <span className="dashboard-badge">
            🧠 Student Dashboard
          </span>

          <h1>
            Welcome Back! 👋
          </h1>

          <p>
            Choose a quiz and test your knowledge.
          </p>

        </div>


        {/* ================= STATS ================= */}

        <div className="student-stats">

          <div className="student-stat-card">
            <span>📝</span>

            <div>
              <h2>{quizzes.length}</h2>
              <p>Available Quizzes</p>
            </div>
          </div>


          <div className="student-stat-card">
            <span>🎯</span>

            <div>
              <h2>0</h2>
              <p>Quizzes Completed</p>
            </div>
          </div>


          <div className="student-stat-card">
            <span>🏆</span>

            <div>
              <h2>0%</h2>
              <p>Average Score</p>
            </div>
          </div>

        </div>


        {/* ================= QUIZZES ================= */}

        <div className="available-quizzes">

          <div className="section-header">

            <div>
              <h2>
                Available Quizzes
              </h2>

              <p>
                Start learning and improve your skills.
              </p>
            </div>

          </div>


          {quizzes.length > 0 ? (

            <div className="quiz-grid">

              {quizzes.map((quiz) => (

                <div
                  className="student-quiz-card"
                  key={quiz.id}
                >

                  <div className="quiz-icon">
                    🧠
                  </div>


                  <span className="quiz-category">
                    {quiz.category}
                  </span>


                  <h3>
                    {quiz.title}
                  </h3>


                  <p>
                    {quiz.description ||
                      "Test your knowledge with this quiz."}
                  </p>


                  <div className="quiz-info">

                    <span>
                      📝 {quiz.questions?.length || 0} Questions
                    </span>

                    <span>
                      ⏱️ Practice
                    </span>

                  </div>


                  <Link
                    to={`/quiz/${quiz.id}`}
                    className="start-quiz-btn"
                  >
                    Start Quiz →
                  </Link>

                </div>

              ))}

            </div>

          ) : (

            <div className="empty-quizzes">

              <div>
                📚
              </div>

              <h3>
                No quizzes available yet
              </h3>

              <p>
                Authors haven't published any quizzes yet.
                Please check again later.
              </p>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}