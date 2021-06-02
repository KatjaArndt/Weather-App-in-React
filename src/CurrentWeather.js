import React from "react";
import "./currentweather.css";
export default function CurrentWeather() {
  let weatherData = {
    temperature: 30,
    description: "Clear Sky",
    humidity: 80,
    wind: 10,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
  };
  return (
    <div className="CurrentWeather">
      <div class="row">
        <div class="col-sm-8">
          <div class="currentTemperature">
            <img
              src={weatherData.imgUrl}
              className="icon"
              alt={weatherData.description}
            />
            <span class="current-temperature">{weatherData.temperature}</span>
            <span class="units">°C</span>
          </div>
        </div>
        <div class="col-sm-4">
          <ul>
            <li>
              <span class="description">{weatherData.description}</span>
            </li>
            <li>
              Humidity: <span class="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span class="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
