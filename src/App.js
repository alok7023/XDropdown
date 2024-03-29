import "./App.css";
import React, { useState, useEffect } from "react";
const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["delhi", "mumbai"],
  },
  {
    name: "Pakistan",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chitagong"],
  },
];
function App() {
  const [country, setCountry] = useState();
  console.log(country);
  return (
    <div className="App">
      <h1>Dropdown Example</h1>
      <select value={country} onChange={(e) => setCountry(e.target.value)}>
        <option>Select Country</option>
        {countries.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <select>
        <option>Select City</option>
        {countries[country] &&
          countries[country].cities.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
      </select>
    </div>
  );
}

export default App;
