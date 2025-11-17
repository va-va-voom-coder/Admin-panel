import React from "react";
import { useNavigate } from "react-router-dom";

export const EmployeeDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) return <h2>Please Login</h2>;

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login");
  };

  return (
    <div className="page-container">
      <h1>Employee Dashboard</h1>
      <p>
        Hello, <strong>{user.name}</strong>
      </p>
      <p>Your Role: {user.role}</p>

      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
