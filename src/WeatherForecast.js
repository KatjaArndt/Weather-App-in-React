import React from "react";
import WeatherIcon from "./WeatherIcon.js";

//import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="weather-forecast forecast">
      <div class="row">
      <div class="col">
        <div class="weather-forecast-day">Mon</div>
        <WeatherIcon code="01d"/>
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 20° </span>
          <span class="weather-forecast-temperature-min"> 10° </span>
        </div>
      </div>
      </div>
      
      </div>
    </div>
  );
}
