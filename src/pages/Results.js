import React from 'react';
import { useNavigate } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Results = () => {
  const navigate = useNavigate();

  // Mock results data
  const results = [
    { 
      id: 1, 
      quizTitle: 'JavaScript Basics', 
      date: '2025-10-15', 
      score: 90, 
      totalQuestions: 20, 
      correctAnswers: 18,
      timeTaken: '12 min'
    },
    { 
      id: 2, 
      quizTitle: 'React Fundamentals', 
      date: '2025-10-14', 
      score: 85, 
      totalQuestions: 15, 
      correctAnswers: 13,
      timeTaken: '10 min'
    },
    { 
      id: 3, 
      quizTitle: 'HTML Fundamentals', 
      date: '2025-10-13', 
      score: 95, 
      totalQuestions: 10, 
      correctAnswers: 10,
      timeTaken: '5 min'
    },
    { 
      id: 4, 
      quizTitle: 'CSS Advanced', 
      date: '2025-10-12', 
      score: 75, 
      totalQuestions: 25, 
      correctAnswers: 19,
      timeTaken: '18 min'
    },
  ];

  const averageScore = Math.round(results.reduce((acc, r) => acc + r.score, 0) / results.length);

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadge = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-800';
    if (score >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Quiz Results</h1>
        <p className="text-gray-600">View your performance history</p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Average Score</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{averageScore}%</p>
            </div>
            <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">
              <BarChartIcon sx={{ fontSize: 28 }} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Quizzes Taken</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">{results.length}</p>
            </div>
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">
              <LibraryBooksIcon sx={{ fontSize: 28 }} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Perfect Scores</p>
              <p className="text-3xl font-bold text-gray-800 mt-2">
                {results.filter(r => r.score >= 95).length}
              </p>
            </div>
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center text-white">
              <EmojiEventsIcon sx={{ fontSize: 28 }} />
            </div>
          </div>
        </div>
      </div>

      {/* Results List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Recent Results</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quiz Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Questions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {results.map((result) => (
                <tr key={result.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{result.quizTitle}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{result.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getScoreBadge(result.score)}`}>
                      {result.score}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">
                      {result.correctAnswers}/{result.totalQuestions}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{result.timeTaken}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => navigate(`/result-detail/${result.id}`)}
                      className="text-blue-600 hover:text-blue-700 font-medium mr-4"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => navigate(`/quiz/${result.id}`)}
                      className="text-green-600 hover:text-green-700 font-medium"
                    >
                      Retake
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
