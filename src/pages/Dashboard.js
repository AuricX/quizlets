import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
    </div>
  );
};

export default Dashboard;
