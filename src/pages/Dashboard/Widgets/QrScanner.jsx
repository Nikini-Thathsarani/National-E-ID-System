import React from 'react';

const QrScanner = () => {
  return (
    <div className="h-full p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-white/15 rounded-xl border border-white/10 text-xl">🔍</div>
          <div>
            <h4 className="font-bold text-lg text-white">QR Code Scanner</h4>
            <p className="text-white/60 text-xs">QR කේත ස්කෑනරය / QR குறியீடு ஸ்கேனர்</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
        <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-slate-900 font-bold text-xs shadow-inner">
          [ QR ]
        </div>
        <div>
          <h5 className="font-semibold text-sm text-white">Sample Code Scanner</h5>
          <div className="flex items-center gap-2 mt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs text-white/60">Ready to Scan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrScanner;