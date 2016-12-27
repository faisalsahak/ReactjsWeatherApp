import React, {Component} from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/openWeatherMap.jsx';
import axios from 'axios';


class Weather extends Component {
  constructor(props){
    super(props);
  //  this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      location: '',
      temp: ''
    }
  };

  handleSearch(location){
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        location:location,
        temp: temp
      });
    }, function (errorMessage){
      alert(errorMessage)
    })
  }

  render(){
     var {temp, location} = this.state;
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch = {this.handleSearch.bind(this)} />
        <WeatherMessage location = {location} temp = {temp}/>
      </div>
    )
  }

}

export default Weather
