import React, {Component} from 'react';
import WeatherForm from './WeatherForm.jsx';
import WeatherMessage from './WeatherMessage.jsx';
import openWeatherMap from '../api/openWeatherMap.jsx';

class Weather extends Component {
  constructor(props){
    super(props);
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
         return <h3 className="fetch">Fetching weather ... </h3>
       }else if (temp && location) {
         return <WeatherMessage  className="fetch" location = {location} temp = {temp}/>
       }
     }
    return(
      <div>
        <h3>Get Weather</h3>
        <WeatherForm onSearch = {this.handleSearch.bind(this)} />
        {renderMessage()}
      </div>
    )
  }

}

export default Weather
