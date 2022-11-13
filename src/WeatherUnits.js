import React, { useState } from "react";

export default function WeatherUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weatherTemperature">
        <h1 id="temperature">{Math.round(props.celsius)}°C</h1>
        <span className="units">
          <a href="#" id="celsius">
            °C
          </a>
          |
          <a onClick={convertToFahrenheit} href="#" id="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <h1 id="temperature">{Math.round(fahrenheit())}°F</h1>
        <span className="units">
          <a onClick={convertToCelsius} href="#" id="celsius">
            °C
          </a>
          |
          <a href="#" id="fahrenheit">
            °F
          </a>
        </span>
      </div>
    );
  }
}
