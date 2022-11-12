import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      date: "Saturday, November 5, 2022, 18:48",
      icon: "01d.png",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      ready: true,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form action="" className="search-bar">
              <input type="text" placeholder="Enter your city" autoFocus="on" />
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
        <div className="currently-city">
          <h2>{weatherData.city}</h2>
          <h3>{weatherData.date}</h3>
          <button className="current-location-button">Current Location</button>
        </div>
        <div className="currently-weather">
          <div className="row">
            <div className="col">
              <div className="col-12">
                <p className="humidity-class" id="humidity">
                  Humidity {weatherData.humidity}%
                </p>
              </div>
              <div className="col-12">
                <p id="wind">Wind {weatherData.wind} km/h</p>
              </div>
              <div className="row">
                <div className="col">
                  <p id="sunrise">
                    Sunrise <br /> 05:33
                  </p>
                </div>
                <div className="col">
                  <p id="sunset">
                    Sunset <br /> 19:10
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="degree">
                <h1 id="temperature">
                  {Math.round(weatherData.temperature)}°C
                </h1>
                <span className="units">
                  <a href="#" id="celsius">
                    °C
                  </a>
                  |
                  <a href="#" id="fahrenheit">
                    °F
                  </a>
                </span>
                <h2 id="description" className="text-capitalize">
                  {" "}
                  {weatherData.description}{" "}
                </h2>
              </div>
            </div>
            <div className="col">
              <img src={weatherData.icon} alt="" id="icon" />
            </div>
          </div>
        </div>
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
    let apiKey = "7917ebc82cf63d690dd0000ac2ff6bd6";
    let unit = "metric";
    let city = "Lviv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

export default Weather;
