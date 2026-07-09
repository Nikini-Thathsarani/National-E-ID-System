import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../../styles/AdminDashboard.css";


function AdminLayout({ children }) {


  const [search,setSearch] = useState("");



  return (

    <div className="admin-container">


      <Sidebar />


      <div className="admin-content">


        <Topbar
          search={search}
          setSearch={setSearch}
        />



        {
          typeof children === "function"

          ? children(search)

          : children
        }


      </div>


    </div>

  );

}


export default AdminLayout;