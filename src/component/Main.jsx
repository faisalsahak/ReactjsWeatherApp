import React, {Component} from 'react';
import Nav from './Nav.jsx';

class Main extends Component {

  render(){

    return(
      <div>
        <Nav />
        <h2>Main components</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Main
