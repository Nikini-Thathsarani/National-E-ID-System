import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Layout එක තියෙන්නේ components/layout/ ඇතුලේ නිසා path එක මෙන්න මෙහෙමයි:
import MainLayout from './components/layout/MainLayout';

// 2. ඔයාගේ හැම පිටුවක්ම තියෙන්නේ pages/Dashboard/ ඇතුලේ නිසා ඒවා මෙහෙම import කරගන්න:
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Dashboard/Profile';
import DigitalID from './pages/Dashboard/DigitalID';
import Documents from './pages/Dashboard/Documents';
import QRCodePage from './pages/Dashboard/QRCodePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout එක ඇතුලේ තමයි ඔක්කොම pages run වෙන්නේ */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} /> 
          <Route path="profile" element={<Profile />} />
          <Route path="digital-id" element={<DigitalID />} />
          <Route path="documents" element={<Documents />} />
          <Route path="qr-code" element={<QRCodePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;