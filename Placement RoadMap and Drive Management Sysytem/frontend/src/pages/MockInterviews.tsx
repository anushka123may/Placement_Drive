import React, { useState } from 'react';

const MockInterviews = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const questions = [
    {
      id: 1,
      question: 'Tell me about yourself.',
      answer: 'I am a highly motivated and detail-oriented individual with a strong passion for software development. I have experience in various programming languages and frameworks, and I am always eager to learn new technologies.',
    },
    {
      id: 2,
      question: 'Why are you interested in this role?',
      answer: 'I am interested in this role because it aligns with my career goals and allows me to utilize my skills and experience in a challenging and innovative environment. I am also excited about the opportunity to contribute to your company\'s mission.',
    },
    {
      id: 3,
      question: 'What are your strengths?',
      answer: 'My strengths include my problem-solving abilities, my attention to detail, and my ability to work effectively in a team. I am also a quick learner and highly adaptable to new situations.',
    },
    {
      id: 4,
      question: 'What are your weaknesses?',
      answer: 'One of my weaknesses is that I can sometimes be too critical of my own work. However, I am actively working on this by focusing on celebrating small wins and seeking feedback from others.',
    },
    {
      id: 5,
      question: 'Where do you see yourself in 5 years?',
      answer: 'In 5 years, I see myself as a senior software engineer, contributing to the development of innovative products and leading a team of talented developers. I am also committed to continuous learning and growth in my field.',
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer('');
      setShowAnswer(false);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserAnswer(e.target.value);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Mock Interview</h1>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Question {currentQuestion.id}</h2>
          <p className="text-gray-700">{currentQuestion.question}</p>
        </div>

        <div className="mb-6">
          <label htmlFor="user-answer" className="block text-sm font-medium text-gray-700">
            Your Answer
          </label>
          <textarea
            id="user-answer"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={userAnswer}
            onChange={handleAnswerChange}
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <button
            onClick={handleShowAnswer}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Show Answer
          </button>
          {currentQuestionIndex < questions.length - 1 && (
            <button
              onClick={handleNextQuestion}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Next Question
            </button>
          )}
        </div>

        {showAnswer && (
          <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Sample Answer</h3>
            <p className="text-gray-700">{currentQuestion.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockInterviews;
