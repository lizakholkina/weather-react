import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  function displayForecast(response) {
    console.log(response.data);
  }
  let apiKey = "7917ebc82cf63d690dd0000ac2ff6bd6";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrlForecast).then(displayForecast);
  return (
    <div className="week_whether" id="forecast">
      <ul>
        <li>
          SUN
          <br />
          <p>
            21 ° <small>11 °</small>
          </p>
          <WeatherIcon code="01d" size={64} />
        </li>
      </ul>
    </div>
  );
}
