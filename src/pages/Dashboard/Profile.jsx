import React from 'react';

const Profile = () => {
  return (
    <div style={{ 
      padding: '30px', 
      color: '#1e293b', 
      // 💡 දෙවැනි රූපයේ පරිදි ලා පැහැති වෘත්තීයමය පසුබිමක් ලබා දීම
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(241, 245, 249, 0.9)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh', 
      fontFamily: 'system-ui, sans-serif' 
    }}>
      
      {/* 1. Page Title Section */}
      <div style={{ marginBottom: '35px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', margin: 0, color: '#0f172a', letterSpacing: '0.5px' }}>Profile Settings</h2>
        <p style={{ color: '#475569', fontSize: '11px', margin: '4px 0 0 0', fontWeight: '500' }}>
          පැතිකඩ සැකසුම් / சுயவிவர அமைப்புகள்
        </p>
      </div>

      {/* Main Layout Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '25px', alignItems: 'start' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* Top Avatar Card (Premium White Glassmorphism) */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.45)', 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '20px', 
            padding: '35px', 
            textAlign: 'center', 
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
          }}>
            <div style={{ position: 'relative', width: '110px', height: '110px', margin: '0 auto 15px' }}>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
                alt="Professional User Avatar" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '50%', 
                  border: '3px solid #2563eb',
                  boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)'
                }} 
              />
              <span style={{ position: 'absolute', bottom: '5px', right: '5px', width: '14px', height: '14px', backgroundColor: '#10b981', border: '2px solid #fff', borderRadius: '50%' }}></span>
            </div>

            <h3 style={{ margin: '0 0 4px 0', fontSize: '24px', fontWeight: '600', color: '#0f172a' }}>Nurani Kaushalya</h3>
            <p style={{ color: '#2563eb', margin: 0, fontSize: '14px', fontWeight: '600', letterSpacing: '0.3px' }}>Software Engineering Student</p>
            <p style={{ color: '#475569', fontSize: '10px', margin: '4px 0 0 0', fontWeight: '500' }}>මෘදුකාංග ඉංජිනේරු විද්‍යා ශිෂ්‍ය / மென்பொருள் பொறியியல் மாணவர்</p>
          </div>

          {/* Detailed Info Card (Premium White Glassmorphism) */}
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.45)', 
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '20px', 
            padding: '30px', 
            border: '1px solid rgba(255, 255, 255, 0.6)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.05)'
          }}>
            <div style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.06)', paddingBottom: '12px', marginBottom: '25px' }}>
              <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#2563eb' }}>Personal Information</h4>
              <p style={{ color: '#475569', fontSize: '11px', margin: '4px 0 0 0' }}>පුද්ගලික තොරතුරු / தனிப்பட்ட தகவல்</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
              {/* Full Name */}
              <div>
                <label style={{ color: '#64748b', fontSize: '11px', display: 'block', marginBottom: '6px', fontWeight: '600', letterSpacing: '0.5px' }}>
                  FULL NAME <span style={{ opacity: 0.8, fontSize: '10px', fontWeight: '400' }}>(සම්පූර්ණ නම / முழு பெயர்)</span>
                </label>
                <span style={{ fontWeight: '600', fontSize: '15px', color: '#0f172a' }}>Nurani Kaushalya Kulasuriya</span>
              </div>

              {/* Passport / ID */}
              <div>
                <label style={{ color: '#64748b', fontSize: '11px', display: 'block', marginBottom: '6px', fontWeight: '600', letterSpacing: '0.5px' }}>
                  PASSPORT OR ID NO <span style={{ opacity: 0.8, fontSize: '10px', fontWeight: '400' }}>(විදේශ ගමන් බලපත්‍ර හෝ හැඳුනුම්පත් අංකය)</span>
                </label>
                <span style={{ fontWeight: '600', fontSize: '15px', color: '#0f172a' }}>N/A</span>
              </div>

              {/* Institution */}
              <div>
                <label style={{ color: '#64748b', fontSize: '11px', display: 'block', marginBottom: '6px', fontWeight: '600', letterSpacing: '0.5px' }}>
                  INSTITUTION <span style={{ opacity: 0.8, fontSize: '10px', fontWeight: '400' }}>(ආයතනය / நிறுவனம்)</span>
                </label>
                <span style={{ fontWeight: '600', fontSize: '15px', color: '#0f172a' }}>CINEC Campus</span>
              </div>

              {/* Account Status */}
              <div>
                <label style={{ color: '#64748b', fontSize: '11px', display: 'block', marginBottom: '8px', fontWeight: '600', letterSpacing: '0.5px' }}>
                  ACCOUNT STATUS <span style={{ opacity: 0.8, fontSize: '10px', fontWeight: '400' }}>(ගිණුම් තත්ත්වය / கணக்கு நிலை)</span>
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#0f766e', backgroundColor: 'rgba(19, 78, 74, 0.08)', padding: '5px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: '700', border: '1px solid rgba(19, 78, 74, 0.15)' }}>
                    VERIFIED
                  </span>
                  <span style={{ color: '#475569', fontSize: '10px', fontWeight: '500' }}>තහවුරු කරන ලදී / சரிபார்க்கப்பட்டது</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Actions & Security */}
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.45)', 
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '20px', 
          padding: '30px', 
          border: '1px solid rgba(255, 255, 255, 0.6)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.05)',
          height: 'fit-content' 
        }}>
          <div style={{ marginBottom: '25px', borderBottom: '1px solid rgba(0, 0, 0, 0.06)', paddingBottom: '12px' }}>
            <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#2563eb' }}>Security & Actions</h4>
            <p style={{ color: '#475569', fontSize: '11px', margin: '4px 0 0 0' }}>ආරක්ෂාව සහ ක්‍රියාමාර්ග / பாதுகாப்பு மற்றும் நடவடிக்கைகள்</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Change Password Button */}
            <button style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: 'rgba(255, 255, 255, 0.7)', 
              border: '1px solid rgba(0, 0, 0, 0.06)', 
              borderRadius: '10px', 
              color: '#0f172a', 
              textAlign: 'left', 
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
            }}>
              <div style={{ fontSize: '13px', fontWeight: '600' }}>Change Account Password</div>
              <div style={{ color: '#64748b', fontSize: '10px', marginTop: '3px', fontWeight: '500' }}>මුරපදය වෙනස් කිරීම / கடவுச்சொல்லை மாற்றவும்</div>
            </button>
            
            {/* Request Deactivation Button */}
            <button style={{ 
              width: '100%', 
              padding: '14px', 
              backgroundColor: 'rgba(220, 38, 38, 0.06)', 
              border: '1px solid rgba(220, 38, 38, 0.15)', 
              borderRadius: '10px', 
              color: '#dc2626', 
              textAlign: 'left', 
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '13px', fontWeight: '600' }}>Request ID Deactivation</div>
              <div style={{ color: '#dc2626', opacity: 0.8, fontSize: '10px', marginTop: '3px', fontWeight: '500' }}>ගිණුම අක්‍රිය කිරීමට ඉල්ලීම / கணக்கு செயலிழக்க கோரிக்கை</div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;