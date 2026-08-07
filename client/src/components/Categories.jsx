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
    },
    {
      icon: <FaHtml5 />,
      title: "Web Development",
      description:
        "HTML, CSS, JavaScript, React and modern web technologies.",
    },
    {
      icon: <FaRobot />,
      title: "Artificial Intelligence",
      description:
        "Machine Learning, Deep Learning and AI fundamentals.",
    },
    {
      icon: <FaDatabase />,
      title: "Database",
      description:
        "Learn SQL, MySQL and Database Management Systems.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description:
        "Understand ethical hacking and online security basics.",
    },
    {
      icon: <FaBookOpen />,
      title: "General Knowledge",
      description:
        "Improve your knowledge with fun daily quizzes.",
    },
  ];

  return (
    <section className="categories">
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

                <button className="category-btn">
                  Explore Quiz →
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}