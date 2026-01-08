import { useNavigate } from "react-router-dom";

function QuizViewCard({ quiz, courseId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // use quiz_id to match backend
    navigate(`/courses/${courseId}/quiz/${quiz.quiz_id}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-800">{quiz.title}</h2>

      <p className="text-gray-500 mt-2 text-sm">
        {quiz.questions?.length || 0} questions
      </p>

      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-xl"
        onClick={handleClick}
      >
        View Quiz
      </button>
    </div>
  );
}

export default QuizViewCard;
