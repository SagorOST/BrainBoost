import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Quiz.css";

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // ================= LOAD QUIZ =================

  const quiz = useMemo(() => {
    const savedQuizzes =
      JSON.parse(localStorage.getItem("brainboostQuizzes")) || [];

    const foundQuiz = savedQuizzes.find(
      (item) => String(item.id) === String(id)
    );

    // Only published quiz can be played
    if (foundQuiz && foundQuiz.status === "published") {
      return foundQuiz;
    }

    return null;
  }, [id]);

  // ================= QUIZ NOT FOUND =================

  if (!quiz) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">

          <div className="quiz-card result-card">

            <div className="quiz-header">
              <span>⚠️ Quiz Not Found</span>

              <h1>Quiz Unavailable</h1>

              <p>
                This quiz does not exist or has not been published yet.
              </p>
            </div>

            <div className="result-buttons">

              <button
                className="next-btn"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </button>

            </div>

          </div>

        </div>
      </div>
    );
  }

  // ================= QUESTIONS =================

  const questions = quiz.questions || [];

  // No questions
  if (questions.length === 0) {
    return (
      <div className="quiz-page">
        <div className="quiz-container">

          <div className="quiz-card result-card">

            <div className="quiz-header">
              <span>⚠️ No Questions</span>

              <h1>Quiz is Empty</h1>

              <p>
                This quiz does not contain any questions yet.
              </p>
            </div>

            <div className="result-buttons">

              <button
                className="next-btn"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </button>

            </div>

          </div>

        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  // ================= ANSWER =================

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  // ================= NEXT QUESTION =================

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer first!");
      return;
    }

    let updatedScore = score;

    // CreateQuiz uses correctAnswer
    if (selectedAnswer === question.correctAnswer) {
      updatedScore = score + 1;
    }

    // Last question
    if (currentQuestion === questions.length - 1) {
      setScore(updatedScore);
      setShowResult(true);
    } else {
      setScore(updatedScore);
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
    }
  };

  // ================= RESTART =================

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setShowResult(false);
  };

  // ================= RESULT =================

  if (showResult) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="quiz-page">

        <div className="quiz-container">

          <div className="quiz-card result-card">

            <div className="quiz-header">

              <span>🎉 Quiz Completed!</span>

              <h1>Your Result</h1>

              <p>{quiz.title}</p>

            </div>

            <div className="result-score">
              <span>{percentage}%</span>
            </div>

            <h2>
              You scored {score} out of {questions.length}
            </h2>

            <p>
              {percentage >= 80
                ? "Excellent! Keep up the great work! 🚀"
                : percentage >= 50
                ? "Good job! Keep practicing! 💪"
                : "Keep learning and try again! 📚"}
            </p>

            <div className="result-buttons">

              <button
                className="next-btn"
                onClick={restartQuiz}
              >
                Try Again
              </button>

              <button
                className="next-btn"
                onClick={() => navigate("/dashboard")}
              >
                Back to Dashboard
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }

  // ================= OPTIONS =================

  /*
    CreateQuiz থেকে options যদি হয়:

    {
      A: "Option A",
      B: "Option B",
      C: "Option C",
      D: "Option D"
    }

    তাহলে Object.entries() ব্যবহার করতে হবে।
  */

  const options = question.options || {};

  const optionList = ["A", "B", "C", "D"]
    .filter((key) => options[key] !== undefined)
    .map((key) => ({
      key,
      text: options[key],
    }));

  // ================= QUIZ PAGE =================

  return (
    <div className="quiz-page">

      <div className="quiz-container">

        {/* ================= HEADER ================= */}

        <div className="quiz-header">

          <span>🧠 BrainBoost Quiz</span>

          <h1>{quiz.title}</h1>

          <p>
            {quiz.description ||
              "Test your knowledge and improve your skills."}
          </p>

        </div>

        {/* ================= QUIZ CARD ================= */}

        <div className="quiz-card">

          <div className="question-number">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <h2>
            {question.question}
          </h2>

          {/* ================= OPTIONS ================= */}

          <div className="options">

            {optionList.map((option) => (

              <button
                key={option.key}
                className={
                  selectedAnswer === option.key
                    ? "selected-option"
                    : ""
                }
                onClick={() => handleAnswer(option.key)}
              >

                {option.key}. {option.text}

              </button>

            ))}

          </div>

          {/* ================= NEXT BUTTON ================= */}

          <button
            className="next-btn"
            onClick={handleNext}
          >

            {currentQuestion === questions.length - 1
              ? "Submit Quiz"
              : "Next Question →"}

          </button>

        </div>

      </div>

    </div>
  );
}