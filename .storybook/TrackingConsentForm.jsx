export const CONSENT_KEY = "user_tracking_consent";

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const modalStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  maxWidth: "600px",
  width: "90%",
  padding: "1.5rem",
  textAlign: "left",
  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
};

const footerStyle = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: "1.5rem",
};

const buttonStyle = {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
};

export default function TrackingConsentForm({ onConsentChange }) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Before you use the TSS</h2>

        <p>
          We use cookies and tracking technologies to improve your experience.
          By clicking <b>Accept</b>, you agree to analytics tracking. We
        </p>

        <ul>
          <li>measure performance and detect issues</li>
          <li>continuously improve functionality</li>
        </ul>

        <div style={footerStyle}>
          <button
            style={{
              ...buttonStyle,
              backgroundColor: "#45556a",
              color: "white",
            }}
            onClick={() => onConsentChange("accepted")}
          >
            Accept
          </button>
          <button
            style={{ ...buttonStyle, backgroundColor: "#eee" }}
            onClick={() => onConsentChange("declined")}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
