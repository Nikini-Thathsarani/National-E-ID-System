import React from 'react';

const DocumentUpload = () => {
  return (
    <div className="h-full p-6 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/60 shadow-md text-slate-800 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-slate-800/10 rounded-xl text-xl">📄</div>
          <div>
            <h4 className="font-bold text-lg text-slate-900">Document Vault</h4>
            <p className="text-slate-600 text-xs">ලේඛන ගබඩාව / ஆவணக் களஞ்சியம்</p>
          </div>
        </div>
        <p className="text-slate-700 text-sm mt-2">
          Upload your document. ලේඛන මෙතැනින් උඩුගත කරන්න / உங்கள் ஆவணங்களை இங்கே பதிவேற்றவும்.
        </p>
      </div>

      <button className="mt-4 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-200 text-sm shadow-sm">
        Browse Files
      </button>
    </div>
  );
};

export default DocumentUpload;