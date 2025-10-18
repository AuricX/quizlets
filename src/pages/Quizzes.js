import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const Quizzes = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');

  const quizzes = [
    { id: 1, title: 'JavaScript Basics', category: 'Programming', questions: 20, difficulty: 'Easy', status: 'completed' },
    { id: 2, title: 'React Fundamentals', category: 'Programming', questions: 15, difficulty: 'Medium', status: 'completed' },
    { id: 3, title: 'CSS Advanced', category: 'Design', questions: 25, difficulty: 'Hard', status: 'in-progress' },
    { id: 4, title: 'Node.js Backend', category: 'Programming', questions: 30, difficulty: 'Hard', status: 'not-started' },
    { id: 5, title: 'HTML Fundamentals', category: 'Programming', questions: 10, difficulty: 'Easy', status: 'completed' },
  ];

  const filteredQuizzes = filter === 'all' ? quizzes : quizzes.filter(q => q.status === filter);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-yellow-600 bg-yellow-100';
      case 'not-started': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">My Quizzes</h1>
        <p className="text-gray-600">Manage and review all your quizzes.</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Quizzes
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'in-progress' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilter('not-started')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'not-started' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Not Started
          </button>
        </div>
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <div key={quiz.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{quiz.title}</h3>
                <p className="text-sm text-gray-600">{quiz.category}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(quiz.difficulty)}`}>
                {quiz.difficulty}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-gray-600">{quiz.questions} questions</p>
              <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(quiz.status)}`}>
                {quiz.status.replace('-', ' ').toUpperCase()}
              </span>
            </div>

            <div className="flex space-x-2">
              <button
                onClick={() => navigate(`/quiz/${quiz.id}`)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors"
              >
                {quiz.status === 'not-started' ? 'Start' : 'Continue'}
              </button>
              <button
                onClick={() => navigate(`/edit-quiz/${quiz.id}`)}
                className="px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium transition-colors"
              >
                <EditIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
