import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '002667202323dd4dac052238aa34657f';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const handleSearch = () => {
    if (city) {
      axios
        .get(apiUrl)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data: ', error);
        });
    } 
  };

  


  useEffect(() => {
    handleSearch();
  }, [city]);

  return (
    <div className="bg">
      <div className="weatherBg1">
        <h1 className='title'>Weather app</h1>
        <div className="searchPart">
          <span className="searchIcon">&#128269;</span>
          <input
            type="text"
            placeholder='Search...'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          
        </div>
      </div>

      <div className="box">
        <img
          className="icon"
          src={`https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png`}
          alt="pic1"
        />


{city ? (
  <>
    <h5 className='city'>{weatherData.name}</h5>
    <h6 className='temp'>{weatherData?.main.temp}&deg; C</h6>
  </>
) : (
  <p className='emptyCity'>Enter city</p>
)}

        
        
      </div>
    </div>
  );
}

export default App;

