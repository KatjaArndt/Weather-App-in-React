import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function showForecast(response){

  }
  const apiKey = "f143df7f1b181bffea844af95239068d";
  let units = "metric";
  let longitude =props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon${longitude}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showForecast);
  return (
    <div className="WeatherForecast">
      <div className="weather-forecast forecast">
      <div class="row">
      <div class="col">
        <div class="weather-forecast-day">Mon</div>
        <WeatherIcon code="01d" size={30}/>
        
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
