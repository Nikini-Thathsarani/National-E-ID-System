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
    <div className="w-full text-white p-2">
      {/* 📊 Main 3-Column Grid Structure */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1600px] mx-auto w-full items-start">
        
        {/* ---- COLUMN 1: Welcome & Identity ---- */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex-1 min-h-[280px]">
            <HeroCard />
          </div>
          <div className="min-h-[160px]">
            <WelcomeBar />
          </div>
        </div>
        
        {/* ---- COLUMN 2: Summaries & Verification ---- */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex-1 min-h-[230px] bg-slate-900/40 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
            <IdSummary />
          </div>
          <div className="flex-1 min-h-[210px] bg-slate-900/40 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
            <DocumentUpload />
          </div>
        </div>
        
        {/* ---- COLUMN 3: Updates & Actions ---- */}
        <div className="flex flex-col gap-6 h-full">
          <div className="flex-1 min-h-[260px] bg-slate-900/40 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
            <Notifications />
          </div>
          <div className="flex-1 min-h-[180px] bg-slate-900/40 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
            <QrScanner />
          </div>
        </div>

      </main>
    </div>
  );
};

export default Dashboard;