import React from 'react';
import { useNavigate } from 'react-router-dom';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import BarChartIcon from '@mui/icons-material/BarChart';

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Total Quizzes', value: '12', icon: LibraryBooksIcon, color: 'bg-blue-500' },
    { label: 'Completed', value: '8', icon: CheckCircleIcon, color: 'bg-green-500' },
    { label: 'In Progress', value: '3', icon: HourglassEmptyIcon, color: 'bg-yellow-500' },
    { label: 'Average Score', value: '85%', icon: BarChartIcon, color: 'bg-purple-500' },
  ];

  const recentQuizzes = [
    { id: 1, title: 'JavaScript Basics', questions: 20, completed: true, score: 90 },
    { id: 2, title: 'React Fundamentals', questions: 15, completed: true, score: 85 },
    { id: 3, title: 'CSS Advanced', questions: 25, completed: false, score: null },
  ];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your quiz overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-2">{stat.value}</p>
                </div>
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                  <IconComponent sx={{ fontSize: 28 }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Quizzes */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Quizzes</h2>
          <button
            onClick={() => navigate('/quizzes')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </button>
        </div>

        <div className="space-y-4">
          {recentQuizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => navigate(`/quiz/${quiz.id}`)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{quiz.title}</h3>
                  <p className="text-sm text-gray-600">{quiz.questions} questions</p>
                </div>
                <div className="text-right">
                  {quiz.completed ? (
                    <div>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                        Completed
                      </span>
                      <p className="text-sm text-gray-600 mt-1">Score: {quiz.score}%</p>
                    </div>
                  ) : (
                    <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      In Progress
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
