import React, {Component} from 'react'

class WeatherForm extends Component {

  render(){

    return(
      <div>
        <form className= "form-control">
          <input type = 'text' placeholder= 'Enter City Name' />
          <button className= "btn btn-primary"> Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm
