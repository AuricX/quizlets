import Button from "../Button";
import { useNavigate } from "react-router-dom";

function Card({ course }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/manage-courses/${course.course_id}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
      <img
        src={course.image_url || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=60"}
        alt={course.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{course.title}</h2>
        
        <div className="mt-2 space-y-1">
          <p className="text-sm text-gray-500 line-clamp-2">
            {course.description || "No description available"}
          </p>
          
          <div className="flex items-center justify-between mt-3">
            <span className={`px-2 py-1 text-xs rounded-full ${
              course.level === 'Very Easy' ? 'bg-green-100 text-green-800' :
              course.level === 'Easy' ? 'bg-blue-100 text-blue-800' :
              course.level === 'Normal' ? 'bg-yellow-100 text-yellow-800' :
              course.level === 'Hard' ? 'bg-orange-100 text-orange-800' :
              'bg-red-100 text-red-800'
            }`}>
              {course.level}
            </span>
            
            <div className="text-sm text-gray-500">
              <span className="font-medium">{course.quiz_count || 0}</span> quizzes
            </div>
          </div>
          
          <div className="text-sm text-gray-500 mt-2">
            <span className="font-medium">{course.student_count || 0}</span> students enrolled
          </div>
        </div>
      </div>

      <div className="px-6 pb-6">
        <Button 
          variant="primary" 
          size="md"
          onClick={handleClick}
        >
          Manage Course
        </Button>
      </div>
    </div>
  );
}

export default Card;