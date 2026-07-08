import React from 'react';

const WelcomeBar = ({ username }) => {
  return (
    <div className="bg-gradient-to-r from-slate-200 to-slate-300 text-slate-900 p-6 rounded-xl shadow-xl border border-white/20">
      <h3 className="text-2xl font-bold">Welcome, {username} 👋</h3>
      <div className="text-base font-medium text-slate-800 mt-1">ස්වාගතයි, {username}</div>
      <div className="text-xs text-slate-700 mt-0.5 font-semibold">தேசிய மின்னணு அடையாள අட்டை முறைமை</div>
    </div>
  );
};

export default WelcomeBar;