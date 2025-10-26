const CoursePerformanceTable = ({ courses }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <table className="min-w-full border-4 border-blue-100">
        <thead>
          <tr className="border-b-4">
            <th className="py-3 px-4 text-left text-sm font-semibold">Course</th>
            <th className="py-3 px-4 text-center text-sm font-semibold">Quizzes Completed</th>
            <th className="py-3 px-4 text-center text-sm font-semibold">Total Quizzes</th>
            <th className="py-3 px-4 text-center text-sm font-semibold">Average Score</th>
            <th className="py-3 px-4 text-right text-sm font-semibold">Progress</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {courses.map((course, index) => {
            const progressPercentage = (course.quizzesCompleted / course.totalQuizzes) * 100;
            
            return (
              <tr key={course.id || index}>
                <td className="py-4 px-4">
                  <div className="ml-2">{course.name}</div>
                </td>
                <td className="py-4 px-4 text-center">{course.quizzesCompleted}</td>
                <td className="py-4 px-4 text-center">{course.totalQuizzes}</td>
                <td className="py-4 px-4 text-center">{course.averageScore}%</td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end">
                    <div className="w-36 bg-gray-800 rounded-full h-3">
                      <div 
                        className="bg-blue-500 h-3 rounded-full transition-all duration-300" 
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <div className="ml-3 text-sm">{progressPercentage.toFixed(1)}%</div>
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
