import Button from "../Button";
import AddIcon from "@mui/icons-material/Add";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r-2">
      <div className="h-16 flex items-center justify-center bg-purple-800 text-white text-3xl font-bold">
        Quizzlets
      </div>
      <div className="p-4">
        <div className="text-xl font-bold mb-2">Quick Actions</div>
        <Link to={"/create-course"}>
          <Button variant="primary" size="md" className="w-full mb-2">
            <AddIcon className="mr-2 h-4 w-4" />
            Create Course
          </Button>
        </Link>
      </div>

      <div className="p-4">
        <div className="text-lg font-bold mb-2">My Courses</div>
        <Link to={"/manage-courses"}>
          <Button variant="secondary" size="sm" className="w-full mb-2 text-left">
            <SchoolIcon className="mr-2 h-4 w-4" />
            All Courses
          </Button>
        </Link>
        <p className="text-sm text-gray-500 mt-2">
          Manage your courses
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
