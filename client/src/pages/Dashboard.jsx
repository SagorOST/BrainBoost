import { Link } from "react-router-dom";
import {
  FaBrain,
  FaBookOpen,
  FaTrophy,
  FaChartLine,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const currentUser =
    JSON.parse(localStorage.getItem("brainboostCurrentUser")) || {
      name: "Learner",
      email: "",
    };

  return (
    <div className="dashboard-page">

      {/* HEADER */}
      <div className="dashboard-header">
        <div>
          <p className="dashboard-welcome">
            Welcome back 👋
          </p>

          <h1>{currentUser.name}</h1>

          <p className="dashboard-subtitle">
            Ready to boost your knowledge today?
          </p>
        </div>

        <div className="dashboard-avatar">
          {currentUser.name.charAt(0).toUpperCase()}
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="dashboard-stats">

        <div className="stat-card">
          <div className="stat-icon">
            <FaBookOpen />
          </div>

          <div>
            <p>Quizzes Completed</p>
            <h2>0</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaTrophy />
          </div>

          <div>
            <p>Average Score</p>
            <h2>0%</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaChartLine />
          </div>

          <div>
            <p>Learning Progress</p>
            <h2>0%</h2>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <FaClock />
          </div>

          <div>
            <p>Study Time</p>
            <h2>0h</h2>
          </div>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="dashboard-content">

        {/* START QUIZ */}
        <div className="dashboard-quiz-card">

          <div className="quiz-card-icon">
            <FaBrain />
          </div>

          <div className="quiz-card-text">
            <h2>Ready for a Quiz?</h2>

            <p>
              Test your knowledge and improve your
              learning with BrainBoost quizzes.
            </p>

            <Link to="/categories" className="dashboard-btn">
              Start Quiz
              <FaArrowRight />
            </Link>
          </div>

        </div>

        {/* RECENT ACTIVITY */}
        <div className="recent-card">

          <div className="recent-header">
            <h2>Recent Activity</h2>
          </div>

          <div className="empty-activity">
            <FaBookOpen />

            <p>No quiz activity yet.</p>

            <span>
              Complete your first quiz to see your
              activity here.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}