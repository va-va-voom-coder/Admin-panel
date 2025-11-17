import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Style/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState([]);

  // Load users from JSON file
  React.useEffect(() => {
    fetch("/userdata.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("Error loading JSON:", err));
  }, []);

  const validate = () => {
    let err = {};

    if (!input.email.trim()) err.email = "Email is required";
    else if (!input.email.includes("@"))
      err.email = "Invalid Email (must contain @)";

    if (!input.password.trim()) err.password = "Password is required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const loginData = JSON.parse(localStorage.getItem("loginData")) || [];
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundLogin = loginData.find(
      (u) => u.email === input.email && u.password === input.password
    );

    if (!foundLogin) {
      alert("Invalid email or password");
      return;
    }

    // Find profile data
    const profile = users.find((u) => u.email === foundLogin.email);

    localStorage.setItem("currentUser", JSON.stringify(profile));

    if (profile.role.toLowerCase() === "admin" || profile.role === "CEO") {
      navigate("/Dashboard");
    } else {
      navigate("/EmployeeDashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <small className="text-danger">{errors.email}</small>
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
          <small className="text-danger">{errors.password}</small>
        </div>

        <button className="btn btn-primary w-100" type="submit">
          Login
        </button>

        <p className="mt-3 text-center">
          Don't have an account? <Link to="/Register">Register</Link>
        </p>
      </form>
    </div>
  );
};
