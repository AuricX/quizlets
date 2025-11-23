import { useParams } from "react-router-dom";
import courseQuizzes from "../../data/courseQuizzes";

function QuizViewer() {
  const { courseId, quizId } = useParams();

  const course = courseQuizzes.find(c => c.courseId === parseInt(courseId));
  if (!course) return <p>Course not found.</p>;

  const quiz = course.quizzes.find(q => q.id === quizId);
  if (!quiz) return <p>Quiz not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>

      {quiz.questions.map(question => (
        <div key={question.id} className="mb-6 p-4 bg-white rounded-xl shadow">
          <p className="font-semibold text-lg">{question.prompt}</p>

          <ul className="mt-3 space-y-2">
            {question.options.map(opt => (
              <li
                key={opt.id}
                className={`p-2 rounded-md ${
                  opt.isCorrect ? "bg-green-200" : "bg-red-200"
                }`}
              >
                {opt.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default QuizViewer;
