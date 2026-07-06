import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard"; // ඔයා හදපු main file එක

function App() {
  return (
    <Router>
      <Routes>
        {/* '/' path එකට යාළුවගේ Home page එක */}
        <Route path="/" element={<Home />} />
        
        {/* '/dashboard' path එකට ඔයාගේ Dashboard page එක */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;