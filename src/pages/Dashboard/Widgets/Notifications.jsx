import React from 'react';

const Notifications = () => {
  return (
    <div className="h-full p-6 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/60 shadow-md text-slate-800">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-slate-800/10 rounded-xl text-xl">🔔</div>
        <div>
          <h4 className="font-bold text-lg text-slate-900">Key Notifications</h4>
          <p className="text-slate-600 text-xs">ප්‍රධාන දැනුම්දීම් / முக்கிய அறிவிப்புகள்</p>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <div className="p-3 bg-slate-800/5 rounded-xl border border-slate-200/60 text-sm">
          <b className="text-slate-900">System Update:</b> National E-ID core services are running optimally.
        </div>
        <div className="p-3 bg-slate-800/5 rounded-xl border border-slate-200/60 text-sm">
          <b className="text-slate-900">Verification:</b> Documents pending review.
        </div>
      </div>
    </div>
  );
};

export default Notifications;