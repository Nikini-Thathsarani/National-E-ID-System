function Topbar() {
  return (
    <div className="topbar">

      <div className="topbar-left">
        <h1>National e-ID Administration</h1>
      </div>

      <div className="topbar-right">

        <input
          type="text"
          placeholder="Search Citizens..."
          className="search-box"
        />

        <button className="notification-btn">🔔</button>

        <div className="admin-profile">
          <img
            src="https://i.pravatar.cc/100"
            alt="Admin"
          />

          <div>
            <h4>System Administrator</h4>
            <p>Super Admin</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Topbar;