import React, { useState, useEffect, useRef } from "react";
import sunnyIcon from "./assets/sunny.png";
import rainyIcon from "./assets/rainy.png";
import cloudyIcon from "./assets/cloudy.png";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const locationInputRef = useRef(null);

  // Fetch weather data
  useEffect(() => {
    // Fetch mock weather data (you can replace with a real API later)
    const mockData = {
      current: { condition: "sunny", temperature: 30 },
      forecast: [
        { day: "Mon", condition: "sunny", temperature: 28 },
        { day: "Tue", condition: "cloudy", temperature: 25 },
        { day: "Wed", condition: "rainy", temperature: 22 },
        { day: "Thu", condition: "sunny", temperature: 30 },
        { day: "Fri", condition: "cloudy", temperature: 26 },
        { day: "Sat", condition: "rainy", temperature: 24 },
        { day: "Sun", condition: "sunny", temperature: 28 },
      ],
    };
    setWeatherData(mockData);
  }, []);

  // Focus input on page load
  useEffect(() => {
    locationInputRef.current.focus();
  }, []);

  const handleSearch = () => {
    // Implement logic for handling search (e.g., fetch weather data for location)
    console.log("Search for weather in", location);
  };

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "sunny":
        return sunnyIcon;
      case "rainy":
        return rainyIcon;
      case "cloudy":
        return cloudyIcon;
      default:
        return sunnyIcon;
    }
  };

  return (
    <div className="weather-dashboard">
      <div className="location-search">
        <input
          type="text"
          ref={locationInputRef}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {weatherData && (
        <div className="weather-info">
          <h1>Current Weather</h1>
          <div>
            <img
              src={getWeatherIcon(weatherData.current.condition)}
              alt={weatherData.current.condition}
            />
            <p>{weatherData.current.condition}</p>
            <p>{weatherData.current.temperature}°C</p>
          </div>

          <h2>Weekly Forecast</h2>
          <ul>
            {weatherData.forecast.map((day, index) => (
              <li key={index}>
                <p>{day.day}</p>
                <img src={getWeatherIcon(day.condition)} alt={day.condition} />
                <p>{day.temperature}°C</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Weather;
