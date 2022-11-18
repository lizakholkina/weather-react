import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="week_whether" id="forecast">
      <ul>
        <li>
          SUN
          <br />
          <p>
            21 ° <small>11 °</small>
          </p>
          <WeatherIcon code="01d" />
        </li>
      </ul>
    </div>
  );
}
