import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import OTPVerify from "./pages/Auth/OTPVerify";
import ForgotPassword from "./pages/Auth/ForgotPassword";

import Navbar from "./components/layout/Navbar";
import RequireAdmin from "./components/auth/RequireAdmin";
import AdminLogin from "./pages/Admin/AdminLogin";

import AdminDashboard from "./pages/Admin/Dashboard";
import Citizens from "./pages/Admin/Citizens";
import DigitalIDs from "./pages/Admin/DigitalIDs";
import Verification from "./pages/Admin/Verification";
import Reports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";
import AdminProfile from "./pages/Admin/Profile";

import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import DigitalID from "./pages/Dashboard/DigitalID";
import Documents from "./pages/Dashboard/Documents";
import QRCodePage from "./pages/Dashboard/QRCodePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Citizen Dashboard */}
        <Route path="/dashboard" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="digital-id" element={<DigitalID />} />
          <Route path="documents" element={<Documents />} />
          <Route path="qr-code" element={<QRCodePage />} />
        </Route>

        {/* Admin Pages */}
        <Route
          path="/admin"
          element={
            <RequireAdmin>
              <AdminDashboard />
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
              <AdminProfile />
            </RequireAdmin>
          }
        />
      </Routes>
    </>
  );
}

export default App;