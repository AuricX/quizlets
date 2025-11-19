import { createContext, useContext, useState } from 'react';

const EnrollmentContext = createContext();

export const EnrollmentProvider = ({ children }) => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [completedQuizzes, setCompletedQuizzes] = useState({});
  // completedQuizzes structure: { quizId: { score: number, totalQuestions: number, percentage: number, completedAt: timestamp } }

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

  const completeQuiz = (quizId, score, totalQuestions) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    setCompletedQuizzes({
      ...completedQuizzes,
      [quizId]: {
        score,
        totalQuestions,
        percentage,
        completedAt: Date.now()
      }
    });
  };

  const getQuizCompletion = (quizId) => {
    return completedQuizzes[quizId] || null;
  };

  const isQuizCompleted = (quizId) => {
    return !!completedQuizzes[quizId];
  };

  return (
    <EnrollmentContext.Provider value={{ 
      enrolledCourses, 
      enrollInCourse, 
      unenrollFromCourse,
      isEnrolled,
      completedQuizzes,
      completeQuiz,
      getQuizCompletion,
      isQuizCompleted
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
