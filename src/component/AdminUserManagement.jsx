import React, { useEffect, useState } from "react";
import "../assets/Style/AdminUserManagement.css";
import { Link } from "react-router-dom";

function AdminUser() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/userdata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch userdata.json");
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

  if (loading) return <div>Loading data...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <h1>Admin User Page</h1>

      {/* Search Bar */}
      <form
        className="search-bar-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="search"
          placeholder="Search..."
          className="searchbar-comatiner"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" id="searchButton">
          Search
        </button>
      </form>

      {/* Table */}
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
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.role}</td>
                <td>{item.dob}</td>
                <td>{item.email}</td>
                <td>{item.m_number}</td>
                <td>{item.emp_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No results found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <p className="mt-3 text-center">
        Back to login <Link to="/Login">Login</Link>
      </p>
    </>
  );
}

export default AdminUser;
