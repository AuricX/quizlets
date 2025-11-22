
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Create = () => {
  const navigate = useNavigate();
  const [courseName, setCourseName] = useState("");
  const [image, setImage] = useState("");

  const handleCreate = () => {
    if (!courseName) return alert("Please enter course name.");
    alert(`Course "${courseName}" created!`);
    
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
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 font-semibold mb-2">Course Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <Button variant="primary" size="md" onClick={handleCreate}>
        Create Course
      </Button>
    </div>
  );
};

export default Create;
