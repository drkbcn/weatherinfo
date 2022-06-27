import React from "react";
import PropTypes from "prop-types";
import WeatherIcons from 'react-weathericons';
import {SUN, WEATHERS} from '../../../constants/weathers';

const getWeatherIcon = (api_icon) => {
    const resolveWeatherState = () => {
        return  WEATHERS.find(weather => weather.api_icon === api_icon);
    }

    const {icon, color} = resolveWeatherState;
    return <WeatherIcons className={color ?? SUN.color} name={icon ?? SUN.icon} size="2x"/>
};

const WeatherTemperature = ({temperature, feelsLike, icon}) => {
    return (
        <div>
            {
                getWeatherIcon(icon)
            }
            <div className="weather-temperature">
                {`${temperature}`}ºC (Feels Like: {`${feelsLike}`}ºC)
            </div>
        </div>
    );
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    feelsLike: PropTypes.number.isRequired
};

export default WeatherTemperature;