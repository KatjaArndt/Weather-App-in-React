import React from "react";
import Search from "./Search";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import Data from "./Data";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container-app container-sm">
        <div className="row">
          <div className="container-current-temperature">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6z3OP1d5H6wJ5aWXrveUFkH3YoLnlmdLcA&usqp=CAU"
              alt="pin"
              class="pin1"
            />
            <div class="clear"></div>

            <Search />
            <Data />
            <CurrentWeather />
          </div>

          <Forecast />
        </div>
      </div>
    </div>
  );
}
