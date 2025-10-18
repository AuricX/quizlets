import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [quizTitle, setQuizTitle] = useState('');
  const [quizCategory, setQuizCategory] = useState('');
  const [difficulty, setDifficulty] = useState('Medium');
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], correctAnswer: 0 }
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: 0 }]);
  };

  const updateQuestion = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const updateOption = (qIndex, oIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[oIndex] = value;
    setQuestions(newQuestions);
  };

  const removeQuestion = (index) => {
    if (questions.length > 1) {
      const newQuestions = questions.filter((_, i) => i !== index);
      setQuestions(newQuestions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle quiz creation logic here
    console.log({ quizTitle, quizCategory, difficulty, questions });
    navigate('/quizzes');
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
        <h1 className="text-3xl font-bold text-gray-800">Create New Quiz</h1>
        <p className="text-gray-600">Fill in the details to create your quiz</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Quiz Details */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quiz Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Title</label>
              <input
                type="text"
                value={quizTitle}
                onChange={(e) => setQuizTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter quiz title"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <input
                  type="text"
                  value={quizCategory}
                  onChange={(e) => setQuizCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Programming, Science"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select
                  value={difficulty}
                  onChange={(e) => setDifficulty(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Easy">Easy</option>
                  <option value="Medium">Medium</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6 mb-6">
          {questions.map((q, qIndex) => (
            <div key={qIndex} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-800">Question {qIndex + 1}</h3>
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(qIndex)}
                    className="text-red-600 hover:text-red-700 font-medium"
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Question Text</label>
                <input
                  type="text"
                  value={q.question}
                  onChange={(e) => updateQuestion(qIndex, 'question', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your question"
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700">Answer Options</label>
                {q.options.map((option, oIndex) => (
                  <div key={oIndex} className="flex items-center space-x-3">
                    <input
                      type="radio"
                      name={`correct-${qIndex}`}
                      checked={q.correctAnswer === oIndex}
                      onChange={() => updateQuestion(qIndex, 'correctAnswer', oIndex)}
                      className="w-4 h-4 text-blue-600"
                    />
                    <input
                      type="text"
                      value={option}
                      onChange={(e) => updateOption(qIndex, oIndex, e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder={`Option ${oIndex + 1}`}
                      required
                    />
                  </div>
                ))}
                <p className="text-xs text-gray-500">Select the correct answer by clicking the radio button</p>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addQuestion}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors mb-6"
        >
          + Add Question
        </button>

        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => navigate('/quizzes')}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Create Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
