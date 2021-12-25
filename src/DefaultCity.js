import React from "react";

import CurrentDate from "./CurrentDate";

import "./CurrentDate.css";

export default function DefaultCity() {
  return (
    <div className="DefaultCity">
      <br />
      <div className="weatherInCity">The weather in Darmstadt</div>
      <CurrentDate />
      <div className="temperatureDisplay">
        <h3 className="weatherCondition">clear sky</h3>
        <span>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            alt="weatherDescription"
            className="icon"
          />
        </span>
        <div className="currentTemperature">
          3<span className="units">°C | °F</span>
        </div>
      </div>
      <div className="highestLowestWindHumidity">
        <div>Highest: 4°c</div>
        <div>Lowest: -1°c</div>
        <div>Wind: 3 km/h</div>
        <div>Humidity: 85%</div>
      </div>
    </div>
  );
}
