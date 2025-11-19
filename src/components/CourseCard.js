import Button from "./Button";
function CourseCard({course}) {
  return (
    <div
      key={course.id}
      className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <img
        src={course.image}
        alt={course.name}
        className="w-full h-40 object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{course.name}</h2>

        <p className="text-gray-500 mt-2 text-sm">
          Explore lessons, quizzes, and track your learning progress.
        </p>
      </div>

      <div className="px-6 pb-6">
        <Button variant="primary" size="md">
          Open Course
        </Button>
      </div>
    </div>
  );
}

export default CourseCard;
