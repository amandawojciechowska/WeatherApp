import React from "react";

import Titles from "./components/Titles";
import Time from "./components/Time";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "e76909c763f767725a99487eb204de0d";


class App extends React.Component{

    state = {
        city: "",
        country: "",
        temperature: "",
        humidity: "",
        pressure: "",
        description: "",
        error: "",
        date: new Date()
    };

    getWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);

        const data = await api_call.json();
        console.log(data);

        if (city && country){
            this.setState({
                city: data.name,
                country: data.sys.country,
                temperature: data.main.temp,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                description: data.weather[0].description,
                error: ""
            })
        }else{
            this.setState({
                city: undefined,
                country: undefined,
                temperature: undefined,
                humidity: undefined,
                pressure: undefined,
                description: undefined,
                error: "Please enter the correct values."
            })
        }
    };


    componentDidMount(){
        this.intervalID = setInterval(()=>{
            this.setState({
                date: new Date()
            })
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    render(){
        return(
            <div>
                <div className="container">
                    <Titles/>
                    <Time
                        date={this.state.date}
                    />
                    <Form getWeather={this.getWeather} />
                    <Weather
                        city={this.state.city}
                        country={this.state.country}
                        temperature={this.state.temperature}
                        humidity={this.state.humidity}
                        pressure={this.state.pressure}
                        description={this.state.description}
                        error={this.state.error}
                    />
                </div>
            </div>
        )
    }
}


export default App;