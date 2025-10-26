import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <div></div>
            <Routes className="flex-1 overflow-y-auto">
              <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
