const API_BASE = "http://localhost:4000";

// ====================
// FOR MANAGE PAGE
// ====================

// Get teacher's courses
export const getInstructorCourses = async (teacherId) => {
  try {
    const response = await fetch(`${API_BASE}/manage/teacher/${teacherId}/courses`);
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching courses:", error);
    
    // Fallback data
    return [
      {
        course_id: 1,
        title: "PHP for Beginners",
        description: "Learn PHP from scratch",
        level: "Very Easy",
        image_url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
        quiz_count: 2,
        student_count: 2
      }
    ];
  }
};

// Create new course
export const createCourse = async (courseData) => {
  try {
    const response = await fetch(`${API_BASE}/manage/courses`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData)
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `HTTP error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

// ====================
// FOR COURSE DETAILS PAGE
// ====================

// Get course details
export const getCourseDetails = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE}/course-details/${courseId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }
};

// Create quiz
export const createQuiz = async (courseId, quizData) => {
  try {
    const response = await fetch(`${API_BASE}/course-details/${courseId}/quizzes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quizData)
    });
    
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.error || `HTTP error: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error creating quiz:", error);
    throw error;
  }
};