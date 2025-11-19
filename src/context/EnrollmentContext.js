import { createContext, useContext, useState } from 'react';

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const enrollInCourse = (courseId) => {
    if (!enrolledCourses.includes(courseId)) {
      setEnrolledCourses([...enrolledCourses, courseId]);
      return true;
    }
    return false;
  };

  const unenrollFromCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(id => id !== courseId));
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  return (
    <EnrollmentContext.Provider value={{ 
      enrolledCourses, 
      enrollInCourse, 
      unenrollFromCourse,
      isEnrolled 
    }}>
      {children}
    </EnrollmentContext.Provider>
  );
};

export const useEnrollment = () => {
  const context = useContext(EnrollmentContext);
  if (!context) {
    throw new Error('useEnrollment must be used within EnrollmentProvider');
  }
  return context;
};
