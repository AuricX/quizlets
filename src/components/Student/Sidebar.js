import Button from "../Button";
import AddIcon from '@mui/icons-material/Add';
import courses from "../../data/courses";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r-2">
      <div className="p-4 text-xl font-bold">Quick Actions</div>
      <div className="p-4">
        <Button variant="primary" size="md" className="w-full">
          <AddIcon className="mr-2 h-4 w-4" />
          Enroll in Course
        </Button>
      </div>
      <div className="p-4 text-xl font-bold">Courses</div>
      <div className="px-4 mb-2 text-gray-600">
        {courses.length === 0 ? 'No courses available' : null}
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
      </div>
    </div>
  );
};

export default Sidebar;