import { useState, useEffect } from "react";
import CoursePerformanceTable from "../../components/Student/CoursePerformanceTable";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";

const Dashboard = () => {
  const { user } = useAuth();
  const [performanceData, setPerformanceData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPerformanceData = async () => {
      try {
        const userStr = localStorage.getItem('user');
        const userData = userStr ? JSON.parse(userStr) : null;
        
        if (!userData || !userData.user_id) {
          setLoading(false);
          return;
        }

        const response = await api.post('/quizzes/student-performance', {
          student_id: userData.user_id
        });
        
        setPerformanceData(response.data);
      } catch (error) {
        console.error('Error fetching performance data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPerformanceData();
  }, []);

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading dashboard...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome, {user?.name}!</h1>
      <p className="text-gray-600 mb-8">Here's an overview of your course performance.</p>
      
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Course Performance</h2>
      {performanceData.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <p className="text-yellow-800 text-lg">No course data available. Enroll in courses to see your performance.</p>
        </div>
      ) : (
        <CoursePerformanceTable courses={performanceData} />
      )}
    </div>
  );
};

export default Dashboard;
