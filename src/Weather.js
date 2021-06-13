import React, { useState } from "react";
import WeatherForecast from "./WeatherForecast.js";
import axios from "axios";
import "./weather.css";
import WeatherInfo from "./WeatherInfo.js";

export default function Weather(props) {
  const [weather, setWeather] =useState("{loaded: false}");
  const [city, setCity]=useState(props.defaultCity);
 
function showWeather(response){
  
  setWeather ({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      loaded: true,
  })

}

function search(){
  const apiKey = "f143df7f1b181bffea844af95239068d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function retrievePosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = "f143df7f1b181bffea844af95239068d";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`; 
  axios.get(apiUrl).then(showWeather);
  }

function handleSubmit(event){
  event.preventDefault();
  search();
}

function handleInput(event){
setCity (event.target.value);
}

function getPositionFromDevice(event){
  navigator.geolocation.getCurrentPosition(retrievePosition);
    }

    if(weather.loaded === true){
 return (
    <div className="Weather">
      <div className="container-app container-sm">
        <div className="row">
          <div className="container-current-temperature">
          <div className="Search">
      <div className="search-engine">
        <form onSubmit = {handleSubmit} className="search-city">
                  <div className="row align-items-center  gx-0">
            <div className="col-sm py-1 px-1">
              <input
                type="text"
                className="btn btn-light city-text"
                placeholder="select city 🌍"
                onChange={handleInput}
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
              <button type="button" onClick ={getPositionFromDevice} className="btn btn-light location-button">
                {" "}
                My Location 📍{" "}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
 <WeatherInfo data = {weather}/>
           
   
           
            
          </div>
          <WeatherForecast coordinates={weather.coordinates}/>
          
          
        </div>
      </div>
    </div>
  );
    }
    else{
search();
      return "Loading";
    }
 
}
