import { useNavigate } from "react-router-dom";

function Card({ course }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
      <img
        src={course.image}
        alt={course.courseName}
        className="w-full h-40 object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{course.courseName}</h2>

        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={() => navigate(`/manage-courses/${course.courseId}`)}
        >
          View Course
        </button>
      </div>
    </div>
  );
}

export default Card;
