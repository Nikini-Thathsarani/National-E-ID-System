import "./Profile.css";

export default function Profile() {
  return (
    <div className="page">
      <h1>Citizen Profile</h1>

      <div className="card">
        <p><b>Name:</b> Nimal Perera</p>
        <p><b>NIC:</b> 200012345678</p>
        <p><b>Address:</b> Kurunegala</p>
        <p><b>Gender:</b> Male</p>
      </div>
    </div>
  );
}