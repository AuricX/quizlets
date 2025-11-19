import CourseCard from "../../components/CourseCard";
import courseQuizzes from "../../data/courseQuizzes";
import { useEnrollment } from "../../context/EnrollmentContext";

function CoursesPage() {
  const { enrolledCourses } = useEnrollment();

  const myEnrolledCourses = courseQuizzes.filter(course => enrolledCourses.includes(course.courseId));

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Courses</h1>
      
      {myEnrolledCourses.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <p className="text-yellow-800 text-lg mb-4">You haven't enrolled in any courses yet.</p>
          <p className="text-yellow-600">Visit the Enroll Courses page to join a course!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myEnrolledCourses.map((course) => (
            <CourseCard key={course.courseId} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CoursesPage;
