import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({ className }) => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=a4b9f73e8c5c7e5100a358eb5c98a9ee"
    )
      .then((res) => res.json())
      .then(({ name, main, weather }) => {
        setCity(name);
        setTemperature(Math.round(main.temp));
        setWeather(weather[0].description);
      });
  }, []);
  return (
    <footer className={className}>
      <div>
        <div>веб разработчик </div>
        <div>емайл</div>
      </div>
      <div>
        <div>город: {city}</div>
        <div>температура: {temperature}</div>
        <div>погода: {weather}</div>
      </div>
    </footer>
  );
};

export const Footer = styled(FooterContainer)`
  height: 150px;
  width: 1000px;
  background-color: white;
  padding: 20px 40px;
  top: 0;
  box-shadow: 0 2px 15px #000;
  display: flex;
  justify-content: space-between;
`;
