import "../../styles/IDCard.css";
import { FaIdCard, FaQrcode, FaMicrochip } from "react-icons/fa";

function IDCard() {
  return (
    <div className="id-card">

      <div className="card-header">

        <div className="logo-box">
          <FaIdCard />
        </div>

        <div>

          <h3>National e-ID</h3>

          <span>Democratic Socialist Republic of Sri Lanka</span>

        </div>

      </div>

      <div className="card-body">

        <div className="profile">

          <div className="avatar">
            NT
          </div>

        </div>

        <div className="details">

          <p>
            <strong>Name</strong>
          </p>

          <span>Nikini Thathsarani</span>

          <p>
            <strong>NIC Number</strong>
          </p>

          <span>2002XXXXXXXX</span>

          <p>
            <strong>Status</strong>
          </p>

          <span className="verified">
            Verified Citizen
          </span>

        </div>

      </div>

      <div className="card-footer">

        <FaMicrochip className="chip" />

        <FaQrcode className="qr" />

      </div>

    </div>
  );
}

export default IDCard;