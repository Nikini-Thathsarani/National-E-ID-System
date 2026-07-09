import AdminLayout from "../../components/admin/AdminLayout";
import { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

import { Bar, Pie } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    verified: 0,
    pending: 0,
    rejected: 0,
  });

  useEffect(() => {
    fetchUsers();
  }, []);

    const fetchUsers = async () => {

    const snapshot = await getDocs(collection(db, "users"));

    let total = 0;
    let verified = 0;
    let pending = 0;
    let rejected = 0;


    snapshot.forEach((doc)=>{

      const user = doc.data();


      if(user.role !== "admin" && user.emailVerified === true){

          total++;

          const status = (user.status || "pending")
          .trim()
          .toLowerCase();


          if(status === "pending"){
              pending++;
          }


          if(status === "verified"){
              verified++;
          }


          if(status === "rejected"){
              rejected++;
          }

      }


    });


    setStats({
      total,
      verified,
      pending,
      rejected
    });

  };
  // Cards
  const cards = [
    {
      title: "Total Citizens",
      value: stats.total,
      color: "#2563EB",
    },
    {
      title: "Verified Users",
      value: stats.verified,
      color: "#16A34A",
    },
    {
      title: "Pending Requests",
      value: stats.pending,
      color: "#F59E0B",
    },
    {
      title: "Rejected",
      value: stats.rejected,
      color: "#DC2626",
    },
  ];

  // Bar Chart
  const barData = {
    labels: ["Citizens", "Verified", "Pending", "Rejected"],
    datasets: [
      {
        label: "Users",
        data: [
          stats.total,
          stats.verified,
          stats.pending,
          stats.rejected,
        ],
        backgroundColor: [
          "#2563EB",
          "#16A34A",
          "#F59E0B",
          "#DC2626",
        ],
      },
    ],
  };

  // Pie Chart
  const pieData = {
    labels: ["Verified", "Pending", "Rejected"],
    datasets: [
      {
        data: [
          stats.verified,
          stats.pending,
          stats.rejected,
        ],
        backgroundColor: [
          "#16A34A",
          "#F59E0B",
          "#DC2626",
        ],
      },
    ],
  };

  return (
    <AdminLayout>
      <h2 className="page-title">Admin Dashboard</h2>

      {/* Cards */}

      <div className="cardContainer">
        {cards.map((item, index) => (
          <div
            key={index}
            className="card"
            style={{
              borderLeft: `6px solid ${item.color}`,
            }}
          >
            <h4>{item.title}</h4>

            <h2>{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts */}

      <div className="chartContainer">
        <div className="chartBox">
          <h3>Citizen Statistics</h3>

          <Bar data={barData} />
        </div>

        <div className="chartBox">
          <h3>Verification Status</h3>

          <Pie data={pieData} />
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;