import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Me from './Me.js';

import Reports from './reports.js';

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
              <li><Link to="/reports">Reports</Link></li>
            </ul>
          </nav>
          <Route exact path="/" component={Me} />
          <Route path="/reports" component={Reports} />
        </div>
      </Router>

    );
  }
}

export default App;
