import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

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
          
           
                  
              
<WeatherTemperature celsius = {props.data.temperature}/>
           <WeatherIcon code={props.data.icon} size={62} />
          </div>
        </div>
        <div className="col-sm-5">
          <ul>
            <li>
            <strong>Conditions:
              </strong><span className="description"> {props.data.description}</span>
            </li>
            <li>
              <strong>Humidity:
                </strong> <span className="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              <strong>Wind:
                </strong> <span className="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    );
}