import React from 'react';

const QrScanner = ({ idStatus }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col justify-between gap-4 shadow-lg">
      <h4 className="text-lg font-semibold text-white tracking-wide">QR Code Scanner</h4>
      <div className="flex items-center gap-4 bg-white/5 p-3 rounded-xl mt-auto border border-white/5">
        <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-[10px] text-black font-extrabold shrink-0 shadow-md">
          [ QR ]
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Sample code</p>
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[11px] text-gray-400">Status:</span>
            <span className="px-2 py-0.5 text-[10px] bg-green-500/20 text-green-400 rounded-full font-semibold border border-green-500/30">
              {idStatus}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrScanner;