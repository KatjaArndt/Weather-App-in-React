import React from "react";
import "./search.css";
export default function Search() {
  return (
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
  );
}
