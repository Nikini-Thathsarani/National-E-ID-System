import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import OTPVerify from "./pages/Auth/OTPVerify"; // OTP verification page එක import කරන්න
import ForgotPassword from "./pages/Auth/ForgotPassword";
// පහත line එක අනිවාර්යයෙන්ම එකතු කරන්න:
import Navbar from "./components/layout/Navbar"; 

function App() {
  return (
    <Router>
      <Navbar /> {/* මෙතන Navbar එක පාවිච්චි කරනවා නම් උඩ import එක අනිවාර්යයි */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp-verify" element={<OTPVerify />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;