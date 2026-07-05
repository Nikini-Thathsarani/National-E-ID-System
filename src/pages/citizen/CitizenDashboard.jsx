import "../../styles/CitizenDashboard.css";

import Sidebar from "../../components/citizen/Sidebar";
import Topbar from "../../components/citizen/Topbar";

function CitizenDashboard() {

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="dashboard-content">

                <Topbar />

            </div>

        </div>

    )

}

export default CitizenDashboard;