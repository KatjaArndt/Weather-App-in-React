import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo (props){
    return (<div className ="Weatherinfo">
 {/*<Search />*/}
 <div className="Data">
      <h1 className="city">{props.data.city}</h1>
      <h2>
        Last updated:{" "}
   
        <FormattedDate date={props.data.date} />
 
      </h2>
    </div>
     {/*<Data />*/}
     <div className="CurrentWeather">
      <div className="row">
        <div className="col-sm-7">
          <div className="currentTemperature">
          
           
                  <WeatherIcon code={props.data.icon} />
              

            <span className="current-temperature">{props.data.temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-sm-5">
          <ul>
            <li>
            Conditions:<span className="description"> {props.data.description}</span>
            </li>
            <li>
              Humidity: <span className="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span className="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    );
}