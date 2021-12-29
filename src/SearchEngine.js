import React, { useState } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

import WeatherData from "./WeatherData";
import ForecastDay from "./ForecastWeek";

import "./SearchEngine.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      feelsLike: response.data.main.feels_like,
      highest: response.data.main.temp_max,
      lowest: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleUpdateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `252a76efb5ff0f5ccce232674a26dbf8`;
    let unit = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="searchBar" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city here..."
            autoFocus="on"
            autoCorrect="false"
            className="input"
            onChange={handleUpdateCity}
          />
          <input type="submit" value="Search" className="searchButton" />
          <div>
            <button className="currentLocation">
              <div>
                My Location <i className="fas fa-map-pin"></i>
              </div>
            </button>
          </div>
        </form>
        <WeatherData info={weatherData} />
        <ForecastDay coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
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
