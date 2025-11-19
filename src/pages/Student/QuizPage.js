import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseQuizzes from "../../data/courseQuizzes";
import Button from "../../components/Button";
import { ArrowBack } from "@mui/icons-material";

function QuizPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  let quiz = null;
  let course = null;
  
  for (const c of courseQuizzes) {
    const foundQuiz = c.quizzes.find(q => q.id === id);
    if (foundQuiz) {
      quiz = foundQuiz;
      course = c;
      break;
    }
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

  const handleAnswerSelect = (optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
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
      const selectedOption = selectedAnswers[question.id];
      const correctOption = question.options.find(opt => opt.isCorrect);
      if (selectedOption === correctOption.id) {
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
              const selectedOption = selectedAnswers[question.id];
              const correctOption = question.options.find(opt => opt.isCorrect);
              const isCorrect = selectedOption === correctOption.id;

              return (
                <div 
                  key={question.id} 
                  className={`p-4 rounded-lg border-2 ${
                    isCorrect ? 'bg-green-50 border-green-300' : 'bg-red-50 border-red-300'
                  }`}
                >
                  <p className="font-semibold mb-2">
                    {index + 1}. {question.prompt}
                  </p>
                  <p className="text-sm">
                    Your answer: {question.options.find(opt => opt.id === selectedOption)?.text || 'Not answered'}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-700 mt-1">
                      Correct answer: {correctOption.text}
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
            <Button variant="primary" onClick={() => navigate(`/courses/${course.courseId}`)}>
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
          onClick={() => navigate(`/courses/${course.courseId}`)}
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
          {currentQuestion.prompt}
        </h2>

        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleAnswerSelect(option.id)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                selectedAnswers[currentQuestion.id] === option.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium">{option.id.toUpperCase()}.</span> {option.text}
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
                    : selectedAnswers[quiz.questions[index].id]
                    ? 'bg-green-400'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!selectedAnswers[currentQuestion.id]}
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
