import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TakeQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});

  // Mock quiz data
  const quiz = {
    title: 'JavaScript Basics',
    questions: [
      {
        id: 1,
        question: 'What is the correct way to declare a variable in JavaScript?',
        options: ['var x = 5;', 'variable x = 5;', 'int x = 5;', 'x := 5;'],
        correctAnswer: 0
      },
      {
        id: 2,
        question: 'Which method is used to add an element to the end of an array?',
        options: ['append()', 'push()', 'add()', 'insert()'],
        correctAnswer: 1
      },
      {
        id: 3,
        question: 'What does "DOM" stand for?',
        options: ['Document Object Model', 'Data Object Model', 'Document Oriented Model', 'Digital Object Model'],
        correctAnswer: 0
      }
    ]
  };

  const currentQ = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setAnswers({ ...answers, [currentQuestion]: selectedAnswer });
      setSelectedAnswer(null);
      
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Quiz completed
        navigate('/results');
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => navigate('/quizzes')}
          className="text-blue-600 hover:text-blue-700 font-medium mb-4"
        >
          ← Back to Quizzes
        </button>
        <h1 className="text-3xl font-bold text-gray-800">{quiz.title}</h1>
        <p className="text-gray-600">Answer all questions to complete the quiz</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">
            {currentQuestion + 1} / {quiz.questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <span className="text-sm font-medium text-gray-500">Question {currentQuestion + 1}</span>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">{currentQ.question}</h2>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(index)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === index
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedAnswer === index ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                  }`}
                >
                  {selectedAnswer === index && (
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="font-medium text-gray-800">{option}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              currentQuestion === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            ← Previous
          </button>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedAnswer === null
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {currentQuestion === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TakeQuiz;
