import PropTypes from "prop-types";

const transformWeather = (weatherData) => {
    return {
        data: {
            temperature: weatherData.main.temp,
            feelsLike: weatherData.main.feels_like,
            humidity: weatherData.main.humidity,
            wind: weatherData.wind.speed
        },
        city: weatherData.name,
        icon: weatherData?.weather[0]?.icon,
    };    
};

transformWeather.propTypes = {
    weatherData: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired,
    }).isRequired,
};

export default transformWeather;