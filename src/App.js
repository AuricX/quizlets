import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Student/Dashboard';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
