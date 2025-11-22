import { Outlet, Navigate } from 'react-router-dom';
import StudentSidebar from './Student/Sidebar';
import StudentNavbar from './Student/Navbar';
import TeacherSidebar from './Teacher/Sidebar';
import TeacherNavbar from './Teacher/Navbar';
import { useAuth } from '../context/AuthContext';

const DashboardLayout = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const isTeacher = user.role === 'teacher';
  const Sidebar = isTeacher ? TeacherSidebar : StudentSidebar;
  const Navbar = isTeacher ? TeacherNavbar : StudentNavbar;

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
