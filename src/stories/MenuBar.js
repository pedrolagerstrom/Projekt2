import React from "react";
import { ReactComponent as UserIcon } from "./icons/user.svg";
import { ReactComponent as SkisIcon } from "./icons/skis.svg";
import { ReactComponent as MapPinIcon } from "./icons/map-pin.svg";
import { ReactComponent as CalendarIcon } from "./icons/calendar.svg";
import { ReactComponent as SettingsIcon } from "./icons/settings.svg";

const Container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "371px",
  height: "25px",
  //backgroundColor: "black",
};
const User = {
  src: UserIcon,
  color: "black",
};

const Skis = {
  src: SkisIcon,
  color: "black",
};

const MapPin = {
  src: MapPinIcon,
  color: "black",
};

const Calendar = {
  src: CalendarIcon,
  color: "black",
};

const Settings = {
  src: SettingsIcon,
  color: "black",
};

const MenuBar = () => (
  <div style={Container}>
    <div style={{ margin: "30px" }}>
      <img src={User.src}></img>
    </div>
    <div style={{ margin: "30px" }}>
      <img src={Skis.src}></img>
    </div>
    <div style={{ margin: "30px" }}>
      <img src={MapPin.src}></img>
    </div>
    <div style={{ margin: "30px" }}>
      <img src={Calendar.src}></img>
    </div>
    <div style={{ margin: "30px" }}>
      <img src={Settings.src}></img>
    </div>
  </div>
);

export default MenuBar;
