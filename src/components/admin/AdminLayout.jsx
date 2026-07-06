import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../../styles/AdminDashboard.css";

function AdminLayout({ children }) {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="admin-content">
        <Topbar />

        {children}
      </div>
    </div>
  );
}

export default AdminLayout;