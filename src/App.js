import React, { Component } from "react";
import "./App.css";
import { get } from "http";

const Cities = [
  { name: "Bangkok", lat: 13.75, long: 100.5166 },
  { name: "Hanoi", lat: 21.0333, long: 105.85 },
  { name: "Ho Chi Minh City", lat: 10.78, long: 106.695 },
  { name: "Montreal", lat: 45.5, long: -73.5833 },
  { name: "Beijing", lat: 39.9289, long: 116.3883 },
  { name: "Berlin", lat: 52.5218, long: 13.4015 },
  { name: "Paris", lat: 48.8667, long: 2.3333 },
  { name: "Mumbai", lat: 19.017, long: 72.857 },
  { name: "Atlantic City", lat: 39.3797, long: -74.4527 },
  { name: "New York", lat: 40.6943, long: -73.9249 }
];
export class App extends Component {
  state = {
    isloading: true,
    country: "",
    name: "",
    temp: "",
    description: ""
  };
  componentDidMount() {
    console.log("helllo");
    // this.getWeather();
  }
  //  const tempConverter = temperature => {
  //     return (temperatureC = (temperature - 273.15).toFixed(2));
  //     // const temperatureF = (((temperature - 273.15) * 9) / 5 + 32).toFixed(2);
  //   };
  async getWeather(lat, lon) {
    console.log("Click happened", lat, lon);

    const API_KEY = "29497808dbb34d2b820f02e8e3648dd4";
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;
    let response = await fetch(url);
    let jsonData = await response.json();
    console.log("weather jasion data", jsonData);
    // console.log("temparature in Kelvin", tempConverter(jsonData.main.temp));
    this.setState({
      isloading: true,
      country: jsonData.sys.country,
      name: jsonData.name,
      temp: jsonData.main.temp,
      description: jsonData.weather[0].description
    });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <div class="nav-wrapper teal lighten-1">
            <a href="#" class="brand-logo center">
              Weather App
            </a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Cities</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row container">
          <div className="card-panel teal lighten-2 ">
            <h3 className="white-text">Weather App</h3>
          </div>

          {false ? (
            <h3>I am Loading</h3>
          ) : (
            <div className="card-panel teal lighten-4">
              <h5>{this.state.name}</h5>
              <h5>{this.state.temp}</h5>
              <h5>{this.state.description}</h5>{" "}
            </div>
          )}
          {Cities.map(el => {
            return (
              <button
                onClick={() => this.getWeather(el.lat, el.long)}
                className="btn btn-small waves-effect waves-green "
              >
                {el.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
