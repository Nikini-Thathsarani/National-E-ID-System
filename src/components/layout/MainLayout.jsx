import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from "../../pages/Dashboard/Sidebar"; // ඔයාගේ Sidebar එක තියෙන තැනට path එක

const MainLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#030614' }}>
      {/* වම් පැත්තේ Sidebar එක හැම පිටුවකම ස්ථිරව පවතිනවා */}
      <Sidebar />
      
      {/* දකුණු පැත්තේ පිටු මාරු වන කොටස */}
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;