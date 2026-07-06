import React from 'react';

const Notifications = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:row-span-2 flex flex-col gap-4 shadow-lg">
      <h4 className="text-lg font-semibold text-white tracking-wide">Key Notifications</h4>
      <div className="flex flex-col gap-3 overflow-y-auto">
        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-lg text-xs border border-white/5">
          <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 animate-pulse"></span>
          <div>
            <p className="font-semibold text-white">Notifications</p>
            <p className="text-gray-400 text-[11px] mt-0.5">තොරතුරු ලබාගැනීම...</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-lg text-xs border border-white/5">
          <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></span>
          <div>
            <p className="font-semibold text-white">Notifications</p>
            <p className="text-gray-400 text-[11px] mt-0.5">அதிசிய பார்கள்...</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-lg text-xs border border-white/5">
          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
          <div>
            <p className="font-semibold text-white">Notifications</p>
            <p className="text-gray-400 text-[11px] mt-0.5">Recent unread to...</p>
          </div>
        </div>
        <div className="flex items-center gap-3 p-2.5 bg-white/5 rounded-lg text-xs border border-white/5">
          <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0"></span>
          <div>
            <p className="font-semibold text-white">Notifications are...</p>
            <p className="text-gray-400 text-[11px] mt-0.5">2 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;