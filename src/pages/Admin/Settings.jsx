import { useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import {
  FaUserShield,
  FaBell,
  FaLock,
  FaServer,
  FaSave,
  FaShieldAlt
} from "react-icons/fa";

function Settings() {

  const [settings, setSettings] = useState({
    emailVerification: true,
    autoGenerateID: false,
    notifications: true
  });

  const handleChange = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.checked
    });
  };

  const saveSettings = () => {
    alert("Settings saved successfully.");
  };

  return (
    <AdminLayout>

      <h2 className="page-title">System Settings</h2>

      <div className="settings-grid">

        {/* Admin */}

        <div className="settings-card">

          <h3>
            <FaUserShield />
            Administrator
          </h3>

          <div className="setting-item">
            <label>Administrator Name</label>
            <input
              value="System Administrator"
              readOnly
            />
          </div>

          <div className="setting-item">
            <label>Email Address</label>
            <input
              value="admin@eid.gov.lk"
              readOnly
            />
          </div>

          <div className="setting-item">
            <label>Role</label>
            <input
              value="Super Administrator"
              readOnly
            />
          </div>

        </div>

        {/* Verification */}

        <div className="settings-card">

          <h3>
            <FaShieldAlt />
            Verification
          </h3>

          <div className="toggle-row">
            <span>Email Verification</span>

            <label className="switch">
              <input
                type="checkbox"
                name="emailVerification"
                checked={settings.emailVerification}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="toggle-row">
            <span>Auto Generate Digital ID</span>

            <label className="switch">
              <input
                type="checkbox"
                name="autoGenerateID"
                checked={settings.autoGenerateID}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
          </div>

        </div>

        {/* Notifications */}

        <div className="settings-card">

          <h3>
            <FaBell />
            Notifications
          </h3>

          <div className="toggle-row">
            <span>Enable Notifications</span>

            <label className="switch">
              <input
                type="checkbox"
                name="notifications"
                checked={settings.notifications}
                onChange={handleChange}
              />
              <span className="slider"></span>
            </label>
          </div>

        </div>

        {/* Security */}

        <div className="settings-card">

          <h3>
            <FaLock />
            Security
          </h3>

          <button className="settings-btn">
            Change Password
          </button>

          <button className="settings-btn danger">
            Enable Two-Factor Authentication
          </button>

        </div>

        {/* System */}

        <div className="settings-card">

          <h3>
            <FaServer />
            System Information
          </h3>

          <div className="setting-item">
            <label>Version</label>
            <input
              value="National e-ID v1.0"
              readOnly
            />
          </div>

          <div className="setting-item">
            <label>Database</label>
            <input
              value="Firebase Firestore"
              readOnly
            />
          </div>

          <div className="setting-item">
            <label>Storage</label>
            <input
              value="Firebase Storage"
              readOnly
            />
          </div>

        </div>

      </div>

      <button
        className="save-btn"
        onClick={saveSettings}
      >
        <FaSave />
        Save Settings
      </button>

    </AdminLayout>
  );
}

export default Settings;