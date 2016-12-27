import React, {Component} from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/openWeatherMap.jsx';
//import axios from 'axios';


class Weather extends Component {
  constructor(props){
    super(props);
  //  this.handleSearch = this.handleSearch.bind(this)
    this.state = {
      isLoading: false
    }
  };

  handleSearch(location){
    var that = this;
    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp){
      that.setState({
        location:location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage){
      that.setState({isLoading:false})
      alert(errorMessage)
    })
  }

  render(){
     var {isLoading, temp, location} = this.state;

    function renderMessage(){
       if (isLoading) {
         return <h3>Fetching weather ... </h3>
       }else if (temp && location) {
         return <WeatherMessage location = {location} temp = {temp}/>
       }
     }
    return(
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch = {this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    )
  }

}

export default Weather
