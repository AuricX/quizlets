// src/services/instructorApi.js
const API_BASE = "http://localhost:4000";

// Get courses for a specific teacher
export const getInstructorCourses = async (teacherId) => {
  try {
    console.log(`Fetching courses for teacher ${teacherId}...`);
    
    const response = await fetch(`${API_BASE}/instructor/${teacherId}/courses`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`Found ${data.length} courses`);
    return data;
    
  } catch (error) {
    console.error("Error fetching instructor courses:", error);
    
    // Fallback to mock data if API fails
    return [
      {
        course_id: 1,
        title: "PHP for Beginners",
        description: "Learn PHP from scratch",
        level: "Very Easy",
        teacher_id: 1,
        image_url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=60",
        quiz_count: 2,
        student_count: 2
      },
      {
        course_id: 3,
        title: "Intro to Machine Learning",
        description: "Basics of ML algorithms",
        level: "Normal",
        teacher_id: 1,
        image_url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=60",
        quiz_count: 1,
        student_count: 2
      },
      {
        course_id: 7,
        title: "Advanced PHP",
        description: "Master PHP frameworks and patterns",
        level: "Hard",
        teacher_id: 1,
        image_url: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=60",
        quiz_count: 1,
        student_count: 1
      }
    ];
  }
};

// Instructor login
export const loginInstructor = async (email, password) => {
  try {
    const response = await fetch(`${API_BASE}/instructor/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    
    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error logging in instructor:", error);
    throw error;
  }
};

// Create a new course
export const createCourse = async (courseData) => {
  try {
    const response = await fetch(`${API_BASE}/instructor/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to create course: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error creating course:", error);
    throw error;
  }
};

// Get course students
export const getCourseStudents = async (courseId) => {
  try {
    const response = await fetch(`${API_BASE}/courses/${courseId}/students`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching course students:", error);
    return [];
  }
};