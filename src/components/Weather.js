import React from "react";

// class Weather extends React.Component{
//     render(){
//         return (
//             <div>
//                 {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
//                 {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
//                 {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
//                 {this.props.description && <p>Conditions: {this.props.description}</p>}
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         )
//     }
// }


const Weather = (props) => {
    return (
        <div className="weather_info">
            {props.city && props.country && <p>Location:
                <span className="weather_value"> {props.city}, {props.country}</span></p>}
            {props.temperature && <p>Temperature:
                <span className="weather_value"> {props.temperature} <sup>o</sup>C</span></p>}
            {props.humidity && <p>Humidity:
                <span className="weather_value"> {props.humidity} %</span></p>}
            {props.pressure && <p>Pressure:
                <span className="weather_value"> {props.pressure} hPa</span></p>}
            {props.description && <p>Conditions:
                <span className="weather_value"> {props.description}</span></p>}
            {props.error && <p>
                <span className="weather_error"> {props.error}</span></p>}
        </div>
    )
};

export default Weather;