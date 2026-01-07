import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Teacher/Card";
import { useAuth } from "../../context/AuthContext";

function Manage() {
  const { user } = useAuth(); // get logged-in user
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) return;

    // 🔥 DEBUG: check what the user object contains
    console.log("Logged-in user:", user);

    // Adjust this according to your AuthContext user object
    const teacherId = user.id || user.user_id || user.teacher_id;

    if (!teacherId) {
      console.error("Teacher ID not found in user object");
      setError("Teacher ID not found");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:4000/manage/teacher/${teacherId}/courses`)
      .then((res) => {
        console.log("COURSES FROM API:", res.data); // 🔥 DEBUG
        setCourses(res.data);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setError("Failed to load courses");
      })
      .finally(() => setLoading(false));
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center text-red-600">
        <p>{error}</p>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="p-6 text-center text-gray-600">
        <p>No courses found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {courses.map((course) => (
        <Card key={course.courseId} course={course} />
      ))}
    </div>
  );
}

export default Manage;
