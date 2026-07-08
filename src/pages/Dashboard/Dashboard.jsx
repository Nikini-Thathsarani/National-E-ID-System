// src/pages/Dashboard/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // 👈 signOut එකතු කළා
import { auth } from '../../firebaseConfig';
import '../../styles/Dashboard.css';

// ඔයාගේ නිවැරදි ලෝගෝ පාත් එක මෙතනින් Import කරගත්තා
import logoImg from '../../assets/logos/logo.jpeg'; 

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // 🛡️ Security Check
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // 🔐 Firebase Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Logout වුණාට පස්සේ Home එකට යනවා
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f8fafc', color: '#1e3a8a', fontFamily: 'sans-serif', fontWeight: 'bold' }}>
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-base-layout">
        
        {/* ==================== LEFT COLUMN (SIDEBAR + WELCOME) ==================== */}
        <div className="dashboard-left-col">
          
          {/* Big Emblem Blue Card with Custom Logo Image */}
          <div className="national-blue-card">
            <div className="emblem-wrapper-custom">
              <img src={logoImg} alt="National e-ID System Logo" className="custom-emblem-img" />
            </div>
          </div>

          {/* Welcome Card (රතු බටන් එක මෙතනින් සම්පූර්ණයෙන්ම ඉවත් කර පිරිසිදු කළා) */}
          <div className="welcome-glass-card">
            <h3>Welcome, 👋</h3>
            <div className="welcome-translations">
              <span>පිළිගනිමු,</span>
              <span>தேசிய மின்னணு அடையாள අட்டை முறைமை</span>
            </div>
          </div>

        </div>

        {/* ==================== RIGHT COLUMN (GRID) ==================== */}
        <div className="dashboard-right-grid">
          
          {/* CARD 1: DIGITAL ID SUMMARY */}
          <div className="grid-content-card">
            <div>
              <div className="card-top-header">
                <div className="card-icon-box">🪪</div>
                <div className="card-title-block">
                  <h4>Digital ID Summary</h4>
                  <div className="card-title-trilingual">
                    ඩිජිටල් හැඳුනුම්පත් සාරාංශය <br />
                    ஐடி சுருக்கம்
                  </div>
                </div>
              </div>
              <p className="card-description-text">Digital ID summary for complete tyrua</p>
            </div>

            <div className="passport-status-box">
              <div>
                <span className="status-label-sub">Passport ID</span>
                <span className="status-value-main">N/A</span>
              </div>
              <div>
                <span className="status-label-sub">Version</span>
                <span className="passport-badge-blue">PASSPORT</span>
              </div>
            </div>
          </div>

          {/* CARD 2: KEY NOTIFICATIONS */}
          <div className="grid-content-card">
            <div>
              <div className="card-top-header">
                <div className="card-icon-box">🔔</div>
                <div className="card-title-block">
                  <h4>Key Notifications</h4>
                  <div className="card-title-trilingual">
                    ප්‍රධාන දැනුම්දීම් <br />
                    முக்கிய அறிவிப்புகள்
                  </div>
                </div>
              </div>
            </div>

            <div className="notif-inner-stack">
              <div className="notif-line-item">
                <p><b>System Update:</b> National E-ID core services are running optimally.</p>
              </div>
              <div className="notif-line-item" style={{ borderLeftColor: '#f59e0b' }}>
                <p><b>Verification:</b> Documents pending review.</p>
              </div>
            </div>
          </div>

          {/* CARD 3: DOCUMENT VAULT */}
          <div className="grid-content-card">
            <div>
              <div className="card-top-header">
                <div className="card-icon-box">📁</div>
                <div className="card-title-block">
                  <h4>Document Vault</h4>
                  <div className="card-title-trilingual">
                    ලේඛන ගබඩාව <br />
                    ஆவணக் களஞ்சியம்
                  </div>
                </div>
              </div>
              <p className="card-description-text" style={{ fontSize: '12px', lineHeight: '1.5' }}>
                Upload your document. ලේඛන මෙතැනින් උඩුගත කරන්න / உங்கள் ஆவணங்களை இங்கே பதிவேற்றவும்.
              </p>
            </div>

            <button className="browse-files-btn">Browse Files</button>
          </div>

          {/* CARD 4: QR CODE SCANNER */}
          <div className="grid-content-card">
            <div>
              <div className="card-top-header">
                <div className="card-icon-box">🔍</div>
                <div className="card-title-block">
                  <h4>QR Code Scanner</h4>
                  <div className="card-title-trilingual">
                    QR කේත ස්කෑනරය <br />
                    QR குறியீடு ஸ்கேனர்
                  </div>
                </div>
              </div>
            </div>

            <div className="scanner-visual-box">
              <span className="scan-qr-indicator">[ QR ]</span>
              <div className="scanner-status-dot-flex">
                <span className="status-label-sub" style={{ margin: 0 }}>Sample Code Scanner</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <div className="green-dot-pulse"></div>
                  <span style={{ color: '#10b981', fontSize: '11px', fontWeight: '700' }}>Ready to Scan</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;