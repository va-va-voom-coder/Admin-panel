import React, { useEffect } from "react";
import users from "../../userdata.json";
import { useState } from "react";
import "../assets/Style/AdminUserManagement.css";
import { Link, useNavigate } from "react-router-dom";

function AdminUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/userdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log("fetch data", data);

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <h1>Admin User page</h1>

      <form className="search-bar-container">
        <input
          type="search"
          id="searchInput"
          placeholder="Search..."
          className="searchbar-comatiner"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" id="searchButton">
          Search
        </button>
      </form>

      <table className="table-views">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>DOB</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Emp ID</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.role}</td>
              <td>{item.dob}</td>
              <td>{item.email}</td>
              <td>{item.m_number}</td>
              <td>{item.emp_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-center">
        back to login <Link to="/Login">Login</Link>
      </p>
    </>
  );
}
export default AdminUser;
