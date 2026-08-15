import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateQuiz.css";

export default function CreateQuiz() {
  const navigate = useNavigate();

  const [quizTitle, setQuizTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleOptionChange = (option, value) => {
    setOptions({
      ...options,
      [option]: value,
    });
  };

  const handleAddQuestion = () => {
    if (
      !question ||
      !options.A ||
      !options.B ||
      !options.C ||
      !options.D ||
      !correctAnswer
    ) {
      alert("Please complete the question and all options.");
      return;
    }

    const newQuestion = {
      question,
      options,
      correctAnswer,
    };

    setQuestions([...questions, newQuestion]);

    setQuestion("");

    setOptions({
      A: "",
      B: "",
      C: "",
      D: "",
    });

    setCorrectAnswer("");
  };

  const handlePublishQuiz = () => {
    if (!quizTitle || !category) {
      alert("Please enter quiz title and category.");
      return;
    }

    if (questions.length === 0) {
      alert("Please add at least one question.");
      return;
    }

    const existingQuizzes =
      JSON.parse(localStorage.getItem("brainboostQuizzes")) || [];

    const newQuiz = {
      id: Date.now(),
      title: quizTitle,
      category,
      description,
      questions,
      status: "published",
    };

    localStorage.setItem(
      "brainboostQuizzes",
      JSON.stringify([...existingQuizzes, newQuiz])
    );

    alert("Quiz published successfully! 🎉");

    navigate("/dashboard");
  };

  return (
    <div className="create-quiz-page">
      <div className="create-quiz-container">

        <div className="create-quiz-header">
          <span>🧠 BrainBoost</span>
          <h1>Create New Quiz</h1>
          <p>Create questions and publish your quiz.</p>
        </div>

        <div className="create-quiz-card">

          <div className="form-group">
            <label>Quiz Title</label>

            <input
              type="text"
              placeholder="Enter quiz title"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Programming">Programming</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
              <option value="Web Development">Web Development</option>
              <option value="Database">Database</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              placeholder="Enter quiz description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <hr />

          <h2>Add Question</h2>

          <div className="form-group">
            <label>Question</label>

            <textarea
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          <div className="options-container">

            {["A", "B", "C", "D"].map((option) => (
              <div className="form-group" key={option}>

                <label>Option {option}</label>

                <input
                  type="text"
                  placeholder={`Enter option ${option}`}
                  value={options[option]}
                  onChange={(e) =>
                    handleOptionChange(option, e.target.value)
                  }
                />

              </div>
            ))}

          </div>

          <div className="form-group">
            <label>Correct Answer</label>

            <select
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            >
              <option value="">Select Correct Answer</option>
              <option value="A">Option A</option>
              <option value="B">Option B</option>
              <option value="C">Option C</option>
              <option value="D">Option D</option>
            </select>
          </div>

          <button
            type="button"
            className="add-question-btn"
            onClick={handleAddQuestion}
          >
            + Add Question
          </button>

          {questions.length > 0 && (
            <div className="question-preview">

              <h3>
                Questions Added: {questions.length}
              </h3>

              {questions.map((item, index) => (
                <div
                  className="question-preview-card"
                  key={index}
                >
                  <strong>
                    {index + 1}. {item.question}
                  </strong>

                  <p>
                    Correct Answer: {item.correctAnswer}
                  </p>
                </div>
              ))}

            </div>
          )}

          <button
            type="button"
            className="publish-quiz-btn"
            onClick={handlePublishQuiz}
          >
            🚀 Publish Quiz
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/author/dashboard")}
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}