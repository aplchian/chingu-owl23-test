import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Our React Splash Page</h2>
        </div>
        <p className="App-intro">
          Lets get this show on the road!
        </p>
      </div>
    );
  }
}

export default App;
