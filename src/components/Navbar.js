import React from "react";
import { useNavigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import EditIcon from "@mui/icons-material/Edit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search quizzes..."
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-96"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/create-quiz")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <AddCircleIcon />
          <span>Create Quiz</span>
        </button>

        <button
          onClick={() => navigate("/take-quiz")}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
        >
          <EditIcon />
          <span>Take Quiz</span>
        </button>

        <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
          <AccountCircleIcon className="text-blue-500" sx={{ fontSize: 32 }} />
          <span className="text-gray-700 font-medium">User</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
