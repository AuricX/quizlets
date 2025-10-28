import KpiCard from "../../components/KpiCard";
import CoursePerformanceTable from "../../components/Student/CoursePerformanceTable";
import coursePerformanceData from "../../data/coursePerformanceData";

const Dashboard = () => {

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard</h1>
      <div className="flex gap-2">
        <KpiCard title="Overall Average" value="98%"/>
        <KpiCard title="Quiz Completion Rate" value="50%" />
        <KpiCard title="Total Courses" value="4" />
      </div>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Course Performance</h2>
      <CoursePerformanceTable courses={coursePerformanceData} />
    </div>
  );
};

export default Dashboard;
