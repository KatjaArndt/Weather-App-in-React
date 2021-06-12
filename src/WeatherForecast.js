import React, { useState } from "react";

import WeatherForecastDay from "./WeatherForecastDay.js";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function showForecast(response){
setForecast(response.data.daily);
setLoaded(true);
  }
  if (loaded){
    return (
      <div className="WeatherForecast">
        <div className="weather-forecast forecast">
        <div class="row">
        <div class="col">
       <WeatherForecastDay data={forecast[0]} />
        </div>
        </div>
        </div>
      </div>
    );
 
  }
  else {
    const apiKey = "f143df7f1b181bffea844af95239068d";
    let units = "metric";
    let longitude =props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showForecast);
    return null;
   
  }

}
