import React from 'react';

const Profile = () => {
  return (
    <div style={{ padding: '30px', color: '#fff', backgroundColor: '#030614', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* 1. Page Title Section */}
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', margin: 0, letterSpacing: '0.5px' }}>Profile Settings</h2>
        <p style={{ color: '#6c7d93', fontSize: '11px', margin: '4px 0 0 0', fontWeight: '500' }}>
          පැතිකඩ සැකසුම් / சுயвиவர அமைப்புகள்
        </p>
      </div>

      {/* Main Layout Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px', alignItems: 'start' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* Top Welcome/Avatar Card with Professional Banner */}
          <div style={{ 
            background: 'linear-gradient(135deg, #0f1c30 0%, #070c16 100%)', 
            borderRadius: '20px', 
            padding: '35px', 
            textAlign: 'center', 
            border: '1px solid #1e293b',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Subtle background glow element */}
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(59, 130, 246, 0.15)', filter: 'blur(50px)', borderRadius: '50%' }}></div>
            
            {/* Professional Profile Image Placeholders */}
            <div style={{ position: 'relative', width: '110px', height: '110px', margin: '0 auto 15px' }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="Professional User Avatar" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '50%', 
                  border: '3px solid #3b82f6',
                  boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
                }} 
              />
              <span style={{ position: 'absolute', bottom: '5px', right: '5px', width: '14px', height: '14px', backgroundColor: '#10b981', border: '2px solid #070c16', borderRadius: '50%' }}></span>
            </div>

            <h3 style={{ margin: '0 0 4px 0', fontSize: '24px', fontWeight: '600' }}>Nurani Kaushalya</h3>
            <p style={{ color: '#3b82f6', margin: 0, fontSize: '14px', fontWeight: '500', letterSpacing: '0.3px' }}>Software Engineering Student</p>
            <p style={{ color: '#6c7d93', fontSize: '10px', margin: '4px 0 0 0', opacity: 0.8 }}>මෘදුකාංග ඉංජිනේරු විද්‍යා ශිෂ්‍ය / மென்பொருள் பொறியியல் மாணவர்</p>
          </div>

          {/* Detailed Info Card */}
          <div style={{ backgroundColor: '#090e1a', borderRadius: '20px', padding: '30px', border: '1px solid #1e293b' }}>
            <div style={{ borderBottom: '1px solid #1e293b', paddingBottom: '12px', marginBottom: '25px' }}>
              <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#3b82f6' }}>Personal Information</h4>
              <p style={{ color: '#6c7d93', fontSize: '11px', margin: '4px 0 0 0' }}>පුද්ගලික තොරතුරු / தனிப்பட்ட தகவல்</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              {/* Full Name */}
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
                  FULL NAME <span style={{ opacity: 0.6, fontSize: '10px' }}>(සම්පූර්ණ නම / முழு பெயர்)</span>
                </label>
                <span style={{ fontWeight: '500', fontSize: '15px', color: '#f8fafc' }}>Nurani Kaushalya Kulasuriya</span>
              </div>

              {/* Passport / ID */}
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
                  PASSPORT OR ID NO <span style={{ opacity: 0.6, fontSize: '10px' }}>(විදේශ ගමන් බලපත්‍ර හෝ හැඳුනුම්පත් අංකය / විදේශ ගමන් බලපත්‍රය හෝ அடையாள அட்டை எண்)</span>
                </label>
                <span style={{ fontWeight: '500', fontSize: '15px', color: '#f8fafc' }}>N/A</span>
              </div>

              {/* Institution */}
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '6px', fontWeight: '500' }}>
                  INSTITUTION <span style={{ opacity: 0.6, fontSize: '10px' }}>(ආයතනය / நிறுவனம்)</span>
                </label>
                <span style={{ fontWeight: '500', fontSize: '15px', color: '#f8fafc' }}>CINEC Campus</span>
              </div>

              {/* Account Status */}
              <div>
                <label style={{ color: '#6c7d93', fontSize: '11px', display: 'block', marginBottom: '8px', fontWeight: '500' }}>
                  ACCOUNT STATUS <span style={{ opacity: 0.6, fontSize: '10px' }}>(ගිණුම් තත්ත්වය / கணக்கு நிலை)</span>
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '5px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    VERIFIED
                  </span>
                  <span style={{ color: '#6c7d93', fontSize: '10px', fontWeight: '500' }}>තහවුරු කරන ලදී / சரிபார்க்கப்பட்டது</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Actions & Security */}
        <div style={{ backgroundColor: '#090e1a', borderRadius: '20px', padding: '30px', border: '1px solid #1e293b', height: 'fit-content' }}>
          <div style={{ marginBottom: '25px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#3b82f6' }}>Security & Actions</h4>
            <p style={{ color: '#6c7d93', fontSize: '11px', margin: '4px 0 0 0' }}>ආරක්ෂාව සහ ක්‍රියාමාර්ග / பாதுகாப்பு மற்றும் நடவடிக்கைகள்</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Change Password Button */}
            <button style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: '#111827', 
              border: '1px solid #1e293b', 
              borderRadius: '10px', 
              color: '#fff', 
              textAlign: 'left', 
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#f8fafc' }}>Change Account Password</div>
              <div style={{ color: '#6c7d93', fontSize: '10px', marginTop: '3px', fontWeight: '500' }}>මුරපදය වෙනස් කිරීම / கடவுச்சொல்லை மாற்றவும்</div>
            </button>
            
            {/* Request Deactivation Button */}
            <button style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: 'rgba(239, 68, 68, 0.05)', 
              border: '1px solid rgba(239, 68, 68, 0.2)', 
              borderRadius: '10px', 
              color: '#ef4444', 
              textAlign: 'left', 
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}>
              <div style={{ fontSize: '13px', fontWeight: '600' }}>Request ID Deactivation</div>
              <div style={{ color: '#ef4444', opacity: 0.7, fontSize: '10px', marginTop: '3px', fontWeight: '500' }}>ගිණුම අක්‍රිය කිරීමට ඉල්ලීම / கணக்கு செயலிழக்க கோரிக்கை</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;