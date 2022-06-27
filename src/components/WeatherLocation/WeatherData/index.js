import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';

const WeatherData = ({ data: {temperature, feelsLike, humidity, wind }, icon}) => {
    return (
        <div className="weather-data">
            <WeatherTemperature
                icon={icon} 
                temperature={temperature}
                feelsLike={feelsLike}
            />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired
    }).isRequired
};

export default WeatherData;
