import React from "react";

const Container = {
  display: "flex",
};

const Textbox = {
  position: "relative",
  height: "50px",
  width: "359px",
  borderRadius: "10px",
  backgroundColor: "rgba(196, 196, 196, 1)",
};

const PText = {
  position: "absolute",
  top: "-14px",
  left: "14px",
  fontFamily: "Open Sans",
  fontSize: "14px",
  color: "rgba(96, 91, 91, 1)",
};

const Text = {
  position: "absolute",
  left: "14px",
  fontFamily: "Open Sans",
  fontSize: "14px",
};

const TextBox = ({ children }) => (
  <div style={Container}>
    <div style={Textbox}>
      <p style={PText}>E-post</p>
      <p style={Text}>{children}</p>
    </div>
  </div>
);

export default TextBox;
