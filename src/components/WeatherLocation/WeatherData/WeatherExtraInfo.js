import React from "react";
import PropTypes from "prop-types";

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
    <div className="extra-info">
        <span className="humidity">
            {`${humidity}%`}&nbsp;-&nbsp; 
        </span>
        <span className="wind">
            {`${wind}m/s`}
        </span>
    </div>
)};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
};

export default WeatherExtraInfo;