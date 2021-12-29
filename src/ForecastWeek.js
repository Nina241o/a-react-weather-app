import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import "./ForecastWeek.css";

import ForecastDay from "./ForecastDay";

export default function ForecastWeek(props) {
  let [forecastLoaded, setForecastLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setForecastLoaded(false);
  }, [props.coordinates])

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setForecastLoaded(true);
  }

  function loadForecast() {
    let apiKey = "252a76efb5ff0f5ccce232674a26dbf8";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  if (forecastLoaded) {
    return (
      <div className="Forecast">
        <h3>weather forecast for the upcoming week</h3>
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="col" key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    loadForecast()

    return (
      <Loader
        type="Circles"
        color="#ffffff"
        opacity="0.8"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
}
