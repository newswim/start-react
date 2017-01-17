// @flow

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// The main view, mostly just a parent for storing all of the other components
// AND ALSO a store for the SPA's state. We shouldn't need anything Redux here.

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
