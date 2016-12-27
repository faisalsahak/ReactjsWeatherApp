import React, {Component} from 'react'

class WeatherForm extends Component {
  constructor (props){
    super(props);
    this.state = {
      weather: []
    }
  }

  weatherSearch(event){
    event.preventDefault()

    var location = this.refs.location.value

    if (location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location)
    }

  }

  render(){

    return(
      <div>
        <form onSubmit= {this.weatherSearch.bind(this)}>
          <input type = 'text' placeholder= 'Enter City Name' ref='location' />
          <button className= "btn btn-primary"> Get Weather</button>
        </form>
      </div>
    )
  }
}

export default WeatherForm
