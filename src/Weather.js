import "./App.css";
import axios from "axios";
function Weather() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form action="" className="search-bar">
            <input type="text" placeholder="Enter your city" />
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
        <h2>Lviv</h2>
        <h3>Saturday, November 5, 2022, 18:48</h3>
        <button className="current-location-button">Current Location</button>
      </div>
      <div className="currently-weather">
        <div className="row">
          <div className="col">
            <div className="col-12">
              <p className="humidity-class" id="humidity">
                Humidity 46%
              </p>
            </div>
            <div className="col-12">
              <p id="wind">Wind 3.08 km/h</p>
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
              <h1 id="temperature">10°C</h1>
              <span className="units">
                <a href="#" id="celsius">
                  °C
                </a>
                |
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </span>
              <h2 id="description"> Sunny </h2>
            </div>
          </div>
          <div className="col">
            <img src="01d.png" alt="" id="icon" />
          </div>
        </div>
      </div>
      <p className="link">
        <a href="https://github.com/lizakholkina/weather-react" target="_blank">
          <img src="github.png" alt="github" className="github-img" />
        </a>
        GitHub repositoty by Kholkina Yelizaveta
      </p>
    </div>
  );
}

export default Weather;
