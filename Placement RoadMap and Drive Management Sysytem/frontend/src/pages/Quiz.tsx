import React, { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle, XCircle, RotateCcw } from "lucide-react";

type Question = {
  id: number;
  category: "technical" | "non-technical";
  topic: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

const quizQuestions: Question[] = [
  // =========================
  // TECHNICAL - C++
  // =========================

  {
    id: 1,
    category: "technical",
    topic: "C++",
    question: "Which of the following is used to define a class in C++?",
    options: ["class", "structs", "object", "define"],
    correctAnswer: "class",
  },
  {
    id: 2,
    category: "technical",
    topic: "C++",
    question: "Which symbol is used to access members of a class object?",
    options: [".", "::", "->", "#"],
    correctAnswer: ".",
  },
  {
    id: 3,
    category: "technical",
    topic: "C++",
    question: "Which feature allows the same function name to have different parameters?",
    options: [
      "Inheritance",
      "Function Overloading",
      "Encapsulation",
      "Abstraction",
    ],
    correctAnswer: "Function Overloading",
  },

  // =========================
  // TECHNICAL - PYTHON
  // =========================

  {
    id: 4,
    category: "technical",
    topic: "Python",
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    correctAnswer: "def",
  },
  {
    id: 5,
    category: "technical",
    topic: "Python",
    question: "Which data type is immutable in Python?",
    options: ["List", "Dictionary", "Set", "Tuple"],
    correctAnswer: "Tuple",
  },
  {
    id: 6,
    category: "technical",
    topic: "Python",
    question: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/*", "--"],
    correctAnswer: "#",
  },

  // =========================
  // TECHNICAL - JAVA
  // =========================

  {
    id: 7,
    category: "technical",
    topic: "Java",
    question: "Which keyword is used to create an object in Java?",
    options: ["class", "object", "new", "create"],
    correctAnswer: "new",
  },
  {
    id: 8,
    category: "technical",
    topic: "Java",
    question: "Which method is the entry point of a Java application?",
    options: [
      "start()",
      "run()",
      "main()",
      "execute()",
    ],
    correctAnswer: "main()",
  },
  {
    id: 9,
    category: "technical",
    topic: "Java",
    question: "Which concept allows a class to inherit properties from another class?",
    options: [
      "Encapsulation",
      "Inheritance",
      "Polymorphism",
      "Abstraction",
    ],
    correctAnswer: "Inheritance",
  },

  // =========================
  // TECHNICAL - DATA STRUCTURES
  // =========================

  {
    id: 10,
    category: "technical",
    topic: "Data Structures",
    question: "Which data structure follows LIFO?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack",
  },
  {
    id: 11,
    category: "technical",
    topic: "Data Structures",
    question: "Which data structure follows FIFO?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correctAnswer: "Queue",
  },
  {
    id: 12,
    category: "technical",
    topic: "Data Structures",
    question: "Which data structure consists of nodes connected by links?",
    options: ["Array", "Linked List", "Stack", "Hash"],
    correctAnswer: "Linked List",
  },

  // =========================
  // TECHNICAL - ALGORITHMS
  // =========================

  {
    id: 13,
    category: "technical",
    topic: "Algorithms",
    question: "What is the average time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
    correctAnswer: "O(log n)",
  },
  {
    id: 14,
    category: "technical",
    topic: "Algorithms",
    question: "Which sorting algorithm repeatedly swaps adjacent elements?",
    options: [
      "Merge Sort",
      "Quick Sort",
      "Bubble Sort",
      "Heap Sort",
    ],
    correctAnswer: "Bubble Sort",
  },
  {
    id: 15,
    category: "technical",
    topic: "Algorithms",
    question: "Which algorithm uses divide and conquer?",
    options: [
      "Linear Search",
      "Merge Sort",
      "Bubble Sort",
      "Selection Sort",
    ],
    correctAnswer: "Merge Sort",
  },

  // =========================
  // TECHNICAL - FRONTEND
  // =========================

  {
    id: 16,
    category: "technical",
    topic: "Frontend",
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 17,
    category: "technical",
    topic: "Frontend",
    question: "Which language is mainly used to style web pages?",
    options: ["HTML", "CSS", "Java", "SQL"],
    correctAnswer: "CSS",
  },
  {
    id: 18,
    category: "technical",
    topic: "Frontend",
    question: "Which library is used to build user interfaces in React applications?",
    options: ["React", "MongoDB", "Express", "Node"],
    correctAnswer: "React",
  },

  // =========================
  // TECHNICAL - BACKEND
  // =========================

  {
    id: 19,
    category: "technical",
    topic: "Backend",
    question: "Which runtime environment allows JavaScript to run on the server?",
    options: ["Node.js", "React", "HTML", "CSS"],
    correctAnswer: "Node.js",
  },
  {
    id: 20,
    category: "technical",
    topic: "Backend",
    question: "Which HTTP method is commonly used to create a new resource?",
    options: ["GET", "POST", "DELETE", "HEAD"],
    correctAnswer: "POST",
  },
  {
    id: 21,
    category: "technical",
    topic: "Backend",
    question: "Which database is commonly used with the MERN stack?",
    options: ["MongoDB", "Oracle", "SQLite", "Redis"],
    correctAnswer: "MongoDB",
  },

  // =========================
  // NON-TECHNICAL - APTITUDE
  // =========================

  {
    id: 22,
    category: "non-technical",
    topic: "Quantitative Aptitude",
    question: "What is 20% of 250?",
    options: ["25", "40", "50", "60"],
    correctAnswer: "50",
  },
  {
    id: 23,
    category: "non-technical",
    topic: "Quantitative Aptitude",
    question: "If a product costs ₹500 and is sold for ₹600, what is the profit?",
    options: ["₹50", "₹75", "₹100", "₹150"],
    correctAnswer: "₹100",
  },
  {
    id: 24,
    category: "non-technical",
    topic: "Quantitative Aptitude",
    question: "What is the average of 10, 20 and 30?",
    options: ["15", "20", "25", "30"],
    correctAnswer: "20",
  },

  // =========================
  // NON-TECHNICAL - LOGICAL
  // =========================

  {
    id: 25,
    category: "non-technical",
    topic: "Logical Reasoning",
    question: "Find the next number: 2, 4, 8, 16, ?",
    options: ["20", "24", "32", "36"],
    correctAnswer: "32",
  },
  {
    id: 26,
    category: "non-technical",
    topic: "Logical Reasoning",
    question: "If CAT is coded as DBU, how is DOG coded?",
    options: ["EPH", "EOG", "FPH", "DPG"],
    correctAnswer: "EPH",
  },
  {
    id: 27,
    category: "non-technical",
    topic: "Logical Reasoning",
    question: "Which one is different from the others?",
    options: ["Apple", "Mango", "Carrot", "Banana"],
    correctAnswer: "Carrot",
  },

  // =========================
  // NON-TECHNICAL - VERBAL
  // =========================

  {
    id: 28,
    category: "non-technical",
    topic: "Verbal Communication",
    question: "Choose the synonym of 'Rapid'.",
    options: ["Slow", "Fast", "Weak", "Late"],
    correctAnswer: "Fast",
  },
  {
    id: 29,
    category: "non-technical",
    topic: "Verbal Communication",
    question: "Choose the antonym of 'Ancient'.",
    options: ["Old", "Modern", "Historic", "Traditional"],
    correctAnswer: "Modern",
  },
  {
    id: 30,
    category: "non-technical",
    topic: "Verbal Communication",
    question: "Choose the grammatically correct sentence.",
    options: [
      "She go to school.",
      "She going to school.",
      "She goes to school.",
      "She gone to school.",
    ],
    correctAnswer: "She goes to school.",
  },

  // =========================
  // NON-TECHNICAL - NON VERBAL
  // =========================

  {
    id: 31,
    category: "non-technical",
    topic: "Non-Verbal Communication",
    question: "Which is an example of non-verbal communication?",
    options: [
      "Email",
      "Speaking",
      "Facial expression",
      "Writing",
    ],
    correctAnswer: "Facial expression",
  },
  {
    id: 32,
    category: "non-technical",
    topic: "Non-Verbal Communication",
    question: "Eye contact during a conversation generally indicates:",
    options: [
      "Attention",
      "Sleep",
      "Confusion only",
      "Disinterest",
    ],
    correctAnswer: "Attention",
  },
  {
    id: 33,
    category: "non-technical",
    topic: "Non-Verbal Communication",
    question: "A smile is generally considered a form of:",
    options: [
      "Written communication",
      "Non-verbal communication",
      "Database communication",
      "Programming",
    ],
    correctAnswer: "Non-verbal communication",
  },
];

const Quiz: React.FC = () => {
  const { skillType } = useParams<{ skillType?: string }>();
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<
    Record<number, string>
  >({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);

  /*
   * Determine quiz type
   */
  const quizType = useMemo(() => {
    if (!skillType) {
      return "all";
    }

    return skillType.toLowerCase();
  }, [skillType]);

  /*
   * Filter questions
   */
  const questions = useMemo(() => {
    if (quizType === "technical") {
      return quizQuestions.filter(
        (question) => question.category === "technical"
      );
    }

    if (
      quizType === "non-technical" ||
      quizType === "nontechnical"
    ) {
      return quizQuestions.filter(
        (question) => question.category === "non-technical"
      );
    }

    return quizQuestions;
  }, [quizType]);

  const currentQuestion = questions[currentQuestionIndex];

  /*
   * Quiz title
   */
  const quizTitle = useMemo(() => {
    if (quizType === "technical") {
      return "Technical Quiz";
    }

    if (
      quizType === "non-technical" ||
      quizType === "nontechnical"
    ) {
      return "Non-Technical Quiz";
    }

    return "All Quiz";
  }, [quizType]);

  /*
   * Select answer
   */
  const handleAnswerChange = (answer: string) => {
    if (!currentQuestion) return;

    setUserAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: answer,
    }));
  };

  /*
   * Next question
   */
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(
        (previousIndex) => previousIndex + 1
      );
    }
  };

  /*
   * Previous question
   */
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(
        (previousIndex) => previousIndex - 1
      );
    }
  };

  /*
   * Submit quiz
   */
  const handleSubmitQuiz = () => {
    let correctAnswers = 0;

    questions.forEach((question) => {
      if (
        userAnswers[question.id] ===
        question.correctAnswer
      ) {
        correctAnswers++;
      }
    });

    const finalScore =
      questions.length > 0
        ? (correctAnswers / questions.length) * 100
        : 0;

    setScore(finalScore);
    setQuizCompleted(true);

    /*
     * Save score locally
     */
    const previousProfile = JSON.parse(
      localStorage.getItem("profileData") || "{}"
    );

    const updatedProfile = {
      ...previousProfile,
      progress: {
        ...(previousProfile.progress || {}),
        quizScore: finalScore,
      },
    };

    localStorage.setItem(
      "profileData",
      JSON.stringify(updatedProfile)
    );
  };

  /*
   * Restart quiz
   */
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
    setScore(0);
  };

  /*
   * Get number of correct answers
   */
  const correctAnswersCount = questions.filter(
    (question) =>
      userAnswers[question.id] === question.correctAnswer
  ).length;

  /*
   * Get number of answered questions
   */
  const answeredCount = Object.keys(userAnswers).length;

  /*
   * Empty state
   */
  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              No Quiz Found
            </h1>

            <p className="text-gray-600 mb-6">
              No questions are available for this quiz.
            </p>

            <button
              onClick={() => navigate("/")}
              className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  /*
   * Completed screen
   */
  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">

          <div className="mb-8">
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

            <div className="flex justify-center mb-5">
              {score >= 70 ? (
                <CheckCircle className="w-20 h-20 text-green-500" />
              ) : (
                <XCircle className="w-20 h-20 text-orange-500" />
              )}
            </div>

            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Quiz Completed!
            </h1>

            <p className="text-gray-600 mb-8">
              {quizTitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

              <div className="bg-indigo-50 rounded-xl p-5">
                <p className="text-sm text-gray-600">
                  Score
                </p>
                <p className="text-3xl font-bold text-indigo-600">
                  {score.toFixed(0)}%
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-5">
                <p className="text-sm text-gray-600">
                  Correct
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {correctAnswersCount}
                </p>
              </div>

              <div className="bg-gray-100 rounded-xl p-5">
                <p className="text-sm text-gray-600">
                  Total
                </p>
                <p className="text-3xl font-bold text-gray-800">
                  {questions.length}
                </p>
              </div>

            </div>

            <div className="mb-8">
              {score >= 80 && (
                <p className="text-green-600 font-semibold">
                  Excellent! Great performance.
                </p>
              )}

              {score >= 60 && score < 80 && (
                <p className="text-indigo-600 font-semibold">
                  Good job! Keep practicing.
                </p>
              )}

              {score < 60 && (
                <p className="text-orange-600 font-semibold">
                  Keep practicing. You can improve!
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">

              <button
                onClick={handleRestartQuiz}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retry Quiz
              </button>

              <button
                onClick={() => navigate("/quiz")}
                className="px-5 py-3 rounded-lg bg-gray-100 text-gray-800 hover:bg-gray-200"
              >
                All Quiz
              </button>

              <button
                onClick={() => navigate("/profile")}
                className="px-5 py-3 rounded-lg border border-gray-300 text-gray-800 hover:bg-gray-50"
              >
                View Profile
              </button>

            </div>

          </div>
        </div>
      </div>
    );
  }

  /*
   * Main quiz screen
   */
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-6">

          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mb-5"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {quizTitle}
              </h1>

              <p className="text-gray-600 mt-1">
                Test your knowledge and improve your placement preparation.
              </p>
            </div>

            <div className="bg-white px-4 py-3 rounded-xl shadow-sm">
              <p className="text-sm text-gray-500">
                Answered
              </p>
              <p className="font-bold text-indigo-600">
                {answeredCount} / {questions.length}
              </p>
            </div>

          </div>
        </div>

        {/* Quiz category buttons */}
        <div className="flex flex-wrap gap-2 mb-6">

          <button
            onClick={() => navigate("/quiz")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              quizType === "all"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            All Quiz
          </button>

          <button
            onClick={() => navigate("/quiz/technical")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              quizType === "technical"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Technical Quiz
          </button>

          <button
            onClick={() => navigate("/quiz/non-technical")}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              quizType === "non-technical"
                ? "bg-indigo-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Non-Technical Quiz
          </button>

        </div>

        {/* Progress */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-5">

          <div className="flex justify-between text-sm mb-2">
            <span className="text-gray-600">
              Question {currentQuestionIndex + 1} of{" "}
              {questions.length}
            </span>

            <span className="font-medium text-indigo-600">
              {Math.round(
                ((currentQuestionIndex + 1) /
                  questions.length) *
                  100
              )}
              %
            </span>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-indigo-600 transition-all duration-300"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) /
                    questions.length) *
                  100
                }%`,
              }}
            />
          </div>

        </div>

        {/* Question card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">

          {/* Topic */}
          <div className="flex items-center justify-between mb-5">

            <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
              {currentQuestion.topic}
            </span>

            <span className="text-sm text-gray-500">
              Q{currentQuestionIndex + 1}
            </span>

          </div>

          {/* Question */}
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-7 leading-relaxed">
            {currentQuestion.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">

            {currentQuestion.options.map(
              (option, index) => {

                const isSelected =
                  userAnswers[currentQuestion.id] ===
                  option;

                return (
                  <label
                    key={index}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition ${
                      isSelected
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 hover:border-indigo-300 hover:bg-gray-50"
                    }`}
                  >

                    <input
                      type="radio"
                      name={`question-${currentQuestion.id}`}
                      value={option}
                      checked={isSelected}
                      onChange={() =>
                        handleAnswerChange(option)
                      }
                      className="w-5 h-5 text-indigo-600"
                    />

                    <span className="flex-1 text-gray-800">
                      <span className="font-semibold mr-2">
                        {String.fromCharCode(65 + index)}.
                      </span>

                      {option}
                    </span>

                  </label>
                );
              }
            )}

          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">

            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="px-5 py-2.5 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            {currentQuestionIndex ===
            questions.length - 1 ? (
              <button
                onClick={handleSubmitQuiz}
                className="px-6 py-2.5 rounded-lg font-medium bg-green-600 text-white hover:bg-green-700"
              >
                Submit Quiz
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2.5 rounded-lg font-medium bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Next
              </button>
            )}

          </div>

        </div>

        {/* Topic information */}
        <div className="mt-5 text-center text-sm text-gray-500">
          Select an option and continue to the next question.
        </div>

      </div>
    </div>
  );
};

export default Quiz;
