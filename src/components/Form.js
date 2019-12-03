import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.getWeather}>
        <input type="text" name="city" placeholder="City..."/>
        {/* <input type="text"/> */}
        <button>Get weather</button>
      </form>
    )
  }
}

export default Form

// import React from "react"
// import axios from "axios"

// class Form extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//     //   alert('A name was submitted: ' + this.state.value);
//       event.preventDefault();
//     //   let object = {
//     //       value : this.state.value
//     //   }
//       axios.post('https://api.openweathermap.org/data/2.5/weather?q='+"Chennai"+'&appid=b86155febf4e7416656ad26119562ec3')
//         .then(res=>console.log(res.data))
//         .catch(err=>console.log(err))
//     }
  
//     render() {
//       return (
//         <div>
//             <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name:
//                 <input type="text" value={this.state.value} onChange={this.handleChange} />
//             </label>
//             <input type="submit" value="Submit" />
//             </form>
//         </div>
//       );
//     }
//   }

//   export default Form;