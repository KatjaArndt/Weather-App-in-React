import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function Weatherinfo (props){
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
        <div className="col-sm-8">
          <div className="currentTemperature">
            <img
              src={props.data.icon}
              className="icon"
              alt={props.data.description}
            />
            <span className="current-temperature">{props.data.temperature}</span>
            <span className="units">°C</span>
          </div>
        </div>
        <div className="col-sm-4">
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