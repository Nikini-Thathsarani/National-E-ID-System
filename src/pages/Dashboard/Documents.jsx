// src/pages/Dashboard/Documents.jsx
import React, { useState } from 'react';

const Documents = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Advanced Datasets representing National Registry Docs
  const documentsData = [
    { id: 1, name: 'Digital Birth Certificate', category: 'Identity', type: 'PDF', size: '2.4 MB', date: '2026-05-10', status: 'Biometric Verified', sign: 'Cryptographic Signed', icon: '📜' },
    { id: 2, name: 'National Identity Card (E-NIC)', category: 'Identity', type: 'E-ID', size: '840 KB', date: '2026-06-15', status: 'Biometric Verified', sign: 'Cryptographic Signed', icon: '🪪' },
    { id: 3, name: 'Smart Driving License', category: 'Licenses', type: 'PDF', size: '1.2 MB', date: '2026-06-20', status: 'Biometric Verified', sign: 'Cryptographic Signed', icon: '🚗' },
    { id: 4, name: 'Passport (Bio-Data Page)', category: 'Identity', type: 'JPG', size: '3.1 MB', date: '2026-07-01', status: 'Pending Gov Review', sign: 'Pending Sign', icon: '✈️' },
    { id: 5, name: 'GCE A/L Certificate', category: 'Educational', type: 'PDF', size: '4.2 MB', date: '2026-07-05', status: 'Biometric Verified', sign: 'Department Verified', icon: '🎓' },
  ];

  // Access Logs / Audit Trail Data
  const auditLogs = [
    { id: 1, agency: 'Department of Motor Traffic', purpose: 'Driving License Renewal', date: '2026-07-06 09:24 AM', status: 'Authorized' },
    { id: 2, agency: 'Sri Lanka Customs / Passport Office', purpose: 'Bio-data Verification', date: '2026-07-02 02:15 PM', status: 'Authorized' },
    { id: 3, agency: 'People\'s Bank (KYC Center)', purpose: 'Account Opening Verification', date: '2026-06-28 11:40 AM', status: 'Authorized' },
  ];

  const categories = ['All', 'Identity', 'Licenses', 'Educational'];

  const filteredDocs = activeCategory === 'All' 
    ? documentsData 
    : documentsData.filter(doc => doc.category === activeCategory);

  return (
    <div style={{ 
      padding: '35px', 
      color: '#1e293b', 
      minHeight: '100vh', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' // Subtle background shift to pop the glass effect
    }}>
      
      {/* HEADER SECTION */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h2 style={{ fontSize: '32px', fontWeight: '800', margin: 0, color: '#0f172a', letterSpacing: '-0.5px' }}>
            Document Vault
          </h2>
          <p style={{ color: '#475569', fontSize: '12px', margin: '4px 0 0 0', fontWeight: '600' }}>
            ජාතික ලේඛන ගබඩාව • ජෛවමිතික ආරක්ෂිතයි / தேசிய ஆவணக் காப்பகம்
          </p>
        </div>
        
        {/* Advanced Vault Security Indicator */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.8)',
          padding: '10px 18px',
          borderRadius: '14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
        }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981' }}></div>
          <span style={{ fontSize: '12px', fontWeight: '750', color: '#0f172a', letterSpacing: '0.5px' }}>AES-256 ENCRYPTED</span>
        </div>
      </div>

      {/* STATS TILES (Hyper-Glassmorphic) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '25px', marginBottom: '35px' }}>
        {[
          { label: 'TOTAL ECO-SYSTEM DOCS', val: '05', color: '#2563eb', bg: 'rgba(37, 99, 235, 0.04)' },
          { label: 'BIOMETRIC VERIFIED', val: '04', color: '#10b981', bg: 'rgba(16, 185, 129, 0.04)' },
          { label: 'SECURITY AUDIT LOGS', val: '03 Active', color: '#6366f1', bg: 'rgba(99, 102, 241, 0.04)' }
        ].map((stat, i) => (
          <div key={i} style={{ 
            background: 'rgba(255, 255, 255, 0.45)', 
            backdropFilter: 'blur(25px)', 
            WebkitBackdropFilter: 'blur(25px)',
            padding: '24px', 
            borderRadius: '20px', 
            border: '1px solid rgba(255, 255, 255, 0.7)', 
            boxShadow: '0 10px 30px rgba(31, 38, 135, 0.04)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: stat.color }}></div>
            <span style={{ fontSize: '11px', fontWeight: '800', color: '#64748b', display: 'block', letterSpacing: '0.5px' }}>{stat.label}</span>
            <span style={{ fontSize: '28px', fontWeight: '800', color: stat.color, display: 'block', marginTop: '8px' }}>{stat.val}</span>
          </div>
        ))}
      </div>

      {/* CATEGORY FILTER TABS */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '25px' }}>
        {categories.map((cat) => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: '10px 22px',
              borderRadius: '12px',
              border: activeCategory === cat ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid rgba(255, 255, 255, 0.5)',
              background: activeCategory === cat ? '#2563eb' : 'rgba(255, 255, 255, 0.4)',
              color: activeCategory === cat ? '#fff' : '#475569',
              fontWeight: '600',
              fontSize: '13px',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              boxShadow: activeCategory === cat ? '0 4px 15px rgba(37, 99, 235, 0.2)' : 'none',
              transition: 'all 0.2s ease'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MAIN VAULT LAYOUT */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'start' }}>
        
        {/* LEFT COLUMN: ADVANCED DOCUMENTS TABLE */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.4)', 
          backdropFilter: 'blur(30px)', 
          WebkitBackdropFilter: 'blur(30px)',
          borderRadius: '24px', 
          padding: '30px', 
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.03)'
        }}>
          <h3 style={{ margin: '0 0 20px 0', fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>Official Government Registry</h3>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <th style={{ padding: '12px 10px', fontSize: '11px', fontWeight: '750', color: '#64748b', textTransform: 'uppercase' }}>Document Details</th>
                  <th style={{ padding: '12px 10px', fontSize: '11px', fontWeight: '750', color: '#64748b', textTransform: 'uppercase' }}>Security Status</th>
                  <th style={{ padding: '12px 10px', fontSize: '11px', fontWeight: '750', color: '#64748b', textTransform: 'uppercase' }}>Legal Sign</th>
                  <th style={{ padding: '12px 10px', fontSize: '11px', fontWeight: '750', color: '#64748b', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                    {/* Document Info */}
                    <td style={{ padding: '16px 10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <span style={{ fontSize: '24px', background: 'rgba(255,255,255,0.6)', padding: '8px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }}>{doc.icon}</span>
                        <div>
                          <span style={{ fontWeight: '700', fontSize: '14px', color: '#0f172a', display: 'block' }}>{doc.name}</span>
                          <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>{doc.type} • {doc.size} • Issued {doc.date}</span>
                        </div>
                      </div>
                    </td>

                    {/* Biometric Status */}
                    <td style={{ padding: '16px 10px' }}>
                      <span style={{ 
                        fontSize: '10px', 
                        fontWeight: '800', 
                        padding: '4px 10px', 
                        borderRadius: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        backgroundColor: doc.status.includes('Verified') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                        color: doc.status.includes('Verified') ? '#10b981' : '#f59e0b',
                        border: doc.status.includes('Verified') ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(245, 158, 11, 0.2)'
                      }}>
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: doc.status.includes('Verified') ? '#10b981' : '#f59e0b' }}></span>
                        {doc.status}
                      </span>
                    </td>

                    {/* Cryptographic Digital Sign */}
                    <td style={{ padding: '16px 10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: doc.sign.includes('Signed') || doc.sign.includes('Verified') ? '#2563eb' : '#64748b' }}>
                        <span style={{ fontSize: '12px' }}>🔏</span>
                        <span style={{ fontSize: '12px', fontWeight: '600' }}>{doc.sign}</span>
                      </div>
                    </td>

                    {/* Action Hub */}
                    <td style={{ padding: '16px 10px', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                        <button title="Secure Share" style={{ background: 'none', border: 'none', color: '#2563eb', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>Share</button>
                        <button title="View Document" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(0,0,0,0.05)', padding: '5px 12px', borderRadius: '8px', color: '#1e293b', fontWeight: '600', fontSize: '12px', cursor: 'pointer' }}>View</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT COLUMN: SECURE UPLOAD ZONE & REAL-TIME AUDIT LOGS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          
          {/* SECURE BIOMETRIC UPLOAD */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.4)', 
            backdropFilter: 'blur(30px)', 
            WebkitBackdropFilter: 'blur(30px)',
            borderRadius: '24px', 
            padding: '25px', 
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.03)'
          }}>
            <h4 style={{ margin: '0 0 15px 0', fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>Secure Document Request</h4>
            <div style={{ 
              border: '2px dashed rgba(37, 99, 235, 0.2)', 
              borderRadius: '16px', 
              padding: '30px 15px', 
              textAlign: 'center',
              background: 'rgba(255, 255, 255, 0.2)',
              cursor: 'pointer'
            }}>
              <span style={{ fontSize: '32px', display: 'block', marginBottom: '10px' }}>🛡️</span>
              <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#1e293b' }}>Upload Third-Party Document</p>
              <p style={{ margin: '4px 0 15px 0', fontSize: '11px', color: '#64748b', fontWeight: '500' }}>Will be automatically cross-checked with Department Registry</p>
              <button style={{ 
                padding: '8px 16px', 
                backgroundColor: '#0f172a', 
                color: '#fff', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Browse Document
              </button>
            </div>
          </div>

          {/* REAL-TIME AUDIT LOGS (Who accessed the E-ID data) */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.4)', 
            backdropFilter: 'blur(30px)', 
            WebkitBackdropFilter: 'blur(30px)',
            borderRadius: '24px', 
            padding: '25px', 
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '800', color: '#0f172a' }}>Recent Access History</h4>
              <span style={{ fontSize: '10px', background: 'rgba(37, 99, 235, 0.1)', padding: '2px 6px', borderRadius: '4px', color: '#2563eb', fontWeight: '700' }}>LIVE AUDIT</span>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {auditLogs.map((log) => (
                <div key={log.id} style={{ 
                  paddingBottom: '12px', 
                  borderBottom: '1px solid rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>{log.agency}</span>
                    <span style={{ fontSize: '9px', fontWeight: '700', color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.08)', padding: '1px 5px', borderRadius: '4px' }}>{log.status}</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#475569', fontWeight: '500' }}>{log.purpose}</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8', fontFamily: 'monospace' }}>{log.date}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Documents;