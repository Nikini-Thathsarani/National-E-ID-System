import React from 'react';

const HeroCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0d1e36] border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center min-h-[340px] shadow-2xl relative overflow-hidden">
      {/* Fingerprint Vector/Logo එක සඳහා Placeholder එකක් */}
      <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600/30 to-transparent border-2 border-dashed border-white/20 flex items-center justify-center mb-6 shadow-inner">
        <span className="text-[10px] text-blue-300 uppercase tracking-widest font-bold">[ Fingerprint ]</span>
      </div>
      <h2 className="text-3xl font-bold tracking-widest text-slate-200 uppercase">National</h2>
      <p className="text-lg text-blue-400 tracking-wider mt-1 font-semibold">e-ID System</p>
    </div>
  );
};

export default HeroCard;