import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import courseQuizzes from "../../data/courseQuizzes";
import QuizViewCard from "../../components/Teacher/QuizViewCard";
import { ArrowBack } from "@mui/icons-material";

import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CourseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const course = courseQuizzes.find(c => c.courseId === parseInt(id));

  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([{ prompt: "", options: ["", "", ""] }]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 const [quizTitle, setQuizTitle] = useState("");

  const handleAddQuestion = () => {
    setQuestions([...questions, { prompt: "", options: ["", "", ""] }]);
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

  const handleSubmit = () => {
    alert("Submitted");
    setOpen(false);
  };



  if (!course) return <p>Course not found.</p>;

  return (
    <div className="p-6">
      <Button 
            variant="primary" 
            className="mt-4 gap-2"
            onClick={() => navigate('/manage-courses')}
          >
            <ArrowBack/> Back to Courses
          </Button>
      <h1 className="text-3xl font-bold mb-6">{course.courseName}</h1>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {course.quizzes.map((quiz) => (
  <QuizViewCard
    key={quiz.id}
    quiz={quiz}
    courseId={course.courseId} 
  />
))}

      </div>

      {/* Button to open Add Quiz popup */}
      <Box textAlign="center" mt={6}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Quiz
        </Button>
      </Box>

      {/* Popup */}
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
        <IconButton onClick={() => handleRemoveQuestion(qIndex)}>
          <RemoveIcon />
        </IconButton>
      </Box>

      {q.options.map((opt, optIndex) => (
        <TextField
          key={optIndex}
          label={`Answer ${optIndex + 1}`}
          fullWidth
          sx={{ mt: 1 }}
          value={opt}
          onChange={(e) =>
            handleChangeOption(qIndex, optIndex, e.target.value)
          }
        />
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
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseDetails;
