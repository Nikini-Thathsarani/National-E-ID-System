// src/pages/Dashboard/Widgets/Notifications.jsx
import React from 'react';
import '../../../styles/Notifications.css';

const Notifications = () => {
  return (
    <div className="notifications-widget-card">
      
      {/* Header */}
      <div className="notifications-header">
        <h4 className="notifications-title">
          Recent Activity <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>/ මෑතකාලීන ක්‍රියාකාරකම් / சமீபத்திய ක්‍රියාபாடு</span>
        </h4>
        <span className="notifications-count-badge">UPDATES</span>
      </div>

      {/* Notifications List */}
      <div className="notifications-list">
        
        {/* Item 1: Success */}
        <div className="notification-item">
          <div className="notification-icon-wrapper icon-success">✅</div>
          <div className="notification-content" style={{ gap: '2px' }}>
            <p className="notification-text" style={{ fontSize: '12px', lineHeight: '1.5' }}>
              <b>NIC Verification Completed Successfully</b> <br />
              <span style={{ fontSize: '11.5px', color: '#475569', fontWeight: '500' }}>ජාතික හැඳුනුම්පත් සත්‍යාපනය සාර්ථකව අවසන් විය</span> <br />
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>தேசிய அடையாள அட்டை சரிபார்ப்பு வெற்றிகரமாக முடிந்தது</span>
            </p>
            <p className="notification-time">Just now / මීට සුළු මොහොතකට පෙර / சற்று முன்</p>
          </div>
        </div>

        {/* Item 2: Warning */}
        <div className="notification-item">
          <div className="notification-icon-wrapper icon-warning">⚠️</div>
          <div className="notification-content" style={{ gap: '2px' }}>
            <p className="notification-text" style={{ fontSize: '12px', lineHeight: '1.5' }}>
              <b>Third-Party Document Request Pending</b> <br />
              <span style={{ fontSize: '11.5px', color: '#475569', fontWeight: '500' }}>බාහිර පාර්ශවීය ලේඛන ඉල්ලීමක් ප්‍රකාශිතව පවතී</span> <br />
              <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '500' }}>மூன்றாம் පාර්ශවීය ஆவணக் கோரிக்கை நிலுவையில் உள்ளது</span>
            </p>
            <p className="notification-time">2 hours ago / පැය 2කට පෙර / 2 மணி நேரத்திற்கு முன்</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Notifications;