import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Quizzes from './pages/Quizzes';
import TakeQuiz from './pages/TakeQuiz';
import CreateQuiz from './pages/CreateQuiz';
import Results from './pages/Results';
import Settings from './pages/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/take-quiz" element={<TakeQuiz />} />
              <Route path="/quiz/:id" element={<TakeQuiz />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/edit-quiz/:id" element={<CreateQuiz />} />
              <Route path="/results" element={<Results />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
