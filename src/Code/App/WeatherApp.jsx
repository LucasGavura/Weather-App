import React from 'react';
import './WeatherApp.css';

//importing the images
import drizzle_icon from '../Images/Drizzle.png';
import humidity_icon from '../Images/Humidity.png';
import partlyCloudy_icon from '../Images/PartlyCloudy.png';
import rain_icon from '../Images/Rain.png';
import search_icon from '../Images/Search.png';
import snow_icon from '../Images/Snow.png';
import snowstorm_icon from '../Images/SnowStorm.png';
import storm_icon from '../Images/Storm.png';
import sunny_icon from '../Images/Sunny.png';
import wind_icon from '../Images/Wind.png';

const Weather = () => {

    let api = "b9b195fcaa328638617ed17e0d4cb234";

    const search = () => {
        const query = document.getElementsByClassName("locationInput");
        if(query[0].value==="") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${query[0].value}&units=Metric&appid=${api}`;

    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="locationInput" placeholder='Search'/>
                <div className="search-icon" on onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={partlyCloudy_icon} alt="" />
            </div>
            <div className="weather-temp">-50°C</div>
            <div className="weather-location">Ottawa</div>
            <div className="data-container">
                <div className="elem">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind">15%</div>
                        <div className="displayText">Humidity</div>
                    </div>
                </div>
                <div className="elem">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity">20Km/h</div>
                        <div className="displayText">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;