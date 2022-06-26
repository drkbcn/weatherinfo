import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import PropTypes from 'prop-types';
import {
    SUN, CLOUD, CLOUDY, FOG, RAIN, SNOW, WINDY, STORM
} from '../../../constants/weathers';

const WeatherData = ({ data: {temperature, humidity, wind }}) => {
    return (
        <div className="weather-data">
            <WeatherTemperature
                weatherState={SUN} 
                temperature={temperature} 
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
