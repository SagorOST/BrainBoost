import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AuthorDashboard.css";

export default function AuthorDashboard() {
  const navigate = useNavigate();

  // ================= LOAD QUIZZES =================

  const [quizzes, setQuizzes] = useState(() => {
    try {
      const savedQuizzes =
        JSON.parse(
          localStorage.getItem("brainboostQuizzes")
        ) || [];

      return Array.isArray(savedQuizzes)
        ? savedQuizzes
        : [];
    } catch (error) {
      console.error(
        "Error loading quizzes:",
        error
      );

      return [];
    }
  });

  // ================= LOAD RESULTS =================

  const [results] = useState(() => {
    try {
      const savedResults =
        JSON.parse(
          localStorage.getItem("brainboostResults")
        ) || [];

      return Array.isArray(savedResults)
        ? savedResults
        : [];
    } catch (error) {
      console.error(
        "Error loading results:",
        error
      );

      return [];
    }
  });

  // ================= DELETE QUIZ =================

  const handleDeleteQuiz = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this quiz?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedQuizzes = quizzes.filter(
      (quiz) =>
        String(quiz.id) !== String(id)
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

  // ================= TOTAL ATTEMPTS =================

  const totalAttempts = results.length;

  // ================= AVERAGE SCORE =================

  const averageScore =
    totalAttempts > 0
      ? Math.round(
          results.reduce(
            (total, result) =>
              total +
              Number(result.percentage || 0),
            0
          ) / totalAttempts
        )
      : 0;

  // ================= QUIZ PERFORMANCE =================

  const getQuizPerformance = (quizId) => {
    const quizResults = results.filter(
      (result) =>
        String(result.quizId) ===
        String(quizId)
    );

    const attempts = quizResults.length;

    const average =
      attempts > 0
        ? Math.round(
            quizResults.reduce(
              (total, result) =>
                total +
                Number(
                  result.percentage || 0
                ),
              0
            ) / attempts
          )
        : 0;

    return {
      attempts,
      average,
    };
  };

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
              Create engaging quizzes and help
              students learn smarter.
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
              <h2>{totalAttempts}</h2>
              <p>Total Attempts</p>
            </div>

          </div>

          {/* Average Score */}

          <div className="stat-card">

            <div className="stat-icon">
              ⭐
            </div>

            <div>
              <h2>{averageScore}%</h2>
              <p>Average Score</p>
            </div>

          </div>

          {/* Published Quizzes */}

          <div className="stat-card">

            <div className="stat-icon">
              🏆
            </div>

            <div>
              <h2>
                {publishedQuizzes.length}
              </h2>

              <p>
                Published Quizzes
              </p>
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

              {quizzes.map((quiz) => {

                const performance =
                  getQuizPerformance(
                    quiz.id
                  );

                return (
                  <div
                    className="author-quiz-card"
                    key={quiz.id}
                  >

                    <div className="quiz-card-info">

                      <span className="quiz-category">
                        {quiz.category ||
                          "General"}
                      </span>

                      <h3>
                        {quiz.title ||
                          "Untitled Quiz"}
                      </h3>

                      <p>
                        {quiz.description ||
                          "No description provided."}
                      </p>

                      <div className="quiz-meta">

                        {/* Questions */}

                        <span>
                          📝{" "}
                          {quiz.questions?.length ||
                            0}{" "}
                          Questions
                        </span>

                        {/* Status */}

                        <span
                          className={
                            quiz.status ===
                            "published"
                              ? "status-published"
                              : "status-draft"
                          }
                        >
                          {quiz.status ===
                          "published"
                            ? "🟢 Published"
                            : "🟡 Draft"}
                        </span>

                        {/* Attempts */}

                        <span>
                          👨‍🎓{" "}
                          {performance.attempts}{" "}
                          Attempts
                        </span>

                        {/* Average */}

                        <span>
                          🏆{" "}
                          {performance.average}%
                          {" "}
                          Average
                        </span>

                      </div>

                    </div>

                    {/* ================= ACTIONS ================= */}

                    <div className="quiz-card-actions">

                      {/* View Quiz */}

                      <button
                        type="button"
                        className="view-quiz-btn"
                        onClick={() =>
                          navigate(
                            `/quiz/${quiz.id}`
                          )
                        }
                      >
                        👁 View
                      </button>

                      {/* Delete Quiz */}

                      <button
                        type="button"
                        className="delete-quiz-btn"
                        onClick={() =>
                          handleDeleteQuiz(
                            quiz.id
                          )
                        }
                      >
                        🗑 Delete
                      </button>

                    </div>

                  </div>
                );
              })}

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
                Start creating your first quiz
                and share your knowledge with
                students.
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