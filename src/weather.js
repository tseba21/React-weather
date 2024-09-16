import React from "react";
import "./App.js";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
export default function weather() {
  return (
    <div className="container weather-app">
      <header>
        <form id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            className="search-input"
            id="search-input"
          />
          <input type="submit" value="Search" className="search-button" />
        </form>

        <div className="row">
          <div className="col">
            <h1 className=" current-city">Addis Ababa</h1>

            <div className="current-weather d-flex ">
              <p>
                Monday 00:58, thunder,rain
                <br />
                Humidity: 90%, Wind: 6.17km/h
              </p>

              <div className="col current-temperature d-flex justify-content-end">
                🌩 17°C
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="row current-temperature-icon">
        <div className="col ">
          mon
          <br />
          🌩
          <p>17°C</p>
        </div>
        <div className="col ">
          tus
          <br />
          🌤
          <p>14°C</p>
        </div>
        <div className="col">
          wed
          <br />☀<p>27°C</p>
        </div>
        <div className="col">
          thu
          <br />❄<p> 4°C</p>
        </div>
        <div className="col">
          fri
          <br />
          🌧
          <p>19°C</p>
        </div>
      </div>
    </div>
  );
}
