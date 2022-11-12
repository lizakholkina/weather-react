import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <div className="currently-city">
        <h2>{props.data.city}</h2>
        <h3>
          <FormattedDate date={props.data.date} />
        </h3>
        {/* <button className="current-location-button">Current Location</button> */}
      </div>
      <div className="currently-weather">
        <div className="row">
          <div className="col">
            <div className="col-12">
              <p className="humidity-class" id="humidity">
                Humidity {props.data.humidity}%
              </p>
            </div>
            <div className="col-12">
              <p id="wind">Wind {props.data.wind} km/h</p>
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
              <h1 id="temperature">{Math.round(props.data.temperature)}°C</h1>
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
                {props.data.description}{" "}
              </h2>
            </div>
          </div>
          <div className="col">
            <img src={props.data.icon} alt="" id="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
