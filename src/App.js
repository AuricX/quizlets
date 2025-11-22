import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from './pages/Student/Dashboard';
import TeacherDashboard from './pages/Teacher/Dashboard';
import Login from './pages/Login';
import DashboardLayout from './components/DashboardLayout';
import CoursesPage from './pages/Student/CoursesPage';
import EnrollCourses from './pages/Student/EnrollCourses';
import CourseDetailsPage from './pages/Student/CourseDetailsPage';
import QuizPage from './pages/Student/QuizPage';
import Create from './pages/Teacher/Create';
import Manage from './pages/Teacher/Manage';
import CourseDetails from './pages/Teacher/CourseDetails';
import { EnrollmentProvider } from './context/EnrollmentContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import './App.css';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user, isAuthenticated } = useAuth();
  
  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

const DashboardRouter = () => {
  const { user } = useAuth();
  return user?.role === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />;
};

function App() {
  return (
    <AuthProvider>
      <EnrollmentProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }>
              <Route path="/" element={<DashboardRouter />} />
              
              <Route path="/courses" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <CoursesPage />
                </ProtectedRoute>
              } />
              <Route path="/courses/:id" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <CourseDetailsPage />
                </ProtectedRoute>
              } />
              <Route path="/enroll" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <EnrollCourses />
                </ProtectedRoute>
              } />
              <Route path="/quizzes/:id" element={
                <ProtectedRoute allowedRoles={['student']}>
                  <QuizPage />
                </ProtectedRoute>
              } />
              
              <Route path="/manage-courses" element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <Manage />
                </ProtectedRoute>
              } />
              <Route path="/create-course" element={
                <ProtectedRoute allowedRoles={['teacher']}> 
                  <Create />
                </ProtectedRoute>
              } />
              <Route path="manage-courses/:id" element={
                <ProtectedRoute allowedRoles={['teacher']}>
                  <CourseDetails />
                </ProtectedRoute>
              } />
            </Route>
          </Routes>
        </Router>
      </EnrollmentProvider>
    </AuthProvider>
  );
}

export default App;
