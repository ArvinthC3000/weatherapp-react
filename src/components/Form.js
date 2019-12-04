import React, { Component } from 'react'

const Form = props =>(
  <form onSubmit={this.props.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    {/* <input type="text"/> */}
    <button>Get weather</button>
  </form>
)

export default Form