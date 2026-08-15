import { Link } from "react-router-dom";
import {
  FaCode,
  FaHtml5,
  FaRobot,
  FaDatabase,
  FaShieldAlt,
  FaBookOpen,
} from "react-icons/fa";

import "../styles/Categories.css";

export default function Categories() {
  const categories = [
    {
      icon: <FaCode />,
      title: "Programming",
      description: "Practice C, C++, Java, Python and more.",
      path: "/quiz/programming",
    },
    {
      icon: <FaHtml5 />,
      title: "Web Development",
      description:
        "HTML, CSS, JavaScript, React and modern web technologies.",
      path: "/quiz/web-development",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      description:
        "Machine Learning, Deep Learning and AI fundamentals.",
      path: "/quiz/artificial-intelligence",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      description:
        "Learn SQL, MySQL and Database Management Systems.",
      path: "/quiz/database",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description:
        "Understand ethical hacking and online security basics.",
      path: "/quiz/cyber-security",
    },
    {
      icon: <FaBookOpen />,
      title: "General Knowledge",
      description:
        "Improve your knowledge with fun daily quizzes.",
      path: "/quiz/general-knowledge",
    },
  ];

  return (
    <section id="categories" className="categories">
      <div className="categories-container">

        <div className="categories-heading">
          <span>EXPLORE & LEARN</span>

          <h2>
            Popular Quiz <span>Categories</span>
          </h2>

          <p>
            Choose your favorite topic and start learning today.
          </p>
        </div>

        <div className="category-grid">

          {categories.map((category, index) => (
            <div className="category-card" key={index}>

              <div className="category-icon">
                {category.icon}
              </div>

              <div className="category-content">

                <h3>{category.title}</h3>

                <p>{category.description}</p>

                <Link
                  to={category.path}
                  className="category-btn"
                >
                  Explore Quiz →
                </Link>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}