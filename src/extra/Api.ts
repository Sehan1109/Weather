export interface WeatherData {
  id: number;
  name: string;
  main: {
    feels_like: number;
    humidity: number;
    temp: number;
    sea_level: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      main: string;
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
}

const apiKey = import.meta.env.VITE_WEATHER_API_KEY || "";

export async function fetchWeather(city: string): Promise<WeatherData> {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data = await response.json();
  console.log(data);
  return data;
}
