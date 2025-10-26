import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r">
      <div className="p-4 text-xl font-bold">Quick Actions</div>
      <div className="p-4">
        <Button variant="primary" size="md" className="w-full mb-4">
          Create Quizlet
        </Button>
        <Button variant="secondary" size="md" className="w-full">
          View All Quizzes
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;