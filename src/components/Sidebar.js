import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: HomeIcon, label: 'Dashboard' },
    { path: '/quizzes', icon: LibraryBooksIcon, label: 'My Quizzes' },
    { path: '/take-quiz', icon: EditIcon, label: 'Take Quiz' },
    { path: '/create-quiz', icon: AddCircleIcon, label: 'Create Quiz' },
    { path: '/results', icon: BarChartIcon, label: 'Results' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-400">Quizlets</h2>
        <p className="text-sm text-gray-400">Quiz Management</p>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  <IconComponent />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-8">
        <div className="border-t border-gray-700 pt-4">
          <Link
            to="/settings"
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              isActive('/settings')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            <SettingsIcon />
            <span>Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
