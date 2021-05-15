import React from "react";

const Container = {
  display: "flex",
};
const Video = {
  height: "85px",
  width: "85px",
  backgroundColor: "grey",
};

const Textbox = {
  display: "flex",
  height: "85px",
  width: "258px",
  backgroundColor: "white",
  //border: "solid black 1px",
  marginLeft: "25px",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "Open Sans",
  fontSize: "14px",
};

const VideoPlayer = ({ children }) => (
  <div style={Container}>
    <div style={Video}></div>
    <div style={Textbox}>{children}</div>
  </div>
);

export default VideoPlayer;
