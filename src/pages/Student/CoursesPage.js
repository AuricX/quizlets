import React from "react";
import { useEffect } from "react";
import api from "../../services/api";
import CourseCard from "../../components/CourseCard";
import { useEnrollment } from "../../context/EnrollmentContext";

function CoursesPage() {
  const { enrolledCourses } = useEnrollment();
  const [myEnrolledCourses, setMyEnrolledCourses] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      try {
        const response = await api.get("/enrollment/1/courses"); // Assuming studentId is 1
        const enrolled = response.data;
        setMyEnrolledCourses(enrolled);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [enrolledCourses]);

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading courses...</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Courses</h1>

      {myEnrolledCourses.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <p className="text-yellow-800 text-lg mb-4">
            You haven't enrolled in any courses yet.
          </p>
          <p className="text-yellow-600">
            Visit the Enroll Courses page to join a course!
          </p>
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
