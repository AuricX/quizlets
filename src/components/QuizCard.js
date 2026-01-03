import Button from "./Button";

function QuizCard({ quiz, courseId, attempt, onStartQuiz }) {
  const completion = attempt ? {
    score: attempt.score,
    totalQuestions: quiz.question_count,
    percentage: Math.round((attempt.score / quiz.question_count) * 100)
  } : null;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden">
      {completion && (
        <div className="bg-green-500 text-white text-sm font-semibold px-4 py-2 flex justify-between items-center">
          <span>✓ Completed</span>
          <span>{completion.percentage}%</span>
        </div>
      )}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800">{quiz.title}</h2>
        <p className="text-gray-500 mt-2 text-sm">
          {quiz.question_count} questions
        </p>
        {completion && (
          <p className="text-green-600 mt-2 text-sm font-medium">
            Score: {completion.score}/{completion.totalQuestions}
          </p>
        )}
      </div>

      <div className="px-6 pb-6">
        <Button 
          variant="primary" 
          size="md"
          onClick={() => onStartQuiz(quiz, courseId)}
        >
          {completion ? "Retake Quiz" : "Start Quiz"}
        </Button>
      </div>
    </div>
  );
}

export default QuizCard;
