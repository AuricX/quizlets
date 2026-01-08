import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import axios from "axios";

function QuizViewer() {
  const { courseId, quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`http://localhost:4000/course-details/${courseId}`);
        const foundQuiz = res.data.quizzes.find(q => q.quiz_id === Number(quizId));
        setQuiz(foundQuiz || null);
      } catch (err) {
        console.error(err);
        setQuiz(null);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [courseId, quizId]);

  if (loading) return <p className="p-6">Loading quiz...</p>;
  if (!quiz) return <p className="p-6">Quiz not found</p>;

  return (
    <div className="p-6">
      <Button onClick={() => navigate(`/manage-courses/${courseId}`)} className="mb-4">
        <ArrowBack /> Back to Quizzes
      </Button>

      <h1 className="text-2xl font-bold mb-4">{quiz.title}</h1>

      {quiz.questions.map(q => (
        <div key={q.question_id} className="mb-6 p-4 bg-white rounded-xl shadow">
          <p className="font-semibold text-lg">{q.body}</p>
          <ul className="mt-3 space-y-2">
            {q.options.map(opt => (
              <li
                key={opt.id}
                className={`p-2 rounded-md ${opt.isCorrect ? "bg-green-200" : "bg-red-200"}`}
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
