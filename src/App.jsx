import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import OTPVerify from "./pages/Auth/OTPVerify"; // OTP verification page එක import කරන්න
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Navbar from "./components/layout/Navbar"; 
import RequireAdmin from "./components/auth/RequireAdmin";
import AdminLogin from "./pages/Admin/AdminLogin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;