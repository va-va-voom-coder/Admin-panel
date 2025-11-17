import React, { useEffect, useState } from "react";

export const AdminUserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(data);
  }, []);

  return (
    <div className="page-container">
      <h1>User Management</h1>

      <table
        border="1"
        cellPadding="12"
        style={{ width: "100%", background: "#fff" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Role</th>
            <th>Mobile</th>
            <th>Emp ID</th>
          </tr>
        </thead>

        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={6}>No users found</td>
            </tr>
          ) : (
            users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.dob}</td>
                <td>{u.role}</td>
                <td>{u.m_number}</td>
                <td>{u.emp_id}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
