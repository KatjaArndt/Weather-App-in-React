import React from "react";
//import Search from "./Search";
//import Forecast from "./Forecast";
//import CurrentWeather from "./CurrentWeather";
//import Data from "./Data";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container-app container-sm">
        <div className="row">
          <div className="container-current-temperature">
          <div className="Search">
      <div className="search-engine">
        <form className="search-city">
          <div className="row align-items-center  gx-0">
            <div className="col-sm py-1 px-1">
              <input
                type="text"
                className="btn btn-light city-text"
                placeholder="select city 🌍"
              />
            </div>
            <div className="col-sm py-1 px-1">
              <input
                type="submit"
                className="btn btn-light submit-button"
                value="    Search 🔎    "
              />
            </div>
            <div className="col-sm py-1 px-1">
              <button type="button" className="btn btn-light location-button">
                {" "}
                My Location 📍{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>

            {/*<Search />*/}
             <div className="Data">
      <h1 class="city">New York</h1>
      <h2>
        Last updated:
        <span class="date"> Saturday 06:42</span>
      </h2>
    </div>
            {/*<Data />*/}
            <div className="CurrentWeather">
      <div class="row">
        <div class="col-sm-8">
          <div class="currentTemperature">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              className="icon"
              alt="Clear Sky"
            />
            <span class="current-temperature">10</span>
            <span class="units">°C</span>
          </div>
        </div>
        <div class="col-sm-4">
          <ul>
            <li>
              <span class="description">Clear Sky</span>
            </li>
            <li>
              Humidity: <span class="humidity">80</span>%
            </li>
            <li>
              Wind: <span class="wind">5</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
            {/*<CurrentWeather />*/}
          </div>
          <div className="Forecast">
      <div className="weather-forecast forecast">Forecast</div>
    </div>
          {/*<Forecast />*/}
        </div>
      </div>
    </div>
  );
}
