import React from "react";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user || (user.role !== "admin" && user.role !== "CEO"))
    return <h2>Access Denied ❌</h2>;

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/Login");
  };

  return (
    <div className="page-container">
      <h1>Admin Dashboard</h1>
      <p>
        Welcome, <strong>{user.name}</strong>
      </p>

      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>

      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => navigate("/AdminUserManagement")}
      >
        Manage Users
      </button>
    </div>
  );
};
