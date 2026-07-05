import QRCode from "react-qr-code";
import "./QrCode.css";

export default function QrCode() {
  return (
    <div className="page">
      <h1>QR Code</h1>

      <div className="qr-box">
        <QRCode value="SL-NIC-200012345678" />
      </div>
    </div>
  );
}