import React from "react";

import "./ForecastDay.css";

import AnimatedWeatherIcon from "./AnimatedWeatherIcon";

export default function ForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°c`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°c`;
  }

  function day() {
    let date = new Date(
      new Date(props.data.dt * 1000).setDate(
        new Date(props.data.dt * 1000).getDate() + 1
      )
    );
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }
  return (
    <div className="ForecastDay">
      <div className="mt-2 mb-3">{day()}</div>
      <AnimatedWeatherIcon code={props.data.weather[0].icon} size={54} />
      <div className="ForecastTemperatures mt-2">
        <span className="ForeacastTemperature-Max">{maxTemp()}</span> |
        <span className="ForecastTemperature-Min"> {minTemp()}</span>
      </div>
    </div>
  );
}
