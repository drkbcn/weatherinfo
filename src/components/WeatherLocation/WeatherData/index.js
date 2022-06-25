import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => {
    return (
        <div className="weather-data">
            <WeatherTemperature temperature={20} />
            <WeatherExtraInfo humidity={80} wind={3} />
        </div>
    );
};

export default WeatherData;
