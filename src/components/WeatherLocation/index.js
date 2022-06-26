import React, {Component} from "react";
import Location from "./Location";
import WeatherData from "./WeatherData";

const data = {
    temperature: 20,
    humidity: 65,
    wind: 10
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Barcelona',
            data
        };
    }
    handleUpdateClick = () => {
        this.setState({
            city: 'Tenerife'
        });
    }
    render() {
        const {city, data} = this.state;
        return (
            <div>
                <Location city={city} />
                <WeatherData data={data} />
                <button className="button" onClick={this.handleUpdateClick}>Update</button>
            </div>
        );
    }
}

export default WeatherLocation;