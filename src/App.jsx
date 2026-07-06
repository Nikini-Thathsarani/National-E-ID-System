import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Dashboard from "./pages/Admin/Dashboard";
import Citizens from "./pages/Admin/Citizens";
import DigitalIDs from "./pages/Admin/DigitalIDs";
import Verification from "./pages/Admin/Verification";
import Reports from "./pages/Admin/Reports";
import Settings from "./pages/Admin/Settings";
import Profile from "./pages/Admin/Profile";

function App() {
  return (
    <Routes>

      {/* Public Pages */}
      <Route path="/" element={<Home />} />

      {/* Admin Pages */}
      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/citizens" element={<Citizens />} />
      <Route path="/admin/digital-ids" element={<DigitalIDs />} />
      <Route path="/admin/verification" element={<Verification />} />
      <Route path="/admin/reports" element={<Reports />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;