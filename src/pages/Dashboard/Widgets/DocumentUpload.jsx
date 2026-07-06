import React from 'react';

const DocumentUpload = () => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-3 shadow-lg justify-between">
      <div>
        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-xl shadow-sm mb-3">📄</div>
        <h4 className="text-lg font-semibold text-white">Document</h4>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed">
          Upload your document எதுමங்கள் அர்தිවුலாம்.
        </p>
      </div>
    </div>
  );
};

export default DocumentUpload;