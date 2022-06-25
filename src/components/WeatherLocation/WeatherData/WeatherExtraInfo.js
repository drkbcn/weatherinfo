import React from "react";
import PropTypes from "prop-types";

const WeatherExtraInfo = ({ humidity, wind }) => {
    return (
    <div className="extra-info">
        <span class="humidity">
            {`${humidity}%`}&nbsp;-&nbsp; 
        </span>
        <span class="wind">
            {`${wind}m/s`}
        </span>
    </div>
)};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired
};

export default WeatherExtraInfo;