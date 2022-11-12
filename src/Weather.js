import "./App.css";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      date: new Date(response.data.dt * 1000),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      ready: true,
    });
  }

  function search() {
    let apiKey = "7917ebc82cf63d690dd0000ac2ff6bd6";
    let unit = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={handleSubmit} action="" className="search-bar">
              <input
                onChange={handleCityChange}
                type="text"
                placeholder="Enter your city"
                autoFocus="on"
              />
              <button type="submit">
                <img src="search_icon.png" alt="icon" width="15px" />
              </button>
            </form>
          </div>
          <div className="col-1">
            <a href="#" id="kyiv">
              Kyiv
            </a>
          </div>
          <div className="col-1">
            <a href="#" id="warsaw">
              Warsaw
            </a>
          </div>
          <div className="col-1">
            <a href="#" id="paris">
              Paris
            </a>
          </div>
          <div className="col-1">
            <a href="#" id="london">
              London
            </a>
          </div>
        </div>
        <WeatherInfo data={weatherData} />

        <p className="link">
          <a
            href="https://github.com/lizakholkina/weather-react"
            target="_blank"
          >
            <img src="github.png" alt="github" className="github-img" />
          </a>
          GitHub repositoty by Kholkina Yelizaveta
        </p>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
