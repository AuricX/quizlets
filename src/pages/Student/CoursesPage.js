import CourseCard from "../../components/CourseCard";
import courses from "../../data/courses";

function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Courses</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard course={course} />
        ))}
      </div>
    </div>
  );
}

export default CoursesPage;
