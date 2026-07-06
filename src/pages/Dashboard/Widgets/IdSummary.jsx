import React from 'react';

const IdSummary = () => {
  return (
    <div className="h-full p-6 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/60 shadow-md text-slate-800 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-slate-800/10 rounded-xl text-xl">🪪</div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">Digital ID Summary</h4>
            <p className="text-slate-600 text-xs">ඩිජිටල් හැඳුනුම්පත් සාරාංශය / டிஜிட்டல் ஐடி சுருக்கம்</p>
          </div>
        </div>
        <p className="text-slate-700 text-sm mt-2">Digital ID summary for complete tyrua</p>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200 grid grid-cols-2 gap-4">
        <div>
          <span className="text-slate-500 text-[11px] block uppercase tracking-wider font-semibold">Passport ID</span>
          <span className="font-bold text-slate-900">N/A</span>
        </div>
        <div>
          <span className="text-slate-500 text-[11px] block uppercase tracking-wider font-semibold">Version</span>
          <span className="font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded text-xs inline-block mt-0.5 border border-blue-200">PASSPORT</span>
        </div>
      </div>
    </div>
  );
};

export default IdSummary;