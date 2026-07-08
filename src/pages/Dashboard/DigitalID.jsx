// src/pages/Dashboard/DigitalID.jsx
import React from 'react';
import '../../styles/DigitalID.css';

const DigitalID = () => {
  return (
    <div className="digital-id-page-container">
      
      {/* PAGE HEADERS */}
      <h2 className="digital-id-main-title">Digital ID</h2>
      <p className="digital-id-sub-title-trilingual">
        ඩිජිටල් හැඳුනුම්පත / டிஜிட்டல் ஐடி
      </p>

      {/* ================= VIRTUAL ID CARD ================= */}
      <div className="virtual-id-card-wrapper">
        
        {/* CARD HEADER */}
        <div className="id-card-top-identity">
          <div className="id-header-left">
            <h4>SRI LANKA E-ID</h4>
            <span>ශ්‍රී ලංකා ඩිජිටල් හැඳුනුම්පත</span>
          </div>
          <span className="id-header-right-lk">LK</span>
        </div>

        {/* CARD BODY */}
        <div className="id-card-body-core">
          
          {/* Left Column: Sourced Real Profile Image Frame */}
          <div className="id-photo-frame-stack">
            <div className="id-avatar-container-box">
              <img 
                src="/profile.jpg"  // public ෆෝල්ඩරයේ ඇති ප්‍රධාන පින්තූරය
                alt="Nurani Kaushalya Profile" 
                className="real-id-profile-image" 
                onError={(e) => {
                  // පින්තූරය නැතිනම් ඔයා දීපු නිල් පාට Default Avatar Icon එක පෙන්වයි
                  e.target.src = "/default-avatar.png";
                }}
              />
            </div>
            <span className="active-status-pill">Active</span>
          </div>

          {/* Right Column: Bio Data Fields */}
          <div className="id-bio-details-stack">
            
            <div className="bio-field-box">
              <span>Full Name</span>
              <p>Nurani Kaushalya Kulasuriya</p>
            </div>

            <div className="bio-field-box">
              <span>Designation</span>
              <p style={{ color: '#2563eb', fontWeight: '600' }}>Software Engineering Student</p>
            </div>

            {/* NIC / Passport ID Row */}
            <div className="bio-double-row-flex">
              <div className="bio-field-box" style={{ flex: 1 }}>
                <span>NIC No</span>
                <p>N/A</p>
              </div>
              <div className="bio-field-box" style={{ flex: 1 }}>
                <span>Passport ID</span>
                <p>N/A</p>
              </div>
            </div>

            {/* Fingerprint panel with Scanner Corners matching your updated icon */}
            <div className="biometric-verified-panel">
              <div className="bio-fingerprint-svg-icon">
                <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 8V5a1 1 0 0 1 1-1h3M20 8V5a1 1 0 0 0-1-1h-3M4 16v3a1 1 0 0 0 1 1h3M20 16v3a1 1 0 0 1-1 1h-3" strokeWidth="1.8"/>
                  <path d="M9.5 16.5a2.5 2.5 0 0 1 5 0M8.2 14.2a4.5 4.5 0 0 1 7.6 0M7 11.5a6.5 6.5 0 0 1 10 0M12 9.5a2 2 0 0 1 2 2v5M10.8 11.2a1 1 0 0 1 1.2-1" />
                  <path d="M12 19.5v-1" />
                </svg>
              </div>
              <div className="bio-panel-text">
                <span>Biometric Data</span>
                <p>Fingerprint Verified</p>
              </div>
            </div>

          </div>

        </div>

        {/* CARD FOOTER */}
        <div className="id-card-footer-meta">
          <span className="footer-serial-code">EID-SLLK-9482-2026X</span>
          <div className="footer-secure-tag">
            <span className="secure-tag-dot"></span>
            SECURE VIRTUAL ID
          </div>
        </div>

      </div>
      {/* =================================================== */}

    </div>
  );
};

export default DigitalID;