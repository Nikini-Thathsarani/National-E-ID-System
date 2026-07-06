// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import HeroCard from './HeroCard';
import WelcomeBar from './WelcomeBar';
import IdSummary from './Widgets/IdSummary';
import Notifications from './Widgets/Notifications';
import DocumentUpload from './Widgets/DocumentUpload';
import QrScanner from './Widgets/QrScanner';

const Dashboard = () => {
  return (
    // 💡 flex-row සහ Sidebar එක අයින් කරලා content එක විතරක් ගත්තා
    <div className="w-full text-white">
      {/* Main Grid Wrapper */}
      <main className="grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[1400px] mx-auto w-full">
        
        {/* Left Column Widgets */}
        <div className="flex flex-col gap-6">
          <HeroCard />
          <WelcomeBar />
        </div>
        
        {/* Right Column Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <IdSummary />
          <Notifications />
          <DocumentUpload />
          <QrScanner />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;