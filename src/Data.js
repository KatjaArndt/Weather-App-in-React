import React from "react";
import "./data.css";
export default function Data() {
  let weatherData = {
    city: "New York",
    date: "Saturday 06:42"
  };
  return (
    <div className="Data">
      <h1 class="city">{weatherData.city}</h1>
      <h2>
        Last updated:
        <span class="date"> {weatherData.date}</span>
      </h2>
    </div>
  );
}
