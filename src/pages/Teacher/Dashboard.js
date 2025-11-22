import { useAuth } from "../../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome, {user?.name}!</h1>
      <p className="text-gray-600 mb-8">Manage your courses, quizzes, and students from here.</p>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recent Activity</h2>
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <p className="font-semibold">New Quiz Submission</p>
            <p className="text-sm text-gray-600">Alice Johnson submitted "React Basics Quiz"</p>
            <p className="text-xs text-gray-500">2 hours ago</p>
          </div>
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="font-semibold">Course Enrollment</p>
            <p className="text-sm text-gray-600">5 new students enrolled in "Advanced JavaScript"</p>
            <p className="text-xs text-gray-500">5 hours ago</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4 py-2">
            <p className="font-semibold">Quiz Grading Needed</p>
            <p className="text-sm text-gray-600">12 submissions pending review</p>
            <p className="text-xs text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
