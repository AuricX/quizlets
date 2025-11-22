import React from "react";
import Card from "../../components/Teacher/Card";
import courseQuizzes  from "../../data/courseQuizzes";



function Manage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {courseQuizzes.map((course) => (
        <Card key={course.courseId} course={course} />
      ))}
    </div>
  );
}

export default Manage;
