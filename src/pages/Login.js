import { useState } from "react";
const Login = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
    type: "student",
  });

  const handlechanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login values:', values);
    // wait for database in part 2
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-400">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Quizlets Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              name="Email"
              id="Email"
              required
              onChange={(e) => handlechanges(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              name="Password"
              id="Password"
              required
              onChange={(e) => handlechanges(e)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Login as
            </label>
            <div className="flex gap-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="student"
                  required
                  onChange={(e) => handlechanges(e)}
                  defaultChecked
                  className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Student</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="type"
                  value="instructor"
                  required
                  onChange={(e) => handlechanges(e)}
                  className="w-4 h-4 text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Instructor</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-6"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
