// src/pages/Dashboard/Dashboard.jsx
import React from 'react';

// 💡 මෙන්න මේ Imports ටික හරියටම තියෙන්න ඕනේ!
import HeroCard from './HeroCard';
import WelcomeBar from './WelcomeBar';
import IdSummary from './Widgets/IdSummary';
import Notifications from './Widgets/Notifications';
import DocumentUpload from './Widgets/DocumentUpload';
import QrScanner from './Widgets/QrScanner';

const Dashboard = () => {
  return (
    <div className="w-full text-slate-900 p-2">
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1600px] mx-auto w-full items-start">
        
        {/* COLUMN 1 */}
        <div className="flex flex-col gap-6 h-full">
          <HeroCard />
          <WelcomeBar />
        </div>
        
        {/* COLUMN 2 */}
        <div className="flex flex-col gap-6 h-full">
          <IdSummary />
          <DocumentUpload />
        </div>
        
        {/* COLUMN 3 */}
        <div className="flex flex-col gap-6 h-full">
          <Notifications />
          <QrScanner />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;