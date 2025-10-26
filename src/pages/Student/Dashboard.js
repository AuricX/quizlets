import KpiCard from "../../components/KpiCard";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <div className="flex gap-2">
        <KpiCard title="Overall Average" value="98%"/>
        <KpiCard title="Quiz Completion Rate" value="50%" />
        <KpiCard title="Total Courses" value="4" />
      </div>
    </div>
  );
};

export default Dashboard;
