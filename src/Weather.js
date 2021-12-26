import React, { useState } from "react";
import axios from "axios";

import CurrentDate from "./CurrentDate";
import DefaultCity from "./DefaultCity";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeatherData({
      temperature: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      highest: response.data.main.temp_max,
      lowest: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `252a76efb5ff0f5ccce232674a26dbf8`;
    let unit = `metric`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(url).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city here..."
        autoFocus={true}
        autoCorrect="false"
        className="input"
        onChange={updateCity}
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
  );

  if (loaded) {
    return (
      <div>
        {form}
        <br />
        <p className="weatherInCity">The weather in {city}</p>
        <CurrentDate />
        <div className="container">
          <div className="row temperatureDisplay">
            <div className="col-5 align-self-start pb-2">
              <h3 className="weatherCondition">{weatherData.description}</h3>
            </div>
            <div className="col-2 align-self-end">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="icon"
              />
            </div>
            <div className="col-5 align-self-start">
              <span className="currentTemperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units"> °C | °F</span>
            </div>
          </div>
        </div>

        <div className="highestLowestWindHumidity">
          <div>Highest: {Math.round(weatherData.highest)}°c</div>
          <div>Lowest: {Math.round(weatherData.lowest)}°c</div>
          <div>Wind: {Math.round(weatherData.wind)} km/h</div>
          <div>Humidity: {Math.round(weatherData.humidity)}%</div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <DefaultCity />
      </div>
    );
  }
}
