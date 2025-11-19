import Button from "./Button";
function CourseCard({course, onEnroll}) {
  return (
    <div
      key={course.courseId}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <img
        src={course.image}
        alt={course.courseName}
        className="w-full h-40 object-cover"
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
          onClick={onEnroll ? () => onEnroll(course) : undefined}
        >
          {onEnroll ? "Enroll" : "Open Course"}
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
