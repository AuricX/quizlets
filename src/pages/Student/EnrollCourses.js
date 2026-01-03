import { useState, useEffect } from 'react';
import CourseCard from '../../components/CourseCard';
import api from '../../services/api';
import { useEnrollment } from '../../context/EnrollmentContext';

const EnrollCourses = () => {
  const { enrolledCourses, enrollInCourse } = useEnrollment();
  const [availableCourses, setAvailableCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvailableCourses = async () => {
      try {
        const userStr = localStorage.getItem('user');
        const userId = userStr ? JSON.parse(userStr).user_id : null;
        
        if (!userId) {
          console.error('No user ID found');
          setLoading(false);
          return;
        }
        
        const response = await api.get('/courses/available', { params: { userId: userId } });
        setAvailableCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvailableCourses();
  }, [enrolledCourses]);

  const handleEnroll = async (course) => {
    try {
      const userStr = localStorage.getItem('user');
      const user = userStr ? JSON.parse(userStr) : null;
      
      if (!user || !user.user_id) {
        alert('User not found. Please login again.');
        return;
      }

      await api.post('/enrollment/enroll', {
        student_id: user.user_id,
        course_id: course.course_id
      });

      enrollInCourse(course);
      alert(`Successfully enrolled in ${course.title}!`);
      
      const response = await api.get('/courses/available', { params: { userId: user.user_id } });
      setAvailableCourses(response.data);
    } catch (error) {
      console.error('Error enrolling in course:', error);
      alert(error.response?.data?.message || 'Failed to enroll in course');
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading available courses...</div>
      </div>
    );
  }

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
    </div>
  );
};

export default EnrollCourses;
