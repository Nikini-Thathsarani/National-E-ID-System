// src/pages/Dashboard/QRCodePage.jsx
import React, { useState, useEffect } from 'react';
import '../../styles/QRCodePage.css'; // 👈 Import external CSS from the styles folder

const QRCodePage = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [cryptoPIN, setCryptoPIN] = useState('482 915');

  // Dynamic token countdown timer
  useEffect(() => {
    if (timeLeft === 0) {
      setTimeLeft(30);
      const newPIN = Math.floor(100000 + Math.random() * 900000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      setCryptoPIN(newPIN);
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const scanHistory = [
    { id: 1, authority: 'Cinnamon Gardens Police Checkpoint', location: 'Colombo 07', time: 'Today, 08:42 AM', type: 'Visual Verification' },
    { id: 2, authority: 'Department of Immigration & Emigration', location: 'Battaramulla', time: 'Yesterday, 02:15 PM', type: 'Full Biometric Scan' },
  ];

  return (
    <div className="qr-page-container">
      
      {/* Dynamic Ambient Background Glows */}
      <div className="glow-spot-1"></div>
      <div className="glow-spot-2"></div>

      {/* HEADER SECTION */}
      <div className="qr-header-section">
        <h2 className="qr-header-title">Secure Verification QR</h2>
        <p className="qr-header-subtitle">
          අනන්‍යතා සත්‍යාපන කේතය • ජෛවමිතික ආරක්ෂිත ද්වාරය / பாதுகாப்பு சரிபார்ப்பு QR
        </p>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="qr-layout-grid">
        
        {/* LEFT COLUMN: THE PREMIUM INTERACTIVE QR CARD */}
        <div className="qr-left-column">
          <div className="cyber-glass-card">

            {/* Glowing Live Badge */}
            <div className="live-badge-container">
              <span className="live-badge">
                <span className="live-badge-dot"></span>
                DYNAMIC CRYPTO LIVE
              </span>
            </div>

            {/* QR Code Container with High Contrast */}
            <div className="qr-code-wrapper">
              {/* Corner Accents */}
              <div className="corner-accent top-left"></div>
              <div className="corner-accent top-right"></div>
              <div className="corner-accent bottom-left"></div>
              <div className="corner-accent bottom-right"></div>

              <div className="qr-svg-container">
                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ color: '#0f172a' }}>
                  <path d="M0 0h25v25H0zm5 5h15v15H5zm70 0h25v25H75zm5 5h15v15H75zM0 75h25v25H0zm5 5h15v15H5z" fill="currentColor"/>
                  <path d="M35 5h5v5h-5zm10 0h10v5H45zm15 0h5v5h-5zm-25 10h5v10h-5zm15 0h5v5h-5zm5 5h5v5h-5zm10-5h5v10h-5zm-30 15h10v5h-10zm15 0h5v5h-5zm10 0h5v10h-5zm10 5h5v5h-5zm-35 10h5v5h-5zm10 0h10v5H45zm20 0h5v5h-5zm10 0h5v5h-5zM35 60h5v5h-5zm15 5h5v10h-5zm10-5h10v5H60zm15 5h5v5h-5zm5 5h5v5h-5zM35 75h5v10h-5zm15 8h10v5H50zm25 0h5v5h-5zm10 5h5v10h-5z" fill="currentColor"/>
                </svg>
                {/* Central Identity Emblem Core */}
                <div className="qr-central-emblem">🇱🇰</div>
              </div>
            </div>

            {/* Countdown Progress Bar */}
            <div className="countdown-section">
              <div className="countdown-text">
                REGENERATING IN <span className="countdown-time">{timeLeft}s</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
              </div>
            </div>

            {/* OFFLINE AUTHENTICATION CODE */}
            <div className="crypto-pin-box">
              <span className="pin-label">OFFLINE AUTHENTICATION CODE</span>
              <span className="pin-number">{cryptoPIN}</span>
              <p className="pin-instruction">
                ස්කෑනර් නොමැති විට නිලධාරියාගේ දුරකථනයෙන් <b style={{ color: '#3b82f6' }}>*123#</b> හෝ SMS මඟින් සත්‍යාපනය කරන්න.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: INFRASTRUCTURAL FALLBACK INFO & ACCESS LOGS */}
        <div>
          
          {/* FALLBACK INFO CARD */}
          <div className="right-panel-card">
            <h3 className="panel-title">
              Alternative Verification Methods (විකල්ප සත්‍යාපන ක්‍රමවේද)
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {[
                { title: 'ක්‍රමය 1: USSD / SMS නොමිලේ සේවාව', desc: 'පොලිස් නිලධාරියා සතු ඕනෑම සාමාන්‍ය ජංගම දුරකථනයකින් සන්නිවේදන ජාල ගැටලු (No Signal) ඇති අවස්ථාවල පවා ඉහත තාවකාලික කේතය ඇතුළත් කර විස්තර ලබාගත හැක.', accent: '#3b82f6' },
                { title: 'ක්‍රමය 2: නිලධාරියාගේ පුද්ගලික ස්මාර්ට් දුරකථනය', desc: 'විශේෂිත ඩිවයිස් නොමැති වුවත්, සාමාන්‍ය කැමරාවෙන් QR එක ස්කෑන් කළ විට රජයේ නිල සුරක්ෂිත gov.lk ද්වාරය හරහා ඡායාරූපය සහ තොරතුරු සත්‍යාපනය වේ.', accent: '#06b6d4' },
                { title: 'ක්‍රමය 3: සජීවී ආරක්ෂණ හොලෝග්‍රෑම් රටාව', desc: 'තිරය ස්පර්ශ කරන විට හෝ දුරකථනය සෙලවීමේදී පසුබිමෙන් සජීවීව වෙනස් වන ඩිජිටල් හොලෝග්‍රෑම් රටාව මඟින් මෙය ව්‍යාජ ස්ක්‍රීන්ෂොට් එකක් නොවන බව තහවුරු වේ.', accent: '#10b981' }
              ].map((step, idx) => (
                <div key={idx} className="method-row">
                  <div className="method-number" style={{ backgroundColor: step.accent, boxShadow: `0 0 10px ${step.accent}33` }}>
                    {idx + 1}
                  </div>
                  <div className="method-text">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REAL-TIME IDENTITY AUDIT LOGS */}
          <div className="right-panel-card">
            <div className="panel-title-flex">
              <h3>Recent Identity Verification Logs</h3>
              <span className="audit-badge">SECURE AUDIT</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {scanHistory.map((log) => (
                <div key={log.id} className="log-row">
                  <div className="log-row-top">
                    <span className="log-authority">{log.authority}</span>
                    <span className="log-type">{log.type}</span>
                  </div>
                  <div className="log-row-bottom">
                    <span className="log-location">{log.location}</span>
                    <span className="log-time">{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default QRCodePage;