import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Login } from "./component/Login.jsx";
import { Register } from "./component/Register.jsx";
import { HomePage } from "./component/Homepage.jsx";
import AdminUser from "./component/AdminUserManagement.jsx";

function App() {
  return (
    <>
      {/* <div>
        <h1>Role Base Access System</h1>
      </div> */}
      <div className="card">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/AdminUserManagement" element={<AdminUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
