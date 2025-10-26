import Button from "../Button";
import AddIcon from "@mui/icons-material/Add";
import courses from "../../data/courses";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r-2">
      <div className="h-16 flex items-center justify-center bg-blue-800 text-white text-3xl font-bold">
        Quizzlets
      </div>
      <div className="p-4">
        <div className="text-xl font-bold mb-2">Quick Actions</div>
        <Button variant="primary" size="md" className="w-full">
          <AddIcon className="mr-2 h-4 w-4" />
          Enroll in Course
        </Button>
      </div>

      <div className="p-4">
        <div className="text-lg font-bold mb-2">My Courses</div>
        {courses.map((course) => (
          <Button
          key={course.id}
          variant="secondary"
          size="sm"
          className="w-full mb-2 text-left"
          >
            {course.name}
          </Button>
        ))}
        {courses.length === 0 ? "No courses available" : null}
      </div>
    </div>
  );
};

export default Sidebar;
