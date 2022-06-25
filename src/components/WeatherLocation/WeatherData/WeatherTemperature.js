import React from "react";
import PropTypes from "prop-types";

const WeatherTemperature = ({temperature}) => {
    return (
        <div className="weather-temperature">
            {`${temperature}`}
        </div>
    );
}

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired
};

export default WeatherTemperature;