import React, { useState } from 'react';
import './WeatherApp.css';

//importing the images
import drizzle_icon from '../Images/Drizzle.png';
import haze_icon from '../Images/Haze.png';
import humidity_icon from '../Images/Humidity.png';
import mostlyCloudy_icon from '../Images/MostlyCloudy.png';
import overcast_icon from '../Images/Overcast.png';
import partlyCloudy_icon from '../Images/PartlyCloudy.png';
import rain_icon from '../Images/Rain.png';
import search_icon from '../Images/Search.png';
import snow_icon from '../Images/Snow.png';
import storm_icon from '../Images/Storm.png';
import sunny_icon from '../Images/Sunny.png';
import wind_icon from '../Images/Wind.png';

import sunny_gif from '../Images/Sunny.gif';
import night_gif from '../Images/Night.gif';
import cloudy_gif from '../Images/PartlyCloudy.gif';
import cloudyNight_gif from '../Images/PartlyCloudyNight.gif';
import drizzle_gif from '../Images/Drizzle.gif';
import rain_gif from '../Images/Rain.gif';
import storm_gif from '../Images/Storm.gif';
import snow_gif from '../Images/Snow.gif';
import haze_gif from '../Images/Haze.gif';

const Weather = ( {setWeatherBackground} ) => {

    let api = "b9b195fcaa328638617ed17e0d4cb234"; //please put your unique api key here
    
    const [weatherIcon,setWeatherIcon] = useState(snow_icon);

    const search = async () => {
        const query = document.getElementsByClassName("locationInput");
        if(query[0].value==="") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${query[0].value}&units=Metric&appid=${api}`;
        
        try {
            let response = await fetch(url);
            let data = await response.json();
        
            const humidity =document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-speed");
            const temperature = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");

            humidity[0].innerHTML = data.main.humidity+"%";
            wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
            temperature[0].innerHTML = Math.floor(data.main.temp)+"°C";
            location[0].innerHTML = data.name+", "+data.sys.country;

            switch(data.weather[0].icon) {
                case "01d":
                    setWeatherIcon(sunny_icon); //sunny
                    setWeatherBackground(sunny_gif)
                    break;
                case "01n":
                    setWeatherIcon(sunny_icon); //sunny night
                    setWeatherBackground(night_gif)
                    break;
                case "02d":
                    setWeatherIcon(partlyCloudy_icon); //partly cloudy day
                    setWeatherBackground(cloudy_gif)
                    break;
                case "02n":
                    setWeatherIcon(partlyCloudy_icon); //partly cloudy night
                    setWeatherBackground(cloudyNight_gif)
                    break;
                case "03d":
                    setWeatherIcon(mostlyCloudy_icon); //mostly cloudy
                    setWeatherBackground(cloudy_gif)
                    break;
                case "03n":
                    setWeatherIcon(mostlyCloudy_icon); //mostly cloudy
                    setWeatherBackground(cloudyNight_gif)
                    break;
                case "04d":
                    setWeatherIcon(overcast_icon); //overcast clouds
                    setWeatherBackground(cloudy_gif)
                    break;
                case "04n":
                    setWeatherIcon(overcast_icon); //overcast clouds
                    setWeatherBackground(cloudyNight_gif)
                    break;
                case "09d":
                    setWeatherIcon(drizzle_icon); //drizzle
                    setWeatherBackground(drizzle_gif)
                    break;
                case "09n":
                    setWeatherIcon(drizzle_icon); //drizzle
                    setWeatherBackground(drizzle_gif)
                    break;
                case "10d":
                    setWeatherIcon(rain_icon); //rain
                    setWeatherBackground(rain_gif)
                    break;
                case "10n":
                    setWeatherIcon(rain_icon); //rain
                    setWeatherBackground(rain_gif)
                    break;
                case "11d":
                    setWeatherIcon(storm_icon); //storm
                    setWeatherBackground(storm_gif)
                    break;
                case "11n":
                    setWeatherIcon(storm_icon); //storm
                    setWeatherBackground(storm_gif)
                    break;
                case "13d":
                    setWeatherIcon(snow_icon); //snow
                    setWeatherBackground(snow_gif)
                    break;
                case "13n":
                    setWeatherIcon(snow_icon); //snow
                    setWeatherBackground(snow_gif)
                    break;
                case "50d":
                    setWeatherIcon(haze_icon); //mist / nado / haze
                    setWeatherBackground(haze_gif)
                    break;
                case "50n":
                    setWeatherIcon(haze_icon);
                    setWeatherBackground(haze_gif)
                    break;
                default:
                    setWeatherIcon(snow_icon);
                    break;
            }
        } catch (error) {
            console.log("could not find the city you are searching for",error);
        }

    }

    return (
        <div className='container'>
            <div className="top-bar">
                <input type="text" className="locationInput" placeholder='Enter location here'/>
                <div className="search-icon" on onClick={()=>{search()}}>
                    <img src={search_icon} alt="" />
                </div>
            </div>
            <div className="weather-image">
                <img src={weatherIcon} alt="" />
            </div>
            <div className="weather-temp">0°C</div>
            <div className="weather-location">Ottawa</div>
            <div className="data-container">
                <div className="elem">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">99%</div>
                        <div className="displayText">Humidity</div>
                    </div>
                </div>
                <div className="elem">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-speed">7 km/h</div>
                        <div className="displayText">Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Weather;