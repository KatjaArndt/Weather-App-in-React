import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="Data">
        <h1 className="city">{props.data.city}</h1>
        <h2>
          Last updated: <FormattedDate date={props.data.date} />
        </h2>
      </div>

      <div className="CurrentWeather">
        <div className="row">
          <div className="col-sm-7">
            <div className="currentTemperature">
              <WeatherTemperature celsius={props.data.temperature} />
              <WeatherIcon code={props.data.icon} size={80} />
            </div>
          </div>
          <div className="col-sm-5">
            <ul>
              <li>
                <strong>Conditions:&nbsp;</strong>
                <span className="description">{props.data.description}</span>
              </li>
              <li>
                <strong>Humidity:&nbsp;</strong>
                <span className="humidity">{props.data.humidity}&nbsp;%</span>
              </li>
              <li>
                <strong>Wind:&nbsp;</strong>
                <span className="wind">{props.data.wind}&nbsp;km/h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
