import Button from "../Button";
import AddIcon from "@mui/icons-material/Add";
import courseQuizzes from "../../data/courseQuizzes";
import { useEnrollment } from "../../context/EnrollmentContext";
import { Link } from "react-router";

const Sidebar = () => {
  const { enrolledCourses } = useEnrollment();
  const myEnrolledCourses = courseQuizzes.filter((course) =>
    enrolledCourses.includes(course.courseId)
  );

  return (
    <div className="w-64 bg-white border-r-2">
      <div className="h-16 flex items-center justify-center bg-blue-800 text-white text-3xl font-bold">
        Quizzlets
      </div>
      <div className="p-4">
        <div className="text-xl font-bold mb-2">Quick Actions</div>
        <Link to={"/enroll"}>
          <Button variant="primary" size="md" className="w-full">
            <AddIcon className="mr-2 h-4 w-4" />
            Enroll in Course
          </Button>
        </Link>
      </div>

      <div className="p-4">
        <div className="text-lg font-bold mb-2">My Courses</div>
        {myEnrolledCourses.map((course) => (
          <Button
            key={course.courseId}
            variant="secondary"
            size="sm"
            className="w-full mb-2 text-left"
          >
            {course.courseName}
          </Button>
        ))}
        {myEnrolledCourses.length === 0 && (
          <p className="text-sm text-gray-500">No courses enrolled yet</p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
