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

    // fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=5101568c0887e9cca6a03649315d4924')
    // .then(response => {
    //   return response.text();
    // })
    // .then(responseText => {
    //   const weather = JSON.parse(responseText);
    //   console.log("stories", stories);
    //   this.setState({
    //     weather: weather
    //   })
    // });

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
