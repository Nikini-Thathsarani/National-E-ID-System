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
          width: '500px',
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

          {/* Card Body (Photo + Info) */}
          <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start' }}>
            
            {/* User Profile Photo */}
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="User Identity" 
                style={{ 
                  width: '120px', 
                  height: '140px', 
                  objectFit: 'cover', 
                  borderRadius: '14px', 
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                }} 
              />
              <div style={{ marginTop: '10px', textAlign: 'center' }}>
                <span style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: '700' }}>
                  ACTIVE
                </span>
              </div>
            </div>

            {/* Identity Details */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              <div>
                <label style={{ color: '#64748b', fontSize: '10px', display: 'block', fontWeight: '600', letterSpacing: '0.5px' }}>FULL NAME</label>
                <span style={{ fontWeight: '600', fontSize: '14px', color: '#0f172a' }}>Nurani Kaushalya Kulasuriya</span>
              </div>

              <div>
                <label style={{ color: '#64748b', fontSize: '10px', display: 'block', fontWeight: '600', letterSpacing: '0.5px' }}>DESIGNATION</label>
                <span style={{ fontWeight: '600', fontSize: '13px', color: '#2563eb' }}>Software Engineering Student</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ color: '#64748b', fontSize: '10px', display: 'block', fontWeight: '600', letterSpacing: '0.5px' }}>NIC NO</label>
                  <span style={{ fontWeight: '600', fontSize: '12px', color: '#0f172a' }}>N/A</span>
                </div>
                <div>
                  <label style={{ color: '#64748b', fontSize: '10px', display: 'block', fontWeight: '600', letterSpacing: '0.5px' }}>PASSPORT ID</label>
                  <span style={{ fontWeight: '600', fontSize: '12px', color: '#0f172a' }}>N/A</span>
                </div>
              </div>

            </div>
          </div>

          {/* Card Footer (Barcode/Microtext style) */}
          <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid rgba(0, 0, 0, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#94a3b8', fontSize: '9px', fontFamily: 'monospace', letterSpacing: '1px' }}>
              EID-SLLK-9482-2026X
            </div>
            <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '500' }}>
              SECURE VIRTUAL ID
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default DigitalID;