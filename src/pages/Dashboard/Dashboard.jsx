// src/pages/Dashboard/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import HeroCard from './HeroCard';
import WelcomeBar from './WelcomeBar';
import IdSummary from './Widgets/IdSummary';
import Notifications from './Widgets/Notifications';
import DocumentUpload from './Widgets/DocumentUpload';
import QrScanner from './Widgets/QrScanner';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-slate-950 text-white">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Grid Wrapper */}
      <main className="flex-1 p-6 lg:p-10 grid grid-cols-1 xl:grid-cols-2 gap-8 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col gap-6">
          <HeroCard />
          <WelcomeBar />
        </div>
        
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