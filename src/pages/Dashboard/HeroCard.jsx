import React from 'react';
// 1. පලවෙනි පියවර විදියට logo.jpeg එක නිවැරදි path එකෙන් import කරගන්නවා
import logoImg from '../../assets/logos/logo.jpeg';

const HeroCard = () => {
  return (
    <div className="bg-gradient-to-br from-[#1e3a5f] to-[#0d1e36] border border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center min-h-[340px] shadow-2xl relative overflow-hidden">
      
      {/* 2. [ FINGERPRINT ] text එක වෙනුවට <img> tag එකක් දාලා අපේ logo එක මෙතනට දෙනවා */}
      <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center mb-6 shadow-lg border border-white/10">
        <img 
          src={logoImg} 
          alt="National e-ID System Logo" 
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold tracking-widest text-slate-200 uppercase">National</h2>
      <p className="text-lg text-blue-400 tracking-wider mt-1 font-semibold">e-ID System</p>
    </div>
  );
};

export default HeroCard;