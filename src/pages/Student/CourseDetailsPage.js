import { useParams, useNavigate } from "react-router-dom";
import courseQuizzes from "../../data/courseQuizzes";
import QuizCard from "../../components/QuizCard";
import Button from "../../components/Button";
import { ArrowBack } from "@mui/icons-material";

function CourseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const courseId = parseInt(id);

  const course = courseQuizzes.find(c => c.courseId === courseId);

  const handleStartQuiz = (quiz) => {
    navigate(`/quizzes/${quiz.id}`);
  };

  if (!course) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800 text-lg">Course not found</p>
          <Button 
            variant="primary" 
            className="mt-4 gap-2"
            onClick={() => navigate('/courses')}
          >
            <ArrowBack/> Back to Courses
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <Button 
          variant="secondary" 
          size="md"
          onClick={() => navigate('/courses')}
          className="mb-4 gap-2"
        >
          <ArrowBack/> Back to Courses
        </Button>
        <h1 className="text-3xl font-bold text-gray-800">{course.courseName}</h1>
        <p className="text-gray-600 mt-2">
          {course.quizzes.length} {course.quizzes.length === 1 ? 'quiz' : 'quizzes'} available
        </p>
      </div>

      {course.quizzes.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <p className="text-yellow-800 text-lg">No quizzes available for this course yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              courseId={courseId}
              onStartQuiz={handleStartQuiz}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseDetailsPage;
