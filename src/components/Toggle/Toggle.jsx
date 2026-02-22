import React from "react";
import "./Toggle.css";

const Toggle = ({ onToggle, isOn }) => {
  return (
    <div className={`toggle-switch ${isOn ? "on" : ""}`} onClick={onToggle}>
      <div className="toggle-knob"></div>
    </div>
  );
};

export default Toggle;
