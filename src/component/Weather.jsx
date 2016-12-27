import React, {Component} from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';

class Weather extends Component {



  render(){
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm />
        <WeatherMessage />
      </div>
    )
  }

}

export default Weather
