// src/services/instructorApi.js
const API_BASE = "http://localhost:4000";

export const getInstructorCourses = async (teacherId) => {
  try {
    const response = await fetch(`${API_BASE}/instructor/${teacherId}/courses`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch courses: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching instructor courses:", error);
    return []; // Return empty array on error
  }
};

// ============================================
// CREATE COURSE FUNCTION (NEW)
// ============================================
export const createCourse = async (courseData) => {
  try {
    console.log("Sending course data:", courseData);
    
    const response = await fetch(`${API_BASE}/instructor/courses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(courseData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Failed to create course: ${response.status}`);
    }

    const result = await response.json();
    console.log("Course created successfully:", result);
    return result;
    
  } catch (error) {
    console.error("Error creating course:", error);
    throw error; // Re-throw to handle in component
  }
};