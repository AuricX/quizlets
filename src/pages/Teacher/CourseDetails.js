import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCourseDetails, createQuiz } from "../../services/instructorApi";
import QuizViewCard from "../../components/Teacher/QuizViewCard";
import { ArrowBack } from "@mui/icons-material";
import Button from "../../components/Button";

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Radio,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CourseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([{ 
    prompt: "", 
    options: ["", "", ""], 
    correctAnswer: 0 
  }]);
  const [quizTitle, setQuizTitle] = useState("");

  useEffect(() => {
    fetchCourseDetails();
  }, [id]);

  const fetchCourseDetails = async () => {
    try {
      setLoading(true);
      const data = await getCourseDetails(id);
      setCourse(data);
    } catch (error) {
      console.error("Error fetching course:", error);
      alert("Failed to load course");
      navigate("/manage-courses");
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQuizTitle("");
    setQuestions([{ prompt: "", options: ["", "", ""], correctAnswer: 0 }]);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { 
      prompt: "", 
      options: ["", "", ""], 
      correctAnswer: 0 
    }]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleChangePrompt = (index, value) => {
    const updated = [...questions];
    updated[index].prompt = value;
    setQuestions(updated);
  };

  const handleChangeOption = (qIndex, optIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[optIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectAnswerChange = (qIndex, optIndex) => {
    const updated = [...questions];
    updated[qIndex].correctAnswer = optIndex;
    setQuestions(updated);
  };

  const handleSubmit = async () => {
    if (!quizTitle.trim()) {
      alert("Please enter quiz title");
      return;
    }

    // Validate
    for (let i = 0; i < questions.length; i++) {
      const q = questions[i];
      if (!q.prompt.trim()) {
        alert(`Please enter question ${i + 1}`);
        return;
      }
      for (let j = 0; j < q.options.length; j++) {
        if (!q.options[j].trim()) {
          alert(`Please enter all options for question ${i + 1}`);
          return;
        }
      }
    }

    try {
      const quizData = {
        title: quizTitle,
        questions: questions
      };

      await createQuiz(id, quizData);
      alert("Quiz created!");
      handleClose();
      fetchCourseDetails();
      
    } catch (error) {
      console.error("Error creating quiz:", error);
      alert("Failed to create quiz");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="p-6">
        <p>Course not found.</p>
        <Button 
          variant="primary" 
          className="mt-4"
          onClick={() => navigate('/manage-courses')}
        >
          <ArrowBack/> Back to Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Button 
        variant="primary" 
        className="mt-4 gap-2 mb-6"
        onClick={() => navigate('/manage-courses')}
      >
        <ArrowBack/> Back to Courses
      </Button>
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        <p className="text-gray-600 mt-2">{course.description || "No description"}</p>
        <div className="flex gap-4 mt-4 text-sm text-gray-500">
          <span>
            <span className="font-semibold">{course.quizzes?.length || 0}</span> quizzes
          </span>
          <span className={`px-2 py-1 rounded-full ${
            course.level === 'Very Easy' ? 'bg-green-100 text-green-800' :
            course.level === 'Easy' ? 'bg-blue-100 text-blue-800' :
            course.level === 'Normal' ? 'bg-yellow-100 text-yellow-800' :
            course.level === 'Hard' ? 'bg-orange-100 text-orange-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
      </div>

      {/* Quizzes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {course.quizzes && course.quizzes.map((quiz) => (
          <QuizViewCard
            key={quiz.quiz_id}
            quiz={quiz}
            courseId={course.course_id}
          />
        ))}
      </div>

      {/* Add Quiz Button */}
      <Box textAlign="center" mt={6}>
        <Button variant="primary" onClick={handleOpen}>
          Add Quiz
        </Button>
      </Box>

      {/* Add Quiz Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add a Quiz</DialogTitle>

        <DialogContent>
          <TextField
            label="Quiz Title"
            fullWidth
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            sx={{ mb: 2 }}
          />

          {questions.map((q, qIndex) => (
            <Box key={qIndex} mb={3} border="1px solid #ccc" p={2} borderRadius={2}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <TextField
                  label={`Question ${qIndex + 1}`}
                  fullWidth
                  value={q.prompt}
                  onChange={(e) => handleChangePrompt(qIndex, e.target.value)}
                />
                {questions.length > 1 && (
                  <IconButton onClick={() => handleRemoveQuestion(qIndex)}>
                    <RemoveIcon />
                  </IconButton>
                )}
              </Box>

              {q.options.map((opt, optIndex) => (
                <Box key={optIndex} display="flex" alignItems="center" sx={{ mt: 1 }}>
                  <Radio
                    checked={q.correctAnswer === optIndex}
                    onChange={() => handleCorrectAnswerChange(qIndex, optIndex)}
                    value={optIndex}
                  />
                  <TextField
                    label={`Answer ${optIndex + 1}`}
                    fullWidth
                    value={opt}
                    onChange={(e) =>
                      handleChangeOption(qIndex, optIndex, e.target.value)
                    }
                  />
                </Box>
              ))}
            </Box>
          ))}

          <Button startIcon={<AddIcon />} onClick={handleAddQuestion} sx={{ mt: 1 }}>
            Add Question
          </Button>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Create Quiz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseDetails;