import React from 'react';

const IdSummary = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg">
      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl shadow-sm">🪪</div>
      <h4 className="text-lg font-semibold text-white">Digital ID Summary</h4>
      <p className="text-xs text-gray-400 -mt-2">Digital ID summary for completetyrua</p>
      <div className="mt-2">
        <span className="block text-[11px] text-gray-400 uppercase tracking-wider">Passport ID</span>
        <span className="text-sm font-medium text-white">N/A</span>
        <span className="block text-[11px] text-gray-400 uppercase tracking-wider mt-3">Version</span>
        <span className="text-sm font-bold text-blue-400 uppercase">passport</span>
      </div>
    </div>
  );
};

export default IdSummary;