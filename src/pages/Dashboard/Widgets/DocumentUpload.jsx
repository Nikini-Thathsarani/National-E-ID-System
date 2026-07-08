// src/pages/Dashboard/Widgets/DocumentUpload.jsx
import React from 'react';
import '../../../styles/DocumentUpload.css';

const DocumentUpload = () => {
  return (
    <div className="upload-widget-card">
      
      {/* Header Info */}
      <div className="upload-header-flex">
        <h4 className="upload-widget-title">
          Document Request <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 'normal' }}>/ ලේඛන ඉල්ලීම / ஆவணக் கோரிக்கை</span>
        </h4>
        <span className="upload-badge">SECURE PORTAL</span>
      </div>

      {/* Interactive Drop Zone */}
      <div className="drop-zone-area">
        <div className="upload-icon-container">📤</div>
        
        {/* Multilingual Main Text */}
        <p className="upload-main-text" style={{ fontSize: '13px', lineHeight: '1.6' }}>
          Upload Third-Party Document <br />
          <span style={{ fontSize: '12px', color: '#2563eb' }}>බාහිර පාර්ශවීය ලේඛන උඩුගත කරන්න</span> <br />
          <span style={{ fontSize: '11.5px', color: '#475569', fontWeight: '500' }}>மூன்றாம் පාර්ශවීය ஆவணத்தைப் பதிவேற்றவும்</span>
        </p>
        
        {/* Multilingual Sub Text */}
        <p className="upload-sub-text" style={{ marginTop: '8px', lineHeight: '1.4' }}>
          PDF, JPEG or PNG up to 10MB <br />
          මෙගාබයිට් 10 දක්වා PDF, JPEG හෝ PNG <br />
          PDF, JPEG அல்லது PNG 10MB வரை
        </p>
      </div>

    </div>
  );
};

export default DocumentUpload;