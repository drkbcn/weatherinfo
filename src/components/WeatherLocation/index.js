import React, {Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

const {REACT_APP_WEATHER_API_URL, REACT_APP_WEATHER_API_KEY, REACT_APP_WEATHER_API_LOCATION} = process.env;
class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Fetching...',
            data: {
                temperature: 0,
                humidity: 0,
                wind: 0,
            },
        }
    }
    handleRefreshData = () => {
        fetch(`${REACT_APP_WEATHER_API_URL}?q=${REACT_APP_WEATHER_API_LOCATION}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`)
            .then(response => response.json())
            .then((dataParsed) => {
                this.setState({
                    data: {
                        temperature: dataParsed.main.temp,
                        humidity: dataParsed.main.humidity,
                        wind: dataParsed.wind.speed
                    },
                    city: dataParsed.name
                });
            });
    }
    render() {
        this.handleRefreshData();
        const {city, data} = this.state;
        return (
            <div>
                <Location city={city} />
                <WeatherData data={data} />
                <button className="button" onClick={this.handleRefreshData}>Update</button>
            </div>
        );
    }
}

export default WeatherLocation;