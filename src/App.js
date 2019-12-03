import React, { Component } from 'react'
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY = "b86155febf4e7416656ad26119562ec3"

class App extends Component {
  state ={
    temperature: undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined
  }
  getWeather = async (event) =>{
    event.preventDefault()
    const city = event.target.elements.city.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
    this.setState({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error: ""
    })
  }
  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather 
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
         />
      </div>
    )
  }
}

export default App

