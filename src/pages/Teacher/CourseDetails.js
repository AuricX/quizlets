import { useState } from "react";
import { useParams } from "react-router-dom";
import courseQuizzes from "../../data/courseQuizzes";
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CourseDetails() {
  const { id } = useParams(); 
  const course = courseQuizzes.find(c => c.courseId === parseInt(id));

  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([{ prompt: "", options: ["", "", ""] }]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddQuestion = () => {
    setQuestions([...questions, { prompt: "", options: ["", "", ""] }]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  const handleChangePrompt = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].prompt = value;
    setQuestions(newQuestions);
  };

  const handleChangeOption = (qIndex, optIndex, value) => {
    const newQuestions = [...questions];
    newQuestions[qIndex].options[optIndex] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = () => {
    alert("Submitted");
    setOpen(false);
  };

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">{course.courseName}</h1>

      {course.quizzes.map(quiz => (
        <div key={quiz.id} className="mb-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
          {quiz.questions.map(q => (
            <div key={q.id} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">{q.prompt}</p>
              <ul className="list-disc pl-5 mt-2">
                {q.options.map(opt => (
                  <li key={opt.id} className="text-gray-700">{opt.text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {/* Button to open Add Question dialog */}
      <Box textAlign="center" mt={6}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Add Questions
        </Button>
      </Box>

      {/* Dialog */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add Questions</DialogTitle>
        <DialogContent>
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
                  onChange={(e) => handleChangeOption(qIndex, optIndex, e.target.value)}
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
