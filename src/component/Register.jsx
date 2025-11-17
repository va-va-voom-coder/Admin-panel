import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/Style/Register.css";

export const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const passwordRules = {
    uppercase: /[A-Z]/.test(input.password),
    lowercase: /[a-z]/.test(input.password),
    number: /[0-9]/.test(input.password),
    special: /[@$!%*?&]/.test(input.password),
    length: input.password.length >= 8,
  };

  const validate = () => {
    let err = {};
    if (!input.name.trim()) err.name = "Name required";
    if (!input.email.trim()) err.email = "Email required";
    if (!input.password.trim()) err.password = "Password required";
    if (!input.confirmPassword.trim()) err.confirmPassword = "Confirm password";
    if (input.password !== input.confirmPassword)
      err.confirmPassword = "Password mismatch";
    if (!input.dob.trim()) err.dob = "DOB required";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful");
      navigate("/Login");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
          />
          <small className="text-danger">{errors.name}</small>
        </div>

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
          <div className="mt-2">
            <p
              className={
                passwordRules.uppercase ? "text-success" : "text-danger"
              }
            >
              • Uppercase
            </p>
            <p
              className={
                passwordRules.lowercase ? "text-success" : "text-danger"
              }
            >
              • Lowercase
            </p>
            <p
              className={passwordRules.number ? "text-success" : "text-danger"}
            >
              • Number
            </p>
            <p
              className={passwordRules.special ? "text-success" : "text-danger"}
            >
              • Special Character
            </p>
            <p
              className={passwordRules.length ? "text-success" : "text-danger"}
            >
              • Min 8 Characters
            </p>
          </div>
          <small className="text-danger">{errors.password}</small>
        </div>

        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            className="form-control"
            type="password"
            value={input.confirmPassword}
            onChange={(e) =>
              setInput({ ...input, confirmPassword: e.target.value })
            }
          />
          <small className="text-danger">{errors.confirmPassword}</small>
        </div>

        <div className="mb-3">
          <label>Date of Birth</label>
          <input
            className="form-control"
            type="date"
            value={input.dob}
            onChange={(e) => setInput({ ...input, dob: e.target.value })}
          />
          <small className="text-danger">{errors.dob}</small>
        </div>

        <button className="btn btn-success w-100" type="submit">
          Register
        </button>

        <p className="mt-3 text-center">
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </div>
  );
};
