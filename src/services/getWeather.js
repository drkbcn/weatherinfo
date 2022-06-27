import transformWeather from "./transformWeather";

const {REACT_APP_WEATHER_API_URL, REACT_APP_WEATHER_API_KEY, REACT_APP_WEATHER_API_LOCATION} = process.env;

const getWeather = async () => {
    return fetch(
            `${REACT_APP_WEATHER_API_URL}?q=${REACT_APP_WEATHER_API_LOCATION}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`
        )
        .then(response => response.json())
        .then((dataParsed) => {
            return transformWeather(dataParsed);
        }
    );
}

export default getWeather;