import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { createCourse } from "../../services/instructorApi";

const Create = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [level, setLevel] = useState("Normal");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    if (!courseName.trim()) {
      setError("Please enter course name.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // Prepare course data
      const courseData = {
        title: courseName,
        description: description.trim() || null,
        level: level,
        teacher_id: localStorage.getItem('teacher_id') || 1, // Default to teacher 1
        image_url: imagePreview || "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&q=80"
      };

      console.log("Creating course with data:", courseData);
      
      const result = await createCourse(courseData);
      
      alert(`Course "${courseName}" created successfully!`);
      console.log("Course creation result:", result);
      
      // Navigate back to manage page
      navigate("/manage");
      
    } catch (err) {
      console.error("Failed to create course:", err);
      setError(err.message || "Failed to create course. Please try again.");
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create New Course</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Course Name *
        </label>
        <input
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter course name"
          disabled={loading}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Enter course description (optional)"
          disabled={loading}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Difficulty Level
        </label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={loading}
        >
          <option value="Very Easy">Very Easy</option>
          <option value="Easy">Easy</option>
          <option value="Normal">Normal</option>
          <option value="Hard">Hard</option>
          <option value="Very Hard">Very Hard</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">
          Course Image
        </label>
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
            cursor: loading ? 'default' : 'pointer',
            transition: 'all 0.3s',
            '&:hover': {
              borderColor: loading ? '#cbd5e0' : '#3b82f6',
              backgroundColor: loading ? 'transparent' : '#f7fafc',
            },
            opacity: loading ? 0.6 : 1,
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

      <div className="flex gap-4">
        <Button 
          variant="primary" 
          size="md" 
          onClick={handleCreate}
          disabled={loading || !courseName.trim()}
        >
          {loading ? (
            <>
              <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></span>
              Creating...
            </>
          ) : "Create Course"}
        </Button>
        
        <Button 
          variant="outline" 
          size="md" 
          onClick={() => navigate("/manage")}
          disabled={loading}
        >
          Cancel
        </Button>
      </div>

      {/* Debug info (remove in production) */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm">
        <p className="font-medium text-gray-700 mb-2">Debug Information:</p>
        <p className="text-gray-600">Teacher ID: {localStorage.getItem('teacher_id') || 1}</p>
        <p className="text-gray-600">Course data will be sent to: POST /instructor/courses</p>
        <button
          onClick={() => {
            console.log("Current form state:", {
              courseName,
              description,
              level,
              imagePreview: imagePreview ? "Image selected" : "No image"
            });
          }}
          className="mt-2 text-blue-500 hover:text-blue-700"
          disabled={loading}
        >
          Log Form State
        </button>
      </div>
    </div>
  );
};

export default Create;