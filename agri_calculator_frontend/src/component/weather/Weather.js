import React, { useState, useEffect } from "react"
import axios from "axios"

function Weather() {
  const [weatherData, setWeatherData] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [searched, setSearched] = useState(false)
  const [forecastDays, setForecastDays] = useState(1) // Default to 1 day forecast

  useEffect(() => {
    fetchWeatherData()
  }, [])

  const fetchWeatherData = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?q=${searchQuery}&days=14&hour=24&key=8e97678ec43945a6bae62257241602`
      )
      .then((response) => {
        setWeatherData(response.data)
        setSearched(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleSearch = () => {
    fetchWeatherData()
  }

  // Function to generate a random color
  const getRandomColor = () => {
    const colors = [
      "bg-success",
      "bg-danger",
  
  
    ]
    const randomIndex = Math.floor(Math.random() * colors.length)
    return colors[randomIndex]
  }

  return (
    <div>
      <div
        className="container"
        // style={{ background: "linear-gradient(to bottom, #EB7835, #F7E3D3)" }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "10vh" }}
        >
          <h3
            style={{
              fontFamily: "Helvetica",

              fontSize: "24px",
            }}
          >
            <b>Get Weather update for up to 14 days in the future from today</b>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3 mt-4">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <br />
        {searched && (
          <div className="row mt-4">
            <div className="col-md-6 offset-md-3">
              <div
                className="card text-white mb-3"
                style={{
                  background: "linear-gradient(to bottom, #FC7046, #DBC069)",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    fontFamily: "Helvetica",

                    fontSize: "14px",
                  }}
                >
                  <h1 className="text-center">Current Weather</h1>
                  <div className="text-center">
                    <h4>
                      Condition: {weatherData.current?.condition?.text}{" "}
                      <img
                        src={weatherData.current?.condition?.icon}
                        alt="Weather Icon"
                      />
                    </h4>
                    <h4>Location: {weatherData.location?.name}</h4>
                    <h4>Country: {weatherData.location?.country}</h4>
                    <h4>Local Time: {weatherData.location?.localtime}</h4>
                    <h4>Temperature: {weatherData.current?.temp_c}°C</h4>
                    <h4>Wind Speed: {weatherData.current?.wind_kph}km/h</h4>
                    <h4>Humidity: {weatherData.current?.humidity}%</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {searched && (
          <div className="row mt-4">
            {weatherData.forecast?.forecastday.slice(1).map((day, index) => (
              <div key={index} className="col-md-3">
                <div
                  className={`card  text-dark mb-3  rounded`}
                  style={{
                    fontFamily: "Candara",
                    background: "linear-gradient(to bottom, #4F5697, #7493C2)",
                    fontSize: "14px",
                  }}
                >
                  <div className="card-body">
                    <h2 className=" text-center" style={{ color: "white" }}>
                      Future Forecast
                    </h2>
                    <div className="text-center" style={{ color: "white" }}>
                      <img src={day.day?.condition?.icon} alt="Weather Icon" />
                      <h4>Date: {day.date}</h4>
                      <h4>Condition: {day.day?.condition?.text}</h4>
                      <h4>Max Temperature: {day.day?.maxtemp_c}°C</h4>
                      <h4>Min Temperature: {day.day?.mintemp_c}°C</h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <br />
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather
