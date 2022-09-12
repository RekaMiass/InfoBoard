import React, {useState} from 'react';
import axios from 'axios';
import './WeatherItem.css'

const WeatherItem = () => {

    const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`;
    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
            setData(response.data)
            console.log(response);
            })
           setLocation('') 
          }
        }

    return (
        <div className='weather-app'>
            <div className='search'>
                <input 
                    value={location}
                    onChange={event => setLocation(event.target.value)}
                    onKeyPress={searchLocation}
                    placeholder='Enter your city'
                />
            </div>
            <div>
                <p>{data.name}</p>
                {data.main ? <h1>{Math.round(data.main.temp)}°</h1> : null}
                {data.main ? <p>Feels like {Math.round(data.main.feels_like)}°</p> : null}
                {data.weather ? <p>{data.weather[0].main}</p> : null}
                <div className='weather-extra'>
                    {data.wind ? <p className='wind'>Wind <br/>{Math.round(data.wind.speed)} m/s</p> : null}
                    {data.main ? <p className='hum'>Humidity <br/>{data.main.humidity}%</p> : null}
                </div>
            </div>
        </div>
    )
}

export default WeatherItem;

