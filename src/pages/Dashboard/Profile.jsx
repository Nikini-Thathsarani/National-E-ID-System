import React from 'react';

const Profile = () => {
  return (
    <div style={{ padding: '20px', color: '#fff', backgroundColor: '#030614', minHeight: '100vh' }}>
      {/* Page Title */}
      <div style={{ marginBottom: '30px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', margin: 0 }}>Profile Settings</h2>
        <p style={{ color: '#6c7d93', fontSize: '12px', margin: '5px 0 0 0' }}>
          පැතිකඩ සැකසුම් / சுயவிவர සැකසීම්
        </p>
      </div>

      {/* Main Layout Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        
        {/* Left Column: Profile Card & Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Top Welcome/Avatar Card */}
          <div style={{ background: 'linear-gradient(135deg, #162a45, #0f1c30)', borderRadius: '16px', padding: '30px', textAlign: 'center', border: '1px solid #1e293b' }}>
            <div style={{ width: '100px', height: '100px', backgroundColor: '#1e293b', borderRadius: '50%', margin: '0 auto 15px', border: '3px solid #3b82f6', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '32px', fontWeight: 'bold' }}>
              NK
            </div>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '22px' }}>Nurani Kaushalya</h3>
            <p style={{ color: '#3b82f6', margin: 0, fontSize: '14px', fontWeight: '500' }}>Software Engineering Student</p>
          </div>

          {/* Detailed Info Card */}
          <div style={{ backgroundColor: '#090e1a', borderRadius: '16px', padding: '25px', border: '1px solid #1e293b' }}>
            <h4 style={{ margin: '0 0 20px 0', fontSize: '18px', borderBottom: '1px solid #1e293b', paddingBottom: '10px', color: '#3b82f6' }}>Personal Information</h4>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '5px', uppercase: 'true' }}>Full Name</label>
                <span style={{ fontWeight: '500' }}>Nurani Kaushalya Kulasuriya</span>
              </div>
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '5px' }}>PASSPORT / ID NO</label>
                <span style={{ fontWeight: '500' }}>N/A</span>
              </div>
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '5px' }}>INSTITUTION</label>
                <span style={{ fontWeight: '500' }}>CINEC Campus</span>
              </div>
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '5px' }}>ACCOUNT STATUS</label>
                <span style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: 'bold' }}>VERIFIED</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Actions & Security */}
        <div style={{ backgroundColor: '#090e1a', borderRadius: '16px', padding: '25px', border: '1px solid #1e293b', height: 'fit-content' }}>
          <h4 style={{ margin: '0 0 20px 0', fontSize: '18px', color: '#3b82f6' }}>Security & Actions</h4>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button style={{ width: '100%', padding: '12px', backgroundColor: '#161b2c', border: '1px solid #1e293b', borderRadius: '8px', color: '#fff', textAlign: 'left', cursor: 'pointer', fontSize: '13px' }}>
              Change Account Password
            </button>
            <button style={{ width: '100%', padding: '12px', backgroundColor: '#161b2c', border: '1px solid #1e293b', borderRadius: '8px', color: '#ef4444', textAlign: 'left', cursor: 'pointer', fontSize: '13px', fontWeight: '500' }}>
              Request ID Deactivation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;