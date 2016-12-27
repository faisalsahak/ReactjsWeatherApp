import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router'

class Nav extends Component {


  render(){


    return(
      <div>
        <h1>NavBar</h1>
        <IndexLink to = '/' activeClassName = 'active' activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <IndexLink to = '/about' activeClassName = 'active' activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
        <IndexLink to = '/Examples' activeClassName = 'active' activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink>

      </div>
    )
  }
}

export default Nav
