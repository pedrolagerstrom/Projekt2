import React from "react";

const Container = {
  position: "relative",
  width: "414px",
  height: "105px",
  //backgroundColor: "black",
};

const TopBar = {
  width: "414px",
  height: "20px",
  backgroundColor: "rgba(224, 220, 220, 1)",
};

const TopText = {
  fontFamily: "Open Sans",
  fontSize: "12px",
  marginLeft: "5px",
};

const BodyText = {
  paddingLeft: "30px",
  fontFamily: "Open Sans",
  fontSize: "18px",
  color: "black",
};

const SubText = {
  paddingLeft: "30px",
  fontFamily: "Open Sans",
  fontSize: "14px",
  color: "rgba(130, 129, 129, 1)",
};

const SubTextBox = {
  position: "absolute",
  top: "45px",
  left: "0px",
};

const Activity = ({ children }) => (
  <div style={Container}>
    <div style={TopBar}>
      <p style={TopText}>
        lör<span style={{ paddingLeft: "320px" }}>13 feb. 2021</span>
      </p>
    </div>
    <p style={BodyText}>
      11,46 kilometer
      <span style={{ paddingLeft: "95px" }}>Träningspass</span>
    </p>
    <div style={SubTextBox}>
      <p style={SubText}>
        01h 31m 05s<span style={{ paddingLeft: "141px" }}>Stakning</span>
      </p>
    </div>
  </div>
);

export default Activity;
