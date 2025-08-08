import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import type { WeatherData } from "../extra/Api";
import "./CityCard.css";

const CityCard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const weather = (location.state as { weather: WeatherData })?.weather;

  if (!weather) return <p className="text-center">No data available.</p>;

  return (
    <div className="container py-5">
      <div className="card shadow-lg bg-dark text-white text-center rounded-4 border-0">
        <div className="card-body">
          <h3 className="card-title fw-bold display-6">{weather.name}</h3>

          <div className="mb-3">
            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
              alt="weather icon"
              className="img-fluid"
              style={{ width: "180px" }}
            />
            <h1 className="display-1 fw-bold mb-3">
              {Math.round(weather.main.temp)}°
            </h1>
          </div>

          <p>{weather.weather[0].main}°C</p>

          <div className="glass-row">
            <p className="mb-1">
              <strong>Wind Speed:</strong> {weather.wind.speed} m/s
            </p>
          </div>

          <div className="glass-row">
            <p className="mb-1">
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
          </div>

          <div className="glass-row">
            <p className="mb-1">
              <strong>Rain:</strong> {weather.coord.lat}
            </p>
          </div>

          <div className="glass-row">
            <p className="mb-1">
              <strong>Sea Level:</strong> {weather.main.sea_level} m
            </p>
          </div>

          <div className="glass-row">
            <p className="mb-1">
              <strong>Humidity:</strong> {weather.main.humidity}%
            </p>
          </div>

          <button
            className="btn btn-outline-light rounded-pill px-4"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CityCard;
