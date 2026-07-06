import React from 'react';

const QrScanner = () => {
  return (
    <div className="h-full p-6 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/60 shadow-md text-slate-800 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-slate-800/10 rounded-xl text-xl">🔍</div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">QR Code Scanner</h4>
            <p className="text-slate-600 text-xs">QR කේත ස්කෑනරය / QR குறியீடு ஸ்கேனர்</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-slate-800/5 p-4 rounded-xl border border-slate-200/50">
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-sm border border-slate-200 shadow-sm">
          [ QR ]
        </div>
        <div>
          <h5 className="font-semibold text-sm text-slate-900">Sample Code Scanner</h5>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-slate-600 font-medium">Ready to Scan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrScanner;