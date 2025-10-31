import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import AddIcon from "@mui/icons-material/Add";
import courses from "../../data/courses";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-64 bg-white border-r-2">
      <div className="h-16 flex items-center justify-center bg-blue-800 text-white text-3xl font-bold">
        Quizzlets
      </div>
      <div className="p-4">
        <div className="text-xl font-bold mb-2">Quick Actions</div>
        <Button
          variant="primary"
          size="md"
          className="w-full"
          onClick={() => setIsModalOpen(true)}
        >
          <AddIcon className="mr-2 h-4 w-4" />
          Enroll in Course
        </Button>
      </div>

      <div className="p-4">
        <div className="text-lg font-bold mb-2">My Courses</div>
        {courses.map((course) => (
          <Button
            key={course.id}
            variant="secondary"
            size="sm"
            className="w-full mb-2 text-left"
          >
            {course.name}
          </Button>
        ))}
        {courses.length === 0 ? "No courses available" : null}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Enroll In Course"
      >
        <div className="space-y-4">
          <p>Select a course to enroll:</p>
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-2 justify-end mt-4">
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsModalOpen(false)}>
              Enroll
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Sidebar;
