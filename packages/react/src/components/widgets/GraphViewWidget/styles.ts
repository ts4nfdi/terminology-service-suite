export const legendStyle: React.CSSProperties = {
  position: "absolute",
  display: "inline-block",
  backgroundColor: "#e5e7ea",
  padding: "5px",
  borderRadius: "10px",
  paddingTop: "10px",
  bottom: "20px",
  right: "20px",
};
export const legendItemStyle: React.CSSProperties = {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  display: "inline-block",
};

export const fullScreenStyle = `
        .graph-container:fullscreen,
        .graph-container::backdrop {
          background-color: white;
        }
      `;

export const widgetContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "100vh",
  overflow: "hidden",
};

export const graphContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "100vh",
  margin: "auto",
};

export const fullHeightStyle: React.CSSProperties = { height: "100vh" };

export const guideMeStyle: React.CSSProperties = { width: 300, padding: 10 };

export const nothingToAddStyle: React.CSSProperties = {
  display: "inline-block",
  backgroundColor: "#FBCBC6",
  color: "red",
  padding: "5px",
  borderRadius: "10px",
};

export const actionButtonsContainerStyle: React.CSSProperties = {
  display: "inline-flex",
  float: "right",
  paddingTop: 10,
};

export const resetButtonStyle: React.CSSProperties = {
  textDecoration: "none",
  marginRight: "20px",
};

export const removeButtonStyle: React.CSSProperties = {
  marginRight: "20px",
  color: "red",
};

export const removeWarningMessageStyle: React.CSSProperties = {
  marginTop: "10px",
  marginRight: "10px",
  marginLeft: "-10px",
};

export const fontSizeStyle = (val: number): React.CSSProperties => ({
  fontSize: val,
});

export const paddingTopStyle = (val: string): React.CSSProperties => ({
  paddingTop: val,
});

export const paddingStyle = (val: string): React.CSSProperties => ({
  padding: val,
});

export const margingLeftStyle = (val: string): React.CSSProperties => ({
  marginLeft: val,
});
