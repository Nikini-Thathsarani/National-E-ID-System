import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import OTPVerify from "./pages/Auth/OTPVerify";
import ForgotPassword from "./pages/Auth/ForgotPassword";

import Navbar from "./components/layout/Navbar";
import RequireAdmin from "./components/auth/RequireAdmin";
import AdminLogin from "./pages/Admin/AdminLogin";

import Dashboard from "./pages/Admin/Dashboard";
import Citizens from "./pages/Admin/Citizens";
import DigitalIDs from "./pages/Admin/DigitalIDs";
import Verification from "./pages/Admin/Verification";
import Reports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";
import Profile from "./pages/Admin/Profile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin Pages */}
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/citizens"
          element={
            <RequireAdmin>
              <Citizens />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/digital-ids"
          element={
            <RequireAdmin>
              <DigitalIDs />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/verification"
          element={
            <RequireAdmin>
              <Verification />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/reports"
          element={
            <RequireAdmin>
              <Reports />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/settings"
          element={
            <RequireAdmin>
              <Settings />
            </RequireAdmin>
          }
        />
        <Route
          path="/admin/profile"
          element={
            <RequireAdmin>
              <Profile />
            </RequireAdmin>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;