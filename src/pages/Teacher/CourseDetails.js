import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import QuizViewCard from "../../components/Teacher/QuizViewCard";
import { ArrowBack } from "@mui/icons-material";
import Button from "../../components/Button";

import { Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, IconButton, Radio } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CourseDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const [quizTitle, setQuizTitle] = useState("");
  const [questions, setQuestions] = useState([{ prompt: "", options: ["", "", ""], correctAnswer: 0 }]);

  useEffect(() => {
    fetchCourse();
  }, [id]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:4000/course-details/${id}`);

      // Normalize quizzes: ensure quiz_id exists
      const quizzes = res.data.quizzes.map(q => ({
        ...q,
        quiz_id: q.quiz_id || q.id
      }));

      setCourse({ ...res.data, quizzes });
    } catch (err) {
      console.error(err);
      navigate("/manage-courses");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      await axios.post(`http://localhost:4000/course-details/${id}/quizzes`, { title: quizTitle, questions });
      handleClose();
      fetchCourse();
    } catch (err) {
      console.error(err);
      alert("Failed to create quiz");
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setQuizTitle("");
    setQuestions([{ prompt: "", options: ["", "", ""], correctAnswer: 0 }]);
  };

  const addQuestion = () => setQuestions([...questions, { prompt: "", options: ["", "", ""], correctAnswer: 0 }]);
  const removeQuestion = (i) => setQuestions(questions.filter((_, idx) => idx !== i));

  if (loading) return <p className="p-6">Loading...</p>;
  if (!course) return <p className="p-6">Course not found</p>;

  return (
    <div className="p-6">
      <Button onClick={() => navigate("/manage-courses")} className="mb-4">
        <ArrowBack /> Back
      </Button>

      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="text-gray-600 mt-2">{course.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {course.quizzes.map(q => (
          <QuizViewCard key={q.quiz_id} quiz={q} courseId={id} />
        ))}
      </div>

      {/* Add Quiz Dialog */}
      <Box textAlign="center" mt={6}>
        <Button variant="primary" onClick={handleOpen}>Add Quiz</Button>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Add Quiz</DialogTitle>
        <DialogContent>
          <TextField label="Quiz Title" fullWidth value={quizTitle} onChange={e => setQuizTitle(e.target.value)} sx={{ mb: 2 }} />

          {questions.map((q, i) => (
            <Box key={i} mb={2} border="1px solid #ccc" p={2} borderRadius={2}>
              <TextField label={`Question ${i + 1}`} fullWidth value={q.prompt} onChange={e => { const copy = [...questions]; copy[i].prompt = e.target.value; setQuestions(copy); }} />

              {q.options.map((opt, j) => (
                <Box key={j} display="flex" alignItems="center" mt={1}>
                  <Radio checked={q.correctAnswer === j} onChange={() => { const copy = [...questions]; copy[i].correctAnswer = j; setQuestions(copy); }} />
                  <TextField label={`Option ${j + 1}`} fullWidth value={opt} onChange={e => { const copy = [...questions]; copy[i].options[j] = e.target.value; setQuestions(copy); }} />
                </Box>
              ))}

              {questions.length > 1 && <IconButton onClick={() => removeQuestion(i)}><RemoveIcon /></IconButton>}
            </Box>
          ))}

          <Button onClick={addQuestion} startIcon={<AddIcon />}>Add Question</Button>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CourseDetails;
