import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}  °`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}  °`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }
  return (
    <div className="dayForecast">
      <li>
        {day()}
        <br />
        <p>
          {maxTemperature()} <small> {minTemperature()}</small>
        </p>
        <WeatherIcon code={props.data.weather[0].icon} size={80} />
      </li>
    </div>
  );
}
