import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Student/Dashboard';
import EnrollCourses from './pages/Student/EnrollCourses';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import CoursesPage from './pages/Student/CoursesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Cou" element={<Cou />} />
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
