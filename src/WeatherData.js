import React from "react";

import CurrentDate from "./CurrentDate";
import AnimatedWeatherIcon from "./AnimatedWeatherIcon";
import UnitConversion from "./UnitConversion";

import "./WeatherData.css";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <br />
      <p className="weatherInCity">The weather in {props.info.city}</p>
      <CurrentDate date={props.info.date} />
      <div className="container">
        <div className="row temperatureDisplay mx-2">
          <div className="col-4 align-self-center pt-2">
            <h3 className="weatherCondition">
              <span>{props.info.description}</span>
            </h3>
          </div>
          <div className="col-4 align-self-center pt-1">
            <AnimatedWeatherIcon
              code={props.info.icon}
              alt={props.info.description}
              size={150}
              className="icon"
            />
          </div>
          <div className="col-4 align-self-center pb-2">
            <UnitConversion celsius={props.info.temperature} />
          </div>
        </div>
      </div>
      <div className="highestLowestWindHumidity">
        <div>
          <i class="fas fa-thermometer-full"></i> Highest:{" "}
          {Math.round(props.info.highest)}°c
        </div>
        <div>
          <i class="fas fa-thermometer-quarter"></i> Lowest:{" "}
          {Math.round(props.info.lowest)}°c
        </div>
        <div>
          <i class="fas fa-wind"></i> Wind: {Math.round(props.info.wind)} km/h
        </div>
        <div>
          <i class="fas fa-tint"></i> Humidity:{" "}
          {Math.round(props.info.humidity)}%
        </div>
      </div>
    </div>
  );
}
