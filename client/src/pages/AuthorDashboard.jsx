import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/AuthorDashboard.css";

export default function AuthorDashboard() {
  // Load quizzes directly from localStorage
  const [quizzes, setQuizzes] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("brainboostQuizzes")
        ) || []
      );
    } catch (error) {
      console.error("Error loading quizzes:", error);
      return [];
    }
  });

  // ================= DELETE QUIZ =================

  const handleDeleteQuiz = (id) => {
    const updatedQuizzes = quizzes.filter(
      (quiz) => String(quiz.id) !== String(id)
    );

    localStorage.setItem(
      "brainboostQuizzes",
      JSON.stringify(updatedQuizzes)
    );

    setQuizzes(updatedQuizzes);
  };

  // ================= PUBLISHED QUIZZES =================

  const publishedQuizzes = quizzes.filter(
    (quiz) => quiz.status === "published"
  );

  // ================= RENDER =================

  return (
    <div className="author-dashboard">

      <div className="author-container">

        {/* ================= HEADER ================= */}

        <div className="author-header">

          <div>
            <span className="dashboard-badge">
              ✨ Author Panel
            </span>

            <h1>
              Welcome, <span>Author!</span> 👋
            </h1>

            <p>
              Create engaging quizzes and help students
              learn smarter.
            </p>
          </div>

          <Link
            to="/author/create-quiz"
            className="create-quiz-btn"
          >
            + Create Quiz
          </Link>

        </div>


        {/* ================= STATISTICS ================= */}

        <div className="author-stats">

          {/* Total Quizzes */}

          <div className="stat-card">

            <div className="stat-icon">
              📝
            </div>

            <div>
              <h2>{quizzes.length}</h2>
              <p>Total Quizzes</p>
            </div>

          </div>


          {/* Total Attempts */}

          <div className="stat-card">

            <div className="stat-icon">
              👨‍🎓
            </div>

            <div>
              <h2>0</h2>
              <p>Total Attempts</p>
            </div>

          </div>


          {/* Average Rating */}

          <div className="stat-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div>
              <h2>0</h2>
              <p>Average Rating</p>
            </div>

          </div>


          {/* Published Quizzes */}

          <div className="stat-card">

            <div className="stat-icon">
              🏆
            </div>

            <div>
              <h2>{publishedQuizzes.length}</h2>
              <p>Published Quizzes</p>
            </div>

          </div>

        </div>


        {/* ================= QUIZ MANAGEMENT ================= */}

        <div className="quiz-management">

          <div className="section-header">

            <div>
              <h2>Your Quizzes</h2>

              <p>
                Manage the quizzes you have created.
              </p>
            </div>

            <Link
              to="/author/create-quiz"
              className="small-create-btn"
            >
              + New Quiz
            </Link>

          </div>


          {/* ================= QUIZ LIST ================= */}

          {quizzes.length > 0 ? (

            <div className="quiz-list">

              {quizzes.map((quiz) => (

                <div
                  className="author-quiz-card"
                  key={quiz.id}
                >

                  <div className="quiz-card-info">

                    <span className="quiz-category">
                      {quiz.category || "General"}
                    </span>

                    <h3>
                      {quiz.title || "Untitled Quiz"}
                    </h3>

                    <p>
                      {quiz.description ||
                        "No description provided."}
                    </p>

                    <div className="quiz-meta">

                      <span>
                        📝 {quiz.questions?.length || 0} Questions
                      </span>

                      <span
                        className={
                          quiz.status === "published"
                            ? "status-published"
                            : "status-draft"
                        }
                      >
                        {quiz.status === "published"
                          ? "🟢 Published"
                          : "🟡 Draft"}
                      </span>

                    </div>

                  </div>


                  {/* ================= ACTIONS ================= */}

                  <div className="quiz-card-actions">

                    <button
                      type="button"
                      className="view-quiz-btn"
                      onClick={() =>
                        alert(
                          `Quiz: ${quiz.title || "Untitled"}\nQuestions: ${
                            quiz.questions?.length || 0
                          }`
                        )
                      }
                    >
                      👁 View
                    </button>


                    <button
                      type="button"
                      className="delete-quiz-btn"
                      onClick={() =>
                        handleDeleteQuiz(quiz.id)
                      }
                    >
                      🗑 Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* ================= EMPTY STATE ================= */

            <div className="empty-state">

              <div className="empty-icon">
                📝
              </div>

              <h3>
                No quizzes created yet
              </h3>

              <p>
                Start creating your first quiz and
                share your knowledge with students.
              </p>

              <Link
                to="/author/create-quiz"
                className="empty-create-btn"
              >
                Create Your First Quiz →
              </Link>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}