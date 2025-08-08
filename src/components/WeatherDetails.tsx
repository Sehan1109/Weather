import React from "react";
import type { WeatherData } from "../extra/Api";
import "./WeatherDetails.css";

interface Props {
  weather: WeatherData;
  onClick?: () => void;
}

const WeatherDetails: React.FC<Props> = ({ weather, onClick }) => {
  return (
    <div className="container">
      <div
        className="card shadow-lg bg-dark text-white p-4 rounded-4 border-0 "
        onClick={onClick}
        style={{
          cursor: "pointer",
          minHeight: "100px",
          padding: "2rem",
        }}
      >
        <div className="card-body">
          <h3 className="card-title fs-2">{weather.name}</h3>
          <div className="mb-3">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="img-fluid"
              style={{ width: "100px" }}
            />
          </div>
          <h1 className="display-1 fw-bold">
            {Math.round(weather.main.temp)}°
          </h1>
          <p className="lead text-capialize">
            {weather.weather[0].description}
          </p>
          <div className="row mt-4 text-center weather-stats">
            <div className="weather-stats-wind col">
              <p className="mb-1">
                <div>💨</div>
                <strong>{weather.wind.speed} m/s</strong>
              </p>
              <small className="text-gray">Wind</small>
            </div>
            <div className="weather-stats-humi col">
              <p className="mb-1">
                <div>💧</div>
                <strong>{weather.main.humidity}%</strong>
              </p>
              <small className="text-gray ">Humidity</small>
            </div>
            <div className="weather-stats-main col">
              <p className="mb-1">
                <div>🌧</div>
                <strong>{weather.coord.lat}</strong>
              </p>
              <small className="text-gray ">Rain</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
