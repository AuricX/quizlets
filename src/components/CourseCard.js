const CourseCard = ({ course, onEnroll }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {course.name}
          </h3>
          <p className="text-gray-600 text-sm mb-1">
            Course ID: {course.id}
          </p>
          {course.description && (
            <p className="text-gray-700 mt-3">
              {course.description}
            </p>
          )}
          {course.instructor && (
            <p className="text-gray-600 text-sm mt-2">
              Instructor: {course.instructor}
            </p>
          )}
          {course.credits && (
            <p className="text-gray-600 text-sm">
              Credits: {course.credits}
            </p>
          )}
        </div>
        <button
          onClick={() => onEnroll(course)}
          className="mt-4 w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
