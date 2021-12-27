import React from "react";

export default function Temperature(props) {
  return (
    <div className="TemperatureCelsius">
      <span className="currentTemperature">
        <span>{Math.round(props.celsius)}</span>
      </span>
      <span className="units"> °C | °F</span>
    </div>
  );
}