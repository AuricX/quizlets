import CourseCard from '../../components/CourseCard';
import courseQuizzes from '../../data/courseQuizzes';
import { useEnrollment } from '../../context/EnrollmentContext';

const EnrollCourses = () => {
  const { enrolledCourses, enrollInCourse } = useEnrollment();

  const handleEnroll = (course) => {
    const success = enrollInCourse(course.courseId);
    if (success) {
      alert(`Successfully enrolled in ${course.courseName}!`);
    } else {
      alert(`You are already enrolled in ${course.courseName}`);
    }
  };

  const availableCourses = courseQuizzes.filter(course => !enrolledCourses.includes(course.courseId));

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Available Courses</h1>
        <p className="text-gray-600 mt-2">Browse and enroll in courses that you haven't joined yet</p>
      </div>

      {availableCourses.length === 0 ? (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
          <p className="text-blue-800 text-lg">You are enrolled in all available courses!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableCourses.map((course) => (
            <CourseCard
              key={course.courseId}
              course={course}
              onEnroll={handleEnroll}
            />
          ))}
        </div>
      )}

      {enrolledCourses.length > 0 && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            Enrolled Courses ({enrolledCourses.length})
          </h2>
          <ul className="list-disc list-inside text-green-700">
            {enrolledCourses.map((courseId) => {
              const course = courseQuizzes.find(c => c.courseId === courseId);
              return <li key={courseId}>{course?.courseName}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EnrollCourses;
