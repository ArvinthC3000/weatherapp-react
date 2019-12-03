import React, { Component } from 'react'
import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

const API_KEY = "b86155febf4e7416656ad26119562ec3"

class App extends Component {
  getWeather = async () =>{
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${API_KEY}&units=metric`)
    const data = await api_call.json()
    console.log(data)
  }
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Weather />
      </div>
    )
  }
}

export default App

