import React from 'react';

const IdSummary = () => {
  return (
    <div className="h-full p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-white/15 rounded-xl border border-white/10 text-xl">🪪</div>
          <div>
            <h4 className="font-bold text-lg text-white">Digital ID Summary</h4>
            <p className="text-white/60 text-xs">ඩිජිටල් හැඳුනුම්පත් සාරාංශය / டிஜிட்டல் ஐடி சுருக்கம்</p>
          </div>
        </div>
        <p className="text-white/80 text-sm mt-2">Digital ID summary for complete tyrua</p>
      </div>

      <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
        <div>
          <span className="text-white/50 text-[11px] block uppercase tracking-wider">Passport ID</span>
          <span className="font-semibold text-white">N/A</span>
        </div>
        <div>
          <span className="text-white/50 text-[11px] block uppercase tracking-wider">Version</span>
          <span className="font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded text-xs inline-block mt-0.5 border border-blue-500/20">PASSPORT</span>
        </div>
      </div>
    </div>
  );
};

export default IdSummary;