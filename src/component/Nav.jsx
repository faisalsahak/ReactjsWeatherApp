import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router'

class Nav extends Component {
  render(){
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <ul className="nav navbar-nav">
                <li><IndexLink to = '/' className="active">Get Weather <span className="sr-only">(current)</span></IndexLink></li>
                <li><IndexLink to = '/about' >About</IndexLink></li>
                <li><IndexLink to = '/Examples' >Examples</IndexLink></li>
              </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}

export default Nav
