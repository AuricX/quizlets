import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createCourse } from "../../services/instructorApi";

const Create = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreate = async () => {
    if (!courseName) {
      alert("Please enter course name.");
      return;
    }

    setLoading(true);

    try {
      const courseData = {
        title: courseName,
        teacher_id: localStorage.getItem('teacher_id') || 1,
        image_url: imagePreview || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0"
      };

      await createCourse(courseData);
      alert(`Course "${courseName}" created!`);
      navigate("/manage");
      
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to create course.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Course</h1>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Course Name</label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course name"
          disabled={loading}
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Course Image</label>
        <Box
          component="label"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px dashed #cbd5e0',
            borderRadius: '8px',
            padding: '40px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
              borderColor: '#3b82f6',
              backgroundColor: '#f7fafc',
            },
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
            disabled={loading}
          />
          <CloudUploadIcon sx={{ fontSize: 48, color: '#9ca3af', mb: 2 }} />
          <Typography variant="body1" color="textSecondary">
            {image ? image.name : 'Click to upload or drag and drop'}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            PNG, JPG, GIF up to 10MB
          </Typography>
        </Box>
        {imagePreview && (
          <Box mt={2} textAlign="center">
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: '300px', maxHeight: '200px', borderRadius: '8px' }}
            />
          </Box>
        )}
      </div>

      <Button 
        variant="primary" 
        size="md" 
        onClick={handleCreate}
        disabled={loading}
      >
        {loading ? "Creating..." : "Create Course"}
      </Button>
    </div>
  );
};

export default Create;