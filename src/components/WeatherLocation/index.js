import React, {Component} from "react";
import getWeather from "../../services/getWeather";
import Location from "./Location";
import WeatherData from "./WeatherData";

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Fetching...',
            icon: '01d',
            data: {
                temperature: 0,
                feelsLike: 0,
                humidity: 0,
                wind: 0,
            },
        }
    }
    handleRefreshData = () => {
        let weatherData = getWeather();
        weatherData.then(data => {
            this.setState(data);
        });
    }
    componentDidMount() {
        this.handleRefreshData();
    }
    render() {
        const {city, data} = this.state;
        return (
            <div>
                <Location city={city} />
                <WeatherData data={data} />
            </div>
        );
    }
}

export default WeatherLocation;