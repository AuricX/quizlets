import { useState } from "react";
const Login = () => {
  const [values, setValues] = useState({
    Email: "",
    Password: "",
    type: "",
  });

  const handlechanges = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] });
  };

  return (
    <div className="container">
      <form>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          name="Email"
          required
          onChange={(e) => handlechanges(e)}
        />

        <label htmlFor="Password">Password</label>
        <input
          type="password"
          name="Password"
          required
          onChange={(e) => handlechanges(e)}
        />

        <input
          type="radio"
          name="type"
          required
          onChange={(e) => handlechanges(e)}
        />
        <input
          type="radio"
          name="type"
          required
          onChange={(e) => handlechanges(e)}
        />
      </form>
    </div>
  );
};
export default Login;
