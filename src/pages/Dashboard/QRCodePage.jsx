// src/pages/Dashboard/QRCodePage.jsx
import React, { useState, useEffect } from 'react';

const QRCodePage = () => {
  const [timeLeft, setTimeLeft] = useState(30);
  const [cryptoPIN, setCryptoPIN] = useState('482 915');

  // Real-time countdown simulation for Secure Dynamic QR
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
    <div style={{ 
      padding: '40px', 
      color: '#f8fafc', // Text changed to light for the premium deep tech look
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'radial-gradient(circle at 80% 20%, #1e1b4b 0%, #0f172a 100%)', // Deep Navy & Slate core premium background
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Dynamic Background Glows to enhance Glassmorphism */}
      <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.08)', filter: 'blur(80px)', top: '10%', left: '10%', pointerEvents: 'none' }}></div>
      <div style={{ position: 'absolute', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.05)', filter: 'blur(100px)', bottom: '5%', right: '5%', pointerEvents: 'none' }}></div>

      {/* HEADER SECTION */}
      <div style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontSize: '34px', fontWeight: '800', margin: 0, color: '#ffffff', letterSpacing: '-0.5px' }}>
          Secure Verification QR
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '13px', margin: '6px 0 0 0', fontWeight: '600', letterSpacing: '0.3px' }}>
          අනන්‍යතා සත්‍යාපන කේතය • ජෛවමිතික ආරක්ෂිත ද්වාරය / பாதுகாப்பு சரிபார்ப்பு QR
        </p>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '45px', alignItems: 'start', position: 'relative', zIndex: 1 }}>
        
        {/* LEFT COLUMN: THE HIGHER-ADVANCED INTEGRATED QR CARD */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Cyber Frosted Glass QR Card */}
          <div style={{
            width: '100%',
            maxWidth: '390px',
            background: 'rgba(30, 41, 59, 0.45)', // Darker translucent glass for high contrast
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)',
            borderRadius: '32px',
            padding: '35px 25px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>

            {/* Glowing Live Badge */}
            <div style={{ marginBottom: '25px' }}>
              <span style={{
                fontSize: '10px',
                fontWeight: '800',
                letterSpacing: '1px',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                color: '#34d399', // Radiant Green
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.1)'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#34d399', boxShadow: '0 0 10px #34d399' }}></span>
                DYNAMIC CRYPTO LIVE
              </span>
            </div>

            {/* QR Code Container with High Contrast & Cyber Glow Borders */}
            <div style={{
              position: 'relative',
              background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
              padding: '22px',
              borderRadius: '24px',
              display: 'inline-block',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.8)'
            }}>
              
              {/* Dynamic Scanner Corner Accents */}
              <div style={{ position: 'absolute', top: '10px', left: '10px', width: '12px', height: '12px', borderTop: '2px solid #3b82f6', borderLeft: '2px solid #3b82f6' }}></div>
              <div style={{ position: 'absolute', top: '10px', right: '10px', width: '12px', height: '12px', borderTop: '2px solid #3b82f6', borderRight: '2px solid #3b82f6' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '12px', height: '12px', borderBottom: '2px solid #3b82f6', borderLeft: '2px solid #3b82f6' }}></div>
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '12px', height: '12px', borderBottom: '2px solid #3b82f6', borderRight: '2px solid #3b82f6' }}></div>

              <div style={{ position: 'relative', width: '190px', height: '190px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ color: '#0f172a' }}>
                  <path d="M0 0h25v25H0zm5 5h15v15H5zm70 0h25v25H75zm5 5h15v15H75zM0 75h25v25H0zm5 5h15v15H5z" fill="currentColor"/>
                  <path d="M35 5h5v5h-5zm10 0h10v5H45zm15 0h5v5h-5zm-25 10h5v10h-5zm15 0h5v5h-5zm5 5h5v5h-5zm10-5h5v10h-5zm-30 15h10v5h-10zm15 0h5v5h-5zm10 0h5v10h-5zm10 5h5v5h-5zm-35 10h5v5h-5zm10 0h10v5H45zm20 0h5v5h-5zm10 0h5v5h-5zM35 60h5v5h-5zm15 5h5v10h-5zm10-5h10v5H60zm15 5h5v5h-5zm5 5h5v5h-5zM35 75h5v10h-5zm15 8h10v5H50zm25 0h5v5h-5zm10 5h5v10h-5z" fill="currentColor"/>
                </svg>
                {/* Gold/Blue Sri Lankan Central Emblem Core */}
                <div style={{
                  position: 'absolute',
                  width: '38px',
                  height: '38px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '18px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  border: '2px solid #3b82f6'
                }}>
                  🇱🇰
                </div>
              </div>
            </div>

            {/* Countdown Progress Bar (Electric Cyan Color) */}
            <div style={{ marginTop: '25px' }}>
              <div style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', marginBottom: '8px', letterSpacing: '0.5px' }}>
                REGENERATING IN <span style={{ color: '#06b6d4', fontFamily: 'monospace', fontSize: '14px', fontWeight: '800' }}>{timeLeft}s</span>
              </div>
              <div style={{ width: '100%', height: '5px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${(timeLeft / 30) * 100}%`, height: '100%', background: 'linear-gradient(90deg, #3b82f6, #06b6d4)', transition: 'width 1s linear' }}></div>
              </div>
            </div>

            {/* HIGH-ADVANCED CRYPTO-PIN BOX (Electric Theme) */}
            <div style={{
              marginTop: '30px',
              padding: '16px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(6, 182, 212, 0.05) 100%)',
              borderRadius: '20px',
              border: '1px solid rgba(6, 182, 212, 0.15)',
              boxShadow: 'inset 0 1px 10px rgba(6, 182, 212, 0.05)'
            }}>
              <span style={{ fontSize: '11px', fontWeight: '800', color: '#06b6d4', display: 'block', letterSpacing: '0.5px' }}>OFFLINE AUTHENTICATION CODE</span>
              <span style={{ fontSize: '30px', fontWeight: '900', color: '#ffffff', letterSpacing: '3px', display: 'block', margin: '6px 0', textShadow: '0 0 10px rgba(255,255,255,0.1)' }}>
                {cryptoPIN}
              </span>
              <p style={{ margin: 0, fontSize: '11px', color: '#94a3b8', fontWeight: '500', lineHeight: '1.5' }}>
                ස්කෑනර් නොමැති විට නිලධාරියාගේ දුරකථනයෙන් <b style={{ color: '#3b82f6' }}>*123#</b> හෝ SMS මඟින් සත්‍යාපනය කරන්න.
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN: INFRASTRUCTURAL FALLBACK INFO & ACCESS LOGS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          
          {/* FALLBACK INFO CARD */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.35)',
            backdropFilter: 'blur(30px)',
            borderRadius: '28px',
            padding: '28px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ margin: '0 0 20px 0', fontSize: '17px', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.3px' }}>
              Alternative Verification Methods (විකල්ප සත්‍යාපන ක්‍රමවේද)
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { title: 'ක්‍රමය 1: USSD / SMS නොමිලේ සේවාව', desc: 'පොලිස් නිලධාරියා සතු ඕනෑම සාමාන්‍ය ජංගම දුරකථනයකින් සන්නිවේදන ජාල ගැටලු (No Signal) ඇති අවස්ථාවල පවා ඉහත තාවකාලික කේතය ඇතුළත් කර විස්තර ලබාගත හැක.', accent: '#3b82f6' },
                { title: 'ක්‍රමය 2: නිලධාරියාගේ පුද්ගලික ස්මාර්ට් දුරකථනය', desc: 'විශේෂිත ඩිවයිස් නොමැති වුවත්, සාමාන්‍ය කැමරාවෙන් QR එක ස්කෑන් කළ විට රජයේ නිල සුරක්ෂිත gov.lk ද්වාරය හරහා ඡායාරූපය සහ තොරතුරු සත්‍යාපනය වේ.', accent: '#06b6d4' },
                { title: 'ක්‍රමය 3: සජීවී ආරක්ෂණ හොලෝග්‍රෑම් රටාව', desc: 'තිරය ස්පර්ශ කරන විට හෝ දුරකථනය සෙලවීමේදී පසුබිමෙන් සජීවීව වෙනස් වන ඩිජිටල් හොලෝග්‍රෑම් රටාව මඟින් මෙය ව්‍යාජ ස්ක්‍රීන්ෂොට් එකක් නොවන බව තහවුරු වේ.', accent: '#10b981' }
              ].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '24px', 
                    height: '24px', 
                    backgroundColor: step.accent, 
                    color: '#0f172a', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    fontSize: '12px', 
                    fontWeight: '800', 
                    flexShrink: 0,
                    boxShadow: `0 0 10px ${step.accent}33`
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#ffffff' }}>{step.title}</h4>
                    <p style={{ margin: '3px 0 0 0', fontSize: '11.5px', color: '#94a3b8', lineHeight: '1.6', fontWeight: '500' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* REAL-TIME IDENTITY AUDIT LOGS */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.35)',
            backdropFilter: 'blur(30px)',
            borderRadius: '28px',
            padding: '28px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '800', color: '#ffffff' }}>
                Recent Identity Verification Logs
              </h3>
              <span style={{ fontSize: '10px', background: 'rgba(6, 182, 212, 0.1)', padding: '3px 8px', borderRadius: '6px', color: '#06b6d4', fontWeight: '800', border: '1px solid rgba(6, 182, 212, 0.15)' }}>SECURE AUDIT</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {scanHistory.map((log) => (
                <div key={log.id} style={{ paddingBottom: '14px', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#ffffff' }}>{log.authority}</span>
                    <span style={{ fontSize: '11px', color: '#3b82f6', fontWeight: '700' }}>{log.type}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                    <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: '500' }}>{log.location}</span>
                    <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: 'monospace' }}>{log.time}</span>
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