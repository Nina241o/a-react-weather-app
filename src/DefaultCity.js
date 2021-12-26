import React from "react";

import CurrentDate from "./CurrentDate";

import "./CurrentDate.css";

export default function DefaultCity() {
  return (
    <div className="DefaultCity">
      <br />
      <div className="weatherInCity">The weather in Darmstadt</div>
      <CurrentDate />
      <div className="container">
        <div className="row temperatureDisplay">
          <div className="col-5 align-self-start pb-2">
            <h3 className="weatherCondition">Clear Sky</h3>
          </div>
          <div className="col-2 align-self-end">
            <img
              src="http://openweathermap.org/img/wn/01d@2x.png"
              alt="weatherDescription"
              className="icon"
            />
          </div>
          <div className="col-5 align-self-start">
            <span className="currentTemperature">
              3<span className="units">°C | °F</span>
            </span>
          </div>
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
