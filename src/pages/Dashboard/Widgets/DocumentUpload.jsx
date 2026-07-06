import React from 'react';

const DocumentUpload = () => {
  return (
    <div className="h-full p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-white/15 rounded-xl border border-white/10 text-xl">📄</div>
          <div>
            <h4 className="font-bold text-lg text-white">Document Vault</h4>
            <p className="text-white/60 text-xs">ලේඛන ගබඩාව / ஆவணக் களஞ்சியம்</p>
          </div>
        </div>
        <p className="text-white/80 text-sm mt-2">
          Upload your document. ලේඛන මෙතැනින් උඩුගත කරන්න / உங்கள் ஆவணங்களை இங்கே பதிவேற்றவும்.
        </p>
      </div>

      <button className="mt-4 w-full py-2.5 bg-white/15 hover:bg-white/25 border border-white/20 text-white font-medium rounded-xl transition duration-200 text-sm">
        Browse Files
      </button>
    </div>
  );
};

export default DocumentUpload;