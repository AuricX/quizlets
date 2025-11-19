import Button from "./Button";

function QuizCard({ quiz, courseId, onStartQuiz }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{quiz.title}</h2>
        <p className="text-gray-500 mt-2 text-sm">
          {quiz.questions.length} questions
        </p>
      </div>

      <div className="px-6 pb-6">
        <Button 
          variant="primary" 
          size="md"
          onClick={() => onStartQuiz(quiz, courseId)}
        >
          Start Quiz
        </Button>
      </div>
    </div>
  );
}

export default QuizCard;
