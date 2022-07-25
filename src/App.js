import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York"/>
        <footer>
          This project is coded by Catarina Vicente and is{" "}
          <a href="https://github.com/catev98/react-weather-app">
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
