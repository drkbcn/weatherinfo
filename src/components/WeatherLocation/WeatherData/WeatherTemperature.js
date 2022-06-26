import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from 'react-weathericons';
import {
    SUN, CLOUD, CLOUDY, FOG, RAIN, SNOW, WINDY, STORM
} from '../../../constants/weathers';

const getWeatherIcon = (weatherState) => {
    const {icon} = weatherState;
    const {color} = weatherState;
    return <WeatherIcons className={color ?? SUN.color} name={icon ?? SUN.icon} size="2x"/>
};

const WeatherTemperature = ({temperature, weatherState}) => {
    return (
        <div>
            {
                getWeatherIcon(weatherState)
            }
            <div className="weather-temperature">
                {`${temperature}`}ºC
            </div>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired
};

export default WeatherTemperature;