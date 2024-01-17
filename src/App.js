import './App.css';
import Weather from './Code/App/WeatherApp.jsx';
import { useState } from 'react';
import sunny_gif from './Code/Images/Sunny.gif';

function App() {

  const [weatherBackground, setWeatherBackground] = useState(sunny_gif);

  return (
    <div className="App" 
      style={{ backgroundImage: `url(${weatherBackground})` }}>
      <Weather setWeatherBackground={setWeatherBackground} />
    </div>
  );
}

export default App;
