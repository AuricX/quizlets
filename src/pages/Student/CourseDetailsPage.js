import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuizCard from "../../components/QuizCard";
import Button from "../../components/Button";
import { ArrowBack } from "@mui/icons-material";
import api from "../../services/api";

function CourseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  const [quizAttempts, setQuizAttempts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseQuizzes = async () => {
      try {
        const userStr = localStorage.getItem('user');
        const user = userStr ? JSON.parse(userStr) : null;
        
        const response = await api.get(`/courses/${id}/quizzes`);
        const courseData = response.data;
        
        setCourse(courseData);
        setQuizzes(courseData.quizzes || []);
        
        if (user && user.user_id) {
          try {
            const attemptsResponse = await api.post(`/quizzes/course-attempts`, {
              student_id: user.user_id,
              course_id: id
            });
            const attempts = attemptsResponse.data;
            
            // Create a map of quiz_id -> attempt with score
            const attemptsMap = {};
            attempts.forEach(attempt => {
              attemptsMap[attempt.quiz_id] = {
                attempt_id: attempt.attempt_id,
                score: parseFloat(attempt.score),
                quiz_id: attempt.quiz_id
              };
            });
            setQuizAttempts(attemptsMap);
          } catch (error) {
            console.error('Error fetching quiz attempts:', error);
          }
        }
      } catch (error) {
        console.error('Error fetching course quizzes:', error);
        setCourse(null);
        setQuizzes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseQuizzes();
  }, [id]);

  const handleStartQuiz = (quiz) => {
    navigate(`/quizzes/${quiz.quiz_id}`);
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading course details...</div>
      </div>
    );
  }

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
        <h1 className="text-3xl font-bold text-gray-800">{course.title}</h1>
        <p className="text-gray-600 mt-2">
          {quizzes.length} {quizzes.length === 1 ? 'quiz' : 'quizzes'} available
        </p>
      </div>

      {quizzes.length === 0 ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
          <p className="text-yellow-800 text-lg">No quizzes available for this course yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.quiz_id || quiz.id}
              quiz={quiz}
              courseId={id}
              attempt={quizAttempts[quiz.quiz_id]}
              onStartQuiz={handleStartQuiz}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default CourseDetailsPage;
