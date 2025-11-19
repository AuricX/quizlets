import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Student/Dashboard';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import CoursesPage from './pages/Student/CoursesPage';
import EnrollCourses from './pages/Student/EnrollCourses';
import CourseDetailsPage from './pages/Student/CourseDetailsPage';
import QuizPage from './pages/Student/QuizPage';
import { EnrollmentProvider } from './context/EnrollmentContext';
import './App.css';

function App() {
  return (
    <EnrollmentProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailsPage />} />
            <Route path="/enroll" element={<EnrollCourses />} />
            <Route path="/quizzes/:id" element={<QuizPage />} />
          </Route>
        </Routes>
      </Router>
    </EnrollmentProvider>
  );
}

export default App;
