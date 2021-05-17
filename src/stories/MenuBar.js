import React from "react";
import UserIcon from "./icons/user";
import SkisIcon from "./icons/skis";
import MapPinIcon from "./icons/map-pin";
import CalendarIcon from "./icons/calendar";
import SettingsIcon from "./icons/settings";

const Container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "371px",
  height: "25px",
  //backgroundColor: "black",
};

const MenuBar = () => (
  <div style={Container}>
    <div style={{ margin: "30px" }}>
      <UserIcon />
    </div>
    <div style={{ margin: "30px" }}>
      <SkisIcon />
    </div>
    <div style={{ margin: "30px" }}>
      <MapPinIcon />
    </div>
    <div style={{ margin: "30px" }}>
      <CalendarIcon />
    </div>
    <div style={{ margin: "30px" }}>
      <SettingsIcon />
    </div>
  </div>
);

export default MenuBar;
