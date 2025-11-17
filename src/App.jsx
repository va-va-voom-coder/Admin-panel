import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./component/Login";
import { Register } from "./component/Register";
import { Dashboard } from "./component/Dashboard";
import { EmployeeDashboard } from "./component/EmployeeDashboard";
import { AdminUserManagement } from "./component/AdminUserManagement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
        <Route path="/AdminUserManagement" element={<AdminUserManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
