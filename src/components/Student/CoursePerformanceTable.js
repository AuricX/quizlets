const CoursePerformanceTable = ({ courses }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full border-4 border-blue-100">
        <thead>
          <tr className="border-b-4">
            <th className="py-3 px-4 text-left text-sm font-semibold">
              Course
            </th>
            <th className="py-3 px-4 text-center text-sm font-semibold">
              Quizzes Completed
            </th>
            <th className="py-3 px-4 text-center text-sm font-semibold">
              Total Quizzes
            </th>
            <th className="py-3 px-4 text-center text-sm font-semibold">
              Average Score
            </th>
            <th className="py-3 px-4 text-right text-sm font-semibold">
              Progress
            </th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {courses.map((course, index) => {
            const progressPercentage = parseFloat(course.progress);
            const averageScore = parseFloat(course.average_score);

            return (
              <tr key={course.course_id || index}>
                <td className="py-4 px-4">
                  <div className="ml-2">{course.course_name}</div>
                </td>
                <td className="py-4 px-4 text-center">
                  {course.quizzes_completed}
                </td>
                <td className="py-4 px-4 text-center">{course.total_quizzes}</td>
                <td className="py-4 px-4 text-center">
                  {averageScore.toFixed(1)}%
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end">
                    <div className="mr-3 text-sm">
                      {progressPercentage.toFixed(1)}%
                    </div>
                    <div className="w-24 bg-gray-300 rounded-full h-3">
                      <div
                        className="bg-blue-500 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CoursePerformanceTable;
