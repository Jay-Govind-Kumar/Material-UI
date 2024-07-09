import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "",
    feelsLike: "",
    humidity: "",
    temp: "",
    tempMax: "",
    tempMin: "",
    weather: "",
  });

  let updateInfo = (info) => {
    setWeatherInfo(info);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
