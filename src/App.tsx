import { useEffect, useState } from "react";
import "./App.css";
import { fetchWeather, type WeatherData } from "./extra/Api";
import WeatherDetails from "./components/WeatherDetails";
import { useNavigate } from "react-router";

function App() {
  const [weather, setWeather] = useState<WeatherData>();
  const [cityName, setCityName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadWeather = async () => {
      try {
        const data = await fetchWeather("colombo");
        setWeather(data);
      } catch (error) {
        console.error(error);
      }
    };
    loadWeather();
  }, []);

  const handleSearch = async () => {
    if (!cityName.trim()) return;
    try {
      const data = await fetchWeather(cityName);
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleWeatherClick = () => {
    if (weather) {
      navigate("/city", { state: { weather } });
    }
  };

  return (
    <>
      <div className="container ">
        <div className="text-center mb-4">
          <h2 className="fw-bold display-5 text-white">Weather</h2>
          <p className="text-white"> Search any city for live weather data</p>
        </div>
        <div className=" mb-4">
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2 rounded-pill px-4 py-2"
              placeholder="Search here..."
              value={cityName}
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
            <button
              className="btn btn-warning rounded-pill px-4"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div>
          {weather && (
            <div className="row justify-content-center">
              <div className="">
                <WeatherDetails
                  weather={weather}
                  onClick={handleWeatherClick}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
