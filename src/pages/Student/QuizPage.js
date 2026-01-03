import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useEnrollment } from "../../context/EnrollmentContext";
import { ArrowBack } from "@mui/icons-material";
import api from "../../services/api";

function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { completeQuiz } = useEnrollment();
  
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await api.get(`/quizzes/${id}`);
        setQuiz(response.data);
      } catch (error) {
        console.error('Error fetching quiz:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Loading quiz...</div>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <p className="text-red-800 text-lg">Quiz not found</p>
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

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;

  const handleAnswerSelect = (choiceId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.question_id]: choiceId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = calculateScore();
      completeQuiz(quiz.quiz_id, score, totalQuestions);
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach(question => {
      const selectedChoice = selectedAnswers[question.question_id];
      const correctChoice = question.choices.find(choice => choice.is_correct === 1);
      if (selectedChoice === correctChoice.choice_id) {
        correct++;
      }
    });
    return correct;
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
      <div className="p-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Quiz Results
          </h1>
          <div className="text-center mb-6">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {percentage}%
            </div>
            <p className="text-xl text-gray-600">
              You got {score} out of {totalQuestions} questions correct
            </p>
          </div>

          <div className="space-y-4 mb-6">
            {quiz.questions.map((question, index) => {
              const selectedChoice = selectedAnswers[question.question_id];
              const correctChoice = question.choices.find(choice => choice.is_correct === 1);
              const isCorrect = selectedChoice === correctChoice.choice_id;

              return (
                <div 
                  key={question.question_id} 
                  className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                  }`}
                >
                  <p className="font-semibold mb-2">
                    {index + 1}. {question.body}
                  </p>
                  <p className="text-sm">
                    Your answer: {question.choices.find(choice => choice.choice_id === selectedChoice)?.text || 'Not answered'}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-700 mt-1">
                      Correct answer: {correctChoice.text}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="secondary" onClick={handleRetry}>
              Retry Quiz
            </Button>
            <Button variant="primary" onClick={() => navigate(`/courses/${quiz.course_id}`)}>
              Back to Course
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="mb-6">
        <Button 
          variant="secondary" 
          size="sm"
          onClick={() => navigate(`/courses/${quiz.course_id}`)}
          className="mb-4 gap-2"
        >
          <ArrowBack/> Exit Quiz
        </Button>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">{quiz.title}</h1>
          <span className="text-gray-600">
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {currentQuestion.body}
        </h2>

        <div className="space-y-3 mb-8">
          {currentQuestion.choices.map((choice, index) => (
            <button
              key={choice.choice_id}
              onClick={() => handleAnswerSelect(choice.choice_id)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                selectedAnswers[currentQuestion.question_id] === choice.choice_id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">{String.fromCharCode(65 + index)}.</span> {choice.text}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="secondary"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {quiz.questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentQuestionIndex
                    ? 'bg-blue-600'
                    : selectedAnswers[quiz.questions[index].question_id]
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestion.question_id]}
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
