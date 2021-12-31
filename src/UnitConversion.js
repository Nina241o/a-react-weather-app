import React from "react";

import "./UnitConversion.css";

export default function Temperature(props) {
  return (
    <div className="UnitConversion">
      <span className="currentTemperature">{Math.round(props.celsius)}</span>
      <span className="units">°C</span>
    </div>
  );
}
