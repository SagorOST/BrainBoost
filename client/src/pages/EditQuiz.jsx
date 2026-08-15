import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/CreateQuiz.css";

export default function EditQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  // ================= LOAD QUIZ =================

  const [quiz, setQuiz] = useState(() => {
    try {
      const savedQuizzes =
        JSON.parse(
          localStorage.getItem("brainboostQuizzes")
        ) || [];

      return savedQuizzes.find(
        (item) =>
          String(item.id) === String(id)
      ) || null;
    } catch (error) {
      console.error(
        "Error loading quiz:",
        error
      );

      return null;
    }
  });

  // ================= QUIZ NOT FOUND =================

  if (!quiz) {
    return (
      <div className="create-quiz-page">
        <div className="create-quiz-container">

          <div className="create-quiz-card">

            <h1>Quiz Not Found</h1>

            <p>
              The quiz you are trying to edit
              does not exist.
            </p>

            <button
              className="cancel-btn"
              onClick={() =>
                navigate("/author/dashboard")
              }
            >
              Back to Author Dashboard
            </button>

          </div>

        </div>
      </div>
    );
  }

  return (
    <EditQuizForm
      quiz={quiz}
      setQuiz={setQuiz}
      navigate={navigate}
    />
  );
}


// ==================================================
// EDIT QUIZ FORM
// ==================================================

function EditQuizForm({
  quiz,
  setQuiz,
  navigate,
}) {

  const [quizTitle, setQuizTitle] =
    useState(quiz.title || "");

  const [category, setCategory] =
    useState(quiz.category || "");

  const [description, setDescription] =
    useState(quiz.description || "");

  const [questions, setQuestions] =
    useState(quiz.questions || []);

  // ================= NEW QUESTION =================

  const [question, setQuestion] =
    useState("");

  const [options, setOptions] =
    useState({
      A: "",
      B: "",
      C: "",
      D: "",
    });

  const [correctAnswer, setCorrectAnswer] =
    useState("");

  // ================= OPTION CHANGE =================

  const handleOptionChange = (
    option,
    value
  ) => {
    setOptions((previous) => ({
      ...previous,
      [option]: value,
    }));
  };

  // ================= ADD QUESTION =================

  const handleAddQuestion = () => {

    const cleanQuestion =
      question.trim();

    const cleanOptions = {
      A: options.A.trim(),
      B: options.B.trim(),
      C: options.C.trim(),
      D: options.D.trim(),
    };

    if (
      !cleanQuestion ||
      !cleanOptions.A ||
      !cleanOptions.B ||
      !cleanOptions.C ||
      !cleanOptions.D ||
      !correctAnswer
    ) {
      alert(
        "Please complete the question and all options."
      );

      return;
    }

    const newQuestion = {
      id: Date.now(),
      question: cleanQuestion,
      options: cleanOptions,
      correctAnswer,
    };

    setQuestions((previous) => [
      ...previous,
      newQuestion,
    ]);

    setQuestion("");

    setOptions({
      A: "",
      B: "",
      C: "",
      D: "",
    });

    setCorrectAnswer("");
  };

  // ================= DELETE QUESTION =================

  const handleDeleteQuestion = (
    questionId
  ) => {

    const confirmDelete =
      window.confirm(
        "Delete this question?"
      );

    if (!confirmDelete) {
      return;
    }

    setQuestions((previous) =>
      previous.filter(
        (item) =>
          String(item.id) !==
          String(questionId)
      )
    );
  };

  // ================= UPDATE QUIZ =================

  const handleUpdateQuiz = () => {

    const cleanTitle =
      quizTitle.trim();

    const cleanDescription =
      description.trim();

    if (!cleanTitle) {
      alert(
        "Please enter quiz title."
      );

      return;
    }

    if (!category) {
      alert(
        "Please select a category."
      );

      return;
    }

    if (questions.length === 0) {
      alert(
        "Quiz must have at least one question."
      );

      return;
    }

    let savedQuizzes = [];

    try {
      savedQuizzes =
        JSON.parse(
          localStorage.getItem(
            "brainboostQuizzes"
          )
        ) || [];

      if (!Array.isArray(savedQuizzes)) {
        savedQuizzes = [];
      }
    } catch (error) {
      console.error(
        "Error loading quizzes:",
        error
      );

      savedQuizzes = [];
    }

    const updatedQuiz = {
      ...quiz,
      title: cleanTitle,
      category,
      description: cleanDescription,
      questions,
      updatedAt:
        new Date().toISOString(),
    };

    const updatedQuizzes =
      savedQuizzes.map((item) =>
        String(item.id) === String(id)
          ? updatedQuiz
          : item
      );

    localStorage.setItem(
      "brainboostQuizzes",
      JSON.stringify(
        updatedQuizzes
      )
    );

    setQuiz(updatedQuiz);

    alert(
      "Quiz updated successfully! 🎉"
    );

    navigate(
      "/author/dashboard"
    );
  };

  // ================= RENDER =================

  return (
    <div className="create-quiz-page">

      <div className="create-quiz-container">

        {/* ================= HEADER ================= */}

        <div className="create-quiz-header">

          <span>
            🧠 BrainBoost
          </span>

          <h1>
            Edit Quiz
          </h1>

          <p>
            Update your quiz information
            and questions.
          </p>

        </div>

        {/* ================= FORM ================= */}

        <div className="create-quiz-card">

          {/* Quiz Title */}

          <div className="form-group">

            <label>
              Quiz Title
            </label>

            <input
              type="text"
              value={quizTitle}
              onChange={(e) =>
                setQuizTitle(
                  e.target.value
                )
              }
            />

          </div>

          {/* Category */}

          <div className="form-group">

            <label>
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
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

            <label>
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
            />

          </div>

          <hr />

          {/* ================= EXISTING QUESTIONS ================= */}

          <h2>
            Existing Questions
          </h2>

          {questions.map(
            (item, index) => (

              <div
                className="question-preview-card"
                key={item.id || index}
              >

                <strong>
                  {index + 1}.{" "}
                  {item.question}
                </strong>

                <p>
                  A: {item.options?.A}
                </p>

                <p>
                  B: {item.options?.B}
                </p>

                <p>
                  C: {item.options?.C}
                </p>

                <p>
                  D: {item.options?.D}
                </p>

                <p>
                  Correct Answer:{" "}
                  <strong>
                    {item.correctAnswer}
                  </strong>
                </p>

                <button
                  type="button"
                  className="delete-quiz-btn"
                  onClick={() =>
                    handleDeleteQuestion(
                      item.id
                    )
                  }
                >
                  🗑 Delete Question
                </button>

              </div>

            )
          )}

          {/* ================= ADD NEW QUESTION ================= */}

          <hr />

          <h2>
            Add New Question
          </h2>

          <div className="form-group">

            <label>
              Question
            </label>

            <textarea
              placeholder="Enter your question"
              value={question}
              onChange={(e) =>
                setQuestion(
                  e.target.value
                )
              }
            />

          </div>

          {/* Options */}

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

          {/* Correct Answer */}

          <div className="form-group">

            <label>
              Correct Answer
            </label>

            <select
              value={correctAnswer}
              onChange={(e) =>
                setCorrectAnswer(
                  e.target.value
                )
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

          <button
            type="button"
            className="add-question-btn"
            onClick={handleAddQuestion}
          >
            + Add Question
          </button>

          {/* ================= ACTIONS ================= */}

          <button
            type="button"
            className="publish-quiz-btn"
            onClick={handleUpdateQuiz}
          >
            💾 Update Quiz
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={() =>
              navigate(
                "/author/dashboard"
              )
            }
          >
            Cancel
          </button>

        </div>

      </div>

    </div>
  );
}