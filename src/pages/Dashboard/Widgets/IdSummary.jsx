// src/pages/Dashboard/Widgets/IdSummary.jsx
import React from 'react';
import '../../../styles/IdSummary.css';

const IdSummary = () => {
  return (
    <div className="id-summary-card">
      
      {/* Card Header */}
      <div className="id-summary-header">
        <h4 className="id-summary-title">
          E-ID Summary <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>/ සාරාංශය / சுருக்கம்</span>
        </h4>
        <div className="id-status-badge">
          <span className="id-status-dot"></span>
          ACTIVE / සක්‍රීයයි / செயலில் ඇත
        </div>
      </div>

      {/* Profile/Identity Brief Details */}
      <div className="id-details-container">
        
        {/* Row 1: Name */}
        <div className="id-info-row">
          <div>
            <span className="id-info-label" style={{ display: 'block' }}>Full Name</span>
            <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '600' }}>සම්පූර්ණ නම / සම්පූර්ණ නම</span>
          </div>
          <span className="id-info-value">N. K. Kulasuriya</span>
        </div>
        
        {/* Row 2: NIC */}
        <div className="id-info-row">
          <div>
            <span className="id-info-label" style={{ display: 'block' }}>NIC Number</span>
            <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '600' }}>ජාතික හැඳුනුම්පත් අංකය / அடையாள அட்டை எண்</span>
          </div>
          <span className="id-info-value id-nic-highlight">200214503920</span>
        </div>
        
        {/* Row 3: Status */}
        <div className="id-info-row">
          <div>
            <span className="id-info-label" style={{ display: 'block' }}>Document Status</span>
            <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '600' }}>ලේඛන තත්ත්වය / ஆவண நிலை</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="id-info-value" style={{ color: '#2563eb', display: 'block' }}>3 Verified</span>
            <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>3ක් සත්‍යාපිතයි / 3 சரிபார்க்கப்பட்டது</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default IdSummary;