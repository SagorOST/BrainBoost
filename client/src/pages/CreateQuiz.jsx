import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CreateQuiz.css";

export default function CreateQuiz() {
  const navigate = useNavigate();

  // Quiz information
  const [quizTitle, setQuizTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // Current question
  const [question, setQuestion] = useState("");

  const [options, setOptions] = useState({
    A: "",
    B: "",
    C: "",
    D: "",
  });

  const [correctAnswer, setCorrectAnswer] = useState("");

  // All added questions
  const [questions, setQuestions] = useState([]);

  // Handle option input
  const handleOptionChange = (option, value) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [option]: value,
    }));
  };

  // Add question
  const handleAddQuestion = () => {
    const cleanQuestion = question.trim();

    const cleanOptions = {
      A: options.A.trim(),
      B: options.B.trim(),
      C: options.C.trim(),
      D: options.D.trim(),
    };

    // Validation
    if (
      !cleanQuestion ||
      !cleanOptions.A ||
      !cleanOptions.B ||
      !cleanOptions.C ||
      !cleanOptions.D ||
      !correctAnswer
    ) {
      alert("Please complete the question and all options.");
      return;
    }

    const newQuestion = {
      id: Date.now(),
      question: cleanQuestion,
      options: cleanOptions,
      correctAnswer: correctAnswer,
    };

    setQuestions((prevQuestions) => [
      ...prevQuestions,
      newQuestion,
    ]);

    // Clear current question form
    setQuestion("");

    setOptions({
      A: "",
      B: "",
      C: "",
      D: "",
    });

    setCorrectAnswer("");
  };

  // Publish quiz
  const handlePublishQuiz = () => {
    const cleanTitle = quizTitle.trim();
    const cleanDescription = description.trim();

    // Validate quiz information
    if (!cleanTitle) {
      alert("Please enter quiz title.");
      return;
    }

    if (!category) {
      alert("Please select a category.");
      return;
    }

    if (questions.length === 0) {
      alert("Please add at least one question.");
      return;
    }

    // Get existing quizzes safely
    let existingQuizzes = [];

    try {
      const savedQuizzes =
        JSON.parse(
          localStorage.getItem("brainboostQuizzes")
        ) || [];

      if (Array.isArray(savedQuizzes)) {
        existingQuizzes = savedQuizzes;
      }
    } catch (error) {
      console.error(
        "Error reading quizzes from localStorage:",
        error
      );

      existingQuizzes = [];
    }

    // Create new quiz
    const newQuiz = {
      id: Date.now(),
      title: cleanTitle,
      category: category,
      description: cleanDescription,
      questions: questions,
      status: "published",
      createdAt: new Date().toISOString(),
    };

    // Save quiz
    const updatedQuizzes = [
      ...existingQuizzes,
      newQuiz,
    ];

    localStorage.setItem(
      "brainboostQuizzes",
      JSON.stringify(updatedQuizzes)
    );

    alert("Quiz published successfully! 🎉");

    // Go back to Author Dashboard
    navigate("/author/dashboard");
  };

  return (
    <div className="create-quiz-page">
      <div className="create-quiz-container">

        {/* Header */}
        <div className="create-quiz-header">
          <span>🧠 BrainBoost</span>

          <h1>Create New Quiz</h1>

          <p>
            Create questions and publish your quiz.
          </p>
        </div>

        {/* Main Card */}
        <div className="create-quiz-card">

          {/* Quiz Title */}
          <div className="form-group">
            <label>Quiz Title</label>

            <input
              type="text"
              placeholder="Enter quiz title"
              value={quizTitle}
              onChange={(e) =>
                setQuizTitle(e.target.value)
              }
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>Category</label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option value="">
                Select Category
              </option>

              <option value="Programming">
                Programming
              </option>

              <option value="JavaScript">
                JavaScript
              </option>

              <option value="React">
                React
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Database">
                Database
              </option>
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>

            <textarea
              placeholder="Enter quiz description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />
          </div>

          <hr />

          {/* Question Section */}
          <h2>Add Question</h2>

          <div className="form-group">
            <label>Question</label>

            <textarea
              placeholder="Enter your question"
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
            />
          </div>

          {/* Options */}
          <div className="options-container">

            {["A", "B", "C", "D"].map(
              (option) => (
                <div
                  className="form-group"
                  key={option}
                >
                  <label>
                    Option {option}
                  </label>

                  <input
                    type="text"
                    placeholder={`Enter option ${option}`}
                    value={options[option]}
                    onChange={(e) =>
                      handleOptionChange(
                        option,
                        e.target.value
                      )
                    }
                  />
                </div>
              )
            )}

          </div>

          {/* Correct Answer */}
          <div className="form-group">
            <label>Correct Answer</label>

            <select
              value={correctAnswer}
              onChange={(e) =>
                setCorrectAnswer(e.target.value)
              }
            >
              <option value="">
                Select Correct Answer
              </option>

              <option value="A">
                Option A
              </option>

              <option value="B">
                Option B
              </option>

              <option value="C">
                Option C
              </option>

              <option value="D">
                Option D
              </option>
            </select>
          </div>

          {/* Add Question */}
          <button
            type="button"
            className="add-question-btn"
            onClick={handleAddQuestion}
          >
            + Add Question
          </button>

          {/* Question Preview */}
          {questions.length > 0 && (
            <div className="question-preview">

              <h3>
                Questions Added:{" "}
                {questions.length}
              </h3>

              {questions.map(
                (item, index) => (
                  <div
                    className="question-preview-card"
                    key={item.id}
                  >
                    <strong>
                      {index + 1}.{" "}
                      {item.question}
                    </strong>

                    <p>
                      A: {item.options.A}
                    </p>

                    <p>
                      B: {item.options.B}
                    </p>

                    <p>
                      C: {item.options.C}
                    </p>

                    <p>
                      D: {item.options.D}
                    </p>

                    <p>
                      <strong>
                        Correct Answer:{" "}
                        {item.correctAnswer}
                      </strong>
                    </p>
                  </div>
                )
              )}

            </div>
          )}

          {/* Publish */}
          <button
            type="button"
            className="publish-quiz-btn"
            onClick={handlePublishQuiz}
          >
            🚀 Publish Quiz
          </button>

          {/* Cancel */}
          <button
            type="button"
            className="cancel-btn"
            onClick={() =>
              navigate("/author/dashboard")
            }
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
}