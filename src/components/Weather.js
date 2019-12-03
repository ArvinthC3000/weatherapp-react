import React, { Component } from 'react'

class Weather extends Component {
    render() {
        return (
            <div>
                {this.props.city && this.props.country &&<p> Location: {this.props.city}, {this.props.country}</p>}
                <p>Temperature: {this.props.temperature}</p>
                <p>Humidity: {this.props.humidity}</p> 
                <p>Conditions: {this.props.description}</p>
                <p>{this.props.errors}</p>
            </div>
        )
    }
}

export default Weather