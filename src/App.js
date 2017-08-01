import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Bootstrap.css'

class App extends Component {
  render() {
    return (
      <div className ="jumbotron jumbotron-fluid align-baseline" style={{backgroundImage:'url(public/img/bgimg.jpg)'}}>
          <div className ="container">
            <h1> Chingu Owls team 23 React Splash Page </h1>
            <p> with Bootstrap and SASS </p>
            <p><a className="btn btn-primary" href="http://www.google.com" target="_blank"> Discovery things</a></p>
          </div>
        </div>
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
