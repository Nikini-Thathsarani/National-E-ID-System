import AdminLayout from "../../components/admin/AdminLayout";
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
  // 📊 CARD DATA
  const stats = [
    { title: "Total Citizens", value: "2.5M", color: "#2563EB" },
    { title: "Verified Users", value: "1.8M", color: "#16A34A" },
    { title: "Pending Requests", value: "12,450", color: "#F59E0B" },
    { title: "Rejected", value: "3,210", color: "#DC2626" },
  ];

  // 📈 BAR CHART DATA
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "New Registrations",
        data: [12000, 19000, 15000, 22000, 18000, 25000],
        backgroundColor: "#2563EB",
      },
    ],
  };

  // 🥧 PIE CHART DATA
  const pieData = {
    labels: ["Verified", "Pending", "Rejected"],
    datasets: [
      {
        data: [65, 25, 10],
        backgroundColor: ["#16A34A", "#F59E0B", "#DC2626"],
      },
    ],
  };

  return (
  <AdminLayout>
    <h2 style={{ marginBottom: "20px" }}>Admin Dashboard</h2>

    {/* CARDS */}
    <div className="cardContainer">
      {stats.map((item, index) => (
        <div
          key={index}
          className="card"
          style={{ borderLeft: `5px solid ${item.color}` }}
        >
          <h4>{item.title}</h4>
          <h2>{item.value}</h2>
        </div>
      ))}
    </div>

    {/* CHARTS */}
    <div className="chartContainer">
      <div className="chartBox">
        <h3>Registrations</h3>
        <Bar data={barData} />
      </div>

      <div className="chartBox">
        <h3>User Status</h3>
        <Pie data={pieData} />
      </div>
    </div>
  </AdminLayout>
);
}


export default Dashboard;