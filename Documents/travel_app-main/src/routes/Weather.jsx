import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  let icon = <span className="material-symbols-outlined main">search</span>;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=915afcea80d6c40bbcadf43932ea1b11`;

  const SearchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((res) => {
        setData(res.data);
      });
      setLocation("");
    }
  };

  if (data.weather && data.weather[0].main === "Clear") {
    icon = <span className="material-symbols-outlined main">sunny</span>;
  } else if (data.weather && data.weather[0].main === "Clouds") {
    icon = <span className="material-symbols-outlined main">cloud</span>;
  } else if (data.weather && data.weather[0].main === "Rain") {
    icon = <span className="material-symbols-outlined main">rainy</span>;
  }

  return (
    <>
      <Header />
      <div className="weather-app">
        <div className="weather-container">
          <div className="top">
            <h2>Check the weather in your destination</h2>
            <div className="search">
              <input
                type="text"
                placeholder="Enter destination"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                onKeyPress={SearchLocation}
              ></input>
            </div>
            <div className="location"></div>
            {data.name ? <p>{data.name}</p> : null}
            <div className="temp">
              {data.main ? <h2>{data.main.temp}°C</h2> : null}
            </div>
            <div className="description">
              {data.weather ? <p>{data.weather[0].main}</p> : null}
              <span className="material-symbols-outlined main">{icon}</span>
            </div>
          </div>

          {data.name != undefined && (
            <div className="bottom">
              <div className="feels">
                <h3>Feels like</h3>
                <span className="material-symbols-outlined">thermostat</span>
                {data.main ? <p>{data.main.feels_like}°C</p> : null}
              </div>
              <div className="humidity">
                <h3>Humidity</h3>
                <span className="material-symbols-outlined">water</span>
                {data.main ? <p>{data.main.humidity} %</p> : null}
              </div>
              <div className="wind">
                <h3>Wind</h3>
                <span className="material-symbols-outlined">air</span>
                {data.wind ? <p>{data.wind.speed} m/s</p> : null}
              </div>
            </div>
          )}
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
        <Footer />
      </div>
    </>
  );
};

export default Weather;
