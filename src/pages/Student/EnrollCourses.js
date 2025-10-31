import { useState } from 'react';
import CourseCard from '../../components/CourseCard';
import courses from '../../data/courses';

const EnrollCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (course) => {
    if (enrolledCourses.includes(course.id)) {
      alert(`You are already enrolled in ${course.name}`);
      return;
    }
    
    setEnrolledCourses([...enrolledCourses, course.id]);
    alert(`Successfully enrolled in ${course.name}!`);
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Available Courses</h1>
        <p className="text-gray-600 mt-2">Browse and enroll in courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={handleEnroll}
          />
        ))}
      </div>

      {enrolledCourses.length > 0 && (
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-4">
          <h2 className="text-lg font-semibold text-green-800 mb-2">
            Enrolled Courses ({enrolledCourses.length})
          </h2>
          <ul className="list-disc list-inside text-green-700">
            {enrolledCourses.map((courseId) => {
              const course = courses.find(c => c.id === courseId);
              return <li key={courseId}>{course?.name}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EnrollCourses;
