import React, { useState } from "react";
//import Search from "./Search";
//import Forecast from "./Forecast";
//import CurrentWeather from "./CurrentWeather";
//import Data from "./Data";
import axios from "axios";
import "./weather.css";
import FormattedDate from "./FormattedDate.js";

export default function Weather(props) {
  const [weather, setWeather] =useState("{loaded: false}");
 
function showWeather(response){
  
  setWeather ({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      loaded: true,
  })

}
    if(weather.loaded === true){
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
      <h1 className="city">{weather.city}</h1>
      <h2>
        Last updated:{" "}
   
        <FormattedDate date={weather.date} />
 
      </h2>
    </div>
            {/*<Data />*/}
            <div className="CurrentWeather">
      <div className="row">
        <div className="col-sm-8">
          <div className="currentTemperature">
            <img
              src={weather.icon}
              className="icon"
              alt={weather.description}
            />
            <span className="current-temperature">{weather.temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-sm-4">
          <ul>
            <li>
            Conditions:<span className="description"> {weather.description}</span>
            </li>
            <li>
              Humidity: <span className="humidity">{weather.humidity}</span>%
            </li>
            <li>
              Wind: <span className="wind">{weather.wind}</span> km/h
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
    else{
      const apiKey = "f143df7f1b181bffea844af95239068d";
      let units = "metric";
      let apicity = `${props.defaultCity}`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${apicity}&appid=${apiKey}&units=${units}`;
      axios.get(apiUrl).then(showWeather);
      return "Loading";
    }
 
}
