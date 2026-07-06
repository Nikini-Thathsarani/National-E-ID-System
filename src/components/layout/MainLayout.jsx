import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../pages/Dashboard/Sidebar';

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', width: '100vw', overflowX: 'hidden' }}>
      {/* 🖤 Sidebar එක දිගටම තද පාටට ලස්සනට තියෙනවා */}
      <Sidebar />
      
      {/* 🤍 දකුණු පැත්තේ මුළු Background එකම Light Office Design එකකට මාරු කළා */}
      <div style={{ 
        flex: 1, 
        padding: '20px', 
        overflowY: 'auto',
        backgroundImage: 'linear-gradient(rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.95)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;