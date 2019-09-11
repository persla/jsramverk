import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';

import Reports from './reports.js';
import Login from './Login.js';

import './App.css';

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
        <h1>Me-app</h1>
          <nav>
            <ul>
              <li><Link to="/">Me</Link></li>
              <li><Link to="/reports">Rapporter</Link></li>
              <li><Link to="/Login">Inloggning</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Me} />
          <Route path="/reports" component={Reports} />
          <Route path="/Login" component={Login} />
          <footer>Lars Persson 2019</footer>
        </div>
      </Router>

    );
  }
}

export default App;
