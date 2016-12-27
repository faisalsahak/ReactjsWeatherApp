import React, {Component} from 'react';
//require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

class WeatherMessage extends Component {



  render(){
    var {temp, location} = this.props
    return(
      <div>
        <h3>it is {temp} °C in {location}</h3>
      </div>
    )
  }

}

export default WeatherMessage
