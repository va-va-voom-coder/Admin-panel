import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Style/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let err = {};
    if (!input.email.trim()) err.email = "Email is required";
    if (!input.password.trim()) err.password = "Password is required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login successful");
      navigate("/AdminUserManagement");
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
