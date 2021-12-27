import React from "react";

import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import TemperatureCelsius from "./TemperatureCelsius";

import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <br />
      <p className="weatherInCity">The weather in {props.info.city}</p>
      <CurrentDate date={props.info.date} />
      <div className="container">
        <div className="row temperatureDisplay">
          <div className="col-5 align-self-center pt-2">
            <h3 className="weatherCondition">
              <span>{props.info.description}</span>
            </h3>
          </div>
          <div className="col-2 align-self-end">
            <WeatherIcon code={props.info.icon} size={150} className="icon" />
          </div>
          <div className="col-5 align-self-center pb-2">
            <TemperatureCelsius celsius={props.info.temperature} />
          </div>
        </div>
      </div>
      <div className="highestLowestWindHumidity">
        <div>Highest: {Math.round(props.info.highest)}°c</div>
        <div>Lowest: {Math.round(props.info.lowest)}°c</div>
        <div>Wind: {Math.round(props.info.wind)} km/h</div>
        <div>Humidity: {Math.round(props.info.humidity)}%</div>
      </div>
    </div>
  );
}
