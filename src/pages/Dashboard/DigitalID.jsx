// src/pages/Dashboard/DigitalID.jsx
import React from 'react';

const DigitalID = () => {
  return (
    <div style={{ 
      padding: '30px', 
      color: '#1e293b', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, sans-serif' 
    }}>
      
      {/* 1. Page Title Section */}
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', margin: 0, color: '#0f172a', letterSpacing: '0.5px' }}>
          Digital ID
        </h2>
        <p style={{ color: '#475569', fontSize: '11px', margin: '4px 0 0 0', fontWeight: '500' }}>
          ඩිජිටල් හැඳුනුම්පත / டிஜிட்டல் ஐடி
        </p>
      </div>

      {/* 2. Main Identity Card Container (Center Focused) */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        
        {/* The Premium Frosted Glass ID Card */}
        <div style={{ 
          width: '520px',
          background: 'rgba(255, 255, 255, 0.45)', 
          backdropFilter: 'blur(15px)',
          WebkitBackdropFilter: 'blur(15px)',
          borderRadius: '24px', 
          padding: '30px', 
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.06)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Card Decorative Top Bar */}
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            height: '6px', 
            background: 'linear-gradient(90deg, #2563eb, #3b82f6)' 
          }}></div>

          {/* Card Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', borderBottom: '1px solid rgba(0, 0, 0, 0.05)', paddingBottom: '15px' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#0f172a', letterSpacing: '0.5px' }}>SRI LANKA E-ID</h4>
              <p style={{ margin: '2px 0 0 0', fontSize: '9px', color: '#475569', fontWeight: '600' }}>ශ්‍රී ලංකා ඩිජිටල් අනන්‍යතාවය</p>
            </div>
            {/* National Emblem Placeholder / Icon */}
            <div style={{ fontSize: '24px', opacity: 0.85 }}>🇱🇰</div>
          </div>

          {/* Card Body (Photo + Info + Fingerprint) */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
            
            {/* Left Side: User Profile Photo */}
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="User Identity" 
                style={{ 
                  width: '120px', 
                  height: '145px', 
                  objectFit: 'cover', 
                  borderRadius: '14px', 
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }} 
              />
              <div style={{ marginTop: '12px', textAlign: 'center' }}>
                <span style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: '700', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Right Side: Identity Details & Biometrics */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              <div>
                <label style={{ color: '#64748b', fontSize: '9px', display: 'block', fontWeight: '700', letterSpacing: '0.5px' }}>FULL NAME</label>
                <span style={{ fontWeight: '600', fontSize: '14px', color: '#0f172a' }}>Nurani Kaushalya Kulasuriya</span>
              </div>

              <div>
                <label style={{ color: '#64748b', fontSize: '9px', display: 'block', fontWeight: '700', letterSpacing: '0.5px' }}>DESIGNATION</label>
                <span style={{ fontWeight: '600', fontSize: '13px', color: '#2563eb' }}>Software Engineering Student</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ color: '#64748b', fontSize: '9px', display: 'block', fontWeight: '700', letterSpacing: '0.5px' }}>NIC NO</label>
                  <span style={{ fontWeight: '600', fontSize: '12px', color: '#0f172a' }}>N/A</span>
                </div>
                <div>
                  <label style={{ color: '#64748b', fontSize: '9px', display: 'block', fontWeight: '700', letterSpacing: '0.5px' }}>PASSPORT ID</label>
                  <span style={{ fontWeight: '600', fontSize: '12px', color: '#0f172a' }}>N/A</span>
                </div>
              </div>

              {/* 🧬 🔍 මෙන්න ඔයා ඉල්ලපු Scanner Corners තියෙන Fingerprint Icon එක */}
              <div style={{ 
                marginTop: '8px', 
                padding: '12px', 
                background: 'rgba(37, 99, 235, 0.06)', 
                borderRadius: '14px', 
                border: '1px solid rgba(37, 99, 235, 0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                
                {/* Custom SVG Fingerprint with Corners */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: '#2563eb' }}>
                  {/* Top-Left Corner */}
                  <path d="M4 7V4H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Top-Right Corner */}
                  <path d="M17 4H20V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Bottom-Left Corner */}
                  <path d="M4 17V20H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  {/* Bottom-Right Corner */}
                  <path d="M17 20H20V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Fingerprint Lines */}
                  <path d="M9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14M7 14C7 11.2386 9.23858 9 12 9C14.7614 9 17 11.2386 17 14M5 14C5 10.134 8.13401 7 12 7C15.866 7 19 10.134 19 14M12 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div>
                  <label style={{ color: '#2563eb', fontSize: '9px', display: 'block', fontWeight: '700', letterSpacing: '0.5px' }}>BIOMETRIC DATA</label>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: '#1e293b' }}>Fingerprint Verified</span>
                </div>
              </div>

            </div>
          </div>

          {/* Card Footer */}
          <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid rgba(0, 0, 0, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#94a3b8', fontSize: '9px', fontFamily: 'monospace', letterSpacing: '1px' }}>
              EID-SLLK-9482-2026X
            </div>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
              SECURE VIRTUAL ID
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DigitalID;