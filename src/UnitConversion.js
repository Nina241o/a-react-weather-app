import React, { useState } from "react";

import "./UnitConversion.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  //Decided not to use UnitConversion as long as not able to convert forecast temps as well (state management).
  //function showFahrenheit(event) {
  // event.preventDefault();
  // setUnit("fahrenheit");
  //}

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="UnitConversion">
        <span className="currentTemperature">{Math.round(props.celsius)}</span>
        <span className="units">°C</span>
      </div>
    );
  } else {
    return "Sorry, we cannot give you any Fahrenheit temperatures at this time.";
  }
  //  let fahrenheit = (props.celsius * 9) / 5 + 32;
  //  return (
  //    <div className="UnitConversion">
  //      <span className="currentTemperature">{Math.round(fahrenheit)}</span>
  //      <span className="units">
  //        <a href="/" onClick={showCelsius}>
  //          °C
  //        </a>{" "}
  //        | °F
  //      </span>
  //    </div>
  //  );
}
