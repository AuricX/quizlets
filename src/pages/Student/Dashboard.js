import CoursePerformanceTable from "../../components/Student/CoursePerformanceTable";
import coursePerformanceData from "../../data/coursePerformanceData";
import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome, {user?.name}!</h1>
      <p className="text-gray-600 mb-8">Here's an overview of your course performance.</p>
      
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Course Performance</h2>
      <CoursePerformanceTable courses={coursePerformanceData} />
    </div>
  );
};

export default Dashboard;
