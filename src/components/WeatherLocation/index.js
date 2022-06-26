import React from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";
import PropTypes from "prop-types";

const data = {
    temperature: 20,
    humidity: 65,
    wind: 10
}

const WeatherLocation = () => (
    <div>
        <Location city="Cubelles" />
        <WeatherData data={data} />
    </div>
);

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
};

export default WeatherLocation;