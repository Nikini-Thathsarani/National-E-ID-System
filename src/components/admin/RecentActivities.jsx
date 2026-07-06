function RecentActivities() {

  const activities = [
    "Citizen registration approved.",
    "New Digital ID generated.",
    "Verification request received.",
    "Administrator updated system settings.",
    "Citizen profile modified."
  ];

  return (
    <div className="activity-card">

      <h2>Recent Activities</h2>

      <ul>
        {activities.map((activity, index) => (
          <li key={index}>✔ {activity}</li>
        ))}
      </ul>

    </div>
  );
}

export default RecentActivities;