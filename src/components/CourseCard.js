import Button from "./Button";
import { useNavigate } from "react-router-dom";

function CourseCard({course, onEnroll}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onEnroll) {
      onEnroll(course);
    } else {
      navigate(`/courses/${course.courseId}`);
    }
  };

  return (
    <div
      key={course.courseId}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <img
        src={course.image_url ? course.image_url : '/noimage.webp'}
        alt={course.courseName}
        className={course.image_url ? "w-full h-48 object-cover" : "w-full h-48 object-contain bg-gray-100" }
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{course.courseName}</h2>

        <p className="text-gray-500 mt-2 text-sm">
          Explore lessons, quizzes, and track your learning progress.
        </p>
      </div>

      <div className="px-6 pb-6">
        <Button 
          variant="primary" 
          size="md"
          onClick={handleClick}
        >
          {onEnroll ? "Enroll" : "View Course"}
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
