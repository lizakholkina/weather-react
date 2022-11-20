import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

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
          </div>
          <div className="col">
            <div className="degree">
              <WeatherUnits celsius={props.data.temperature} />
              <h2 id="description" className="text-capitalize">
                {props.data.description}
              </h2>
            </div>
          </div>
          <div className="col">
            <div className="text-center mt-4">
              <WeatherIcon code={props.data.icon} size={110} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
