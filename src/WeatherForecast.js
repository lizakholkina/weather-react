import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="week_whether" id="forecast">
        <ul>
          <WeatherForecastDay data={forecast[0]} />
        </ul>
      </div>
    );
  } else {
    let apiKey = "7917ebc82cf63d690dd0000ac2ff6bd6";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrlForecast).then(displayForecast);
    return null;
  }
}
