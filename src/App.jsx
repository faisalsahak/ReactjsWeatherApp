// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './component/Main.jsx';
import Weather from './component/Weather.jsx';
import About from './component/About.jsx';
import Examples from './component/Examples.jsx'


ReactDOM.render(
  <Router history = {hashHistory}>
    <Route path = '/' component = {Main}>
      <Route path = 'about' component = {About} />
      <IndexRoute component = {Weather}/>
      <Route path = 'Examples' component = {Examples} />
    </Route>
  </Router>,
  document.getElementById('react-root'));
