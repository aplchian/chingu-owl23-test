import React, { Component } from 'react';
import './App.css';
import './Bootstrap.css'

class Jumbo extends Component {
  render() {
    return (
      <div className ="jumbotron jumbotron-fluid align-baseline" style={{backgroundImage:'url(public/img/bgimg.jpg)'}}>
            <div className ="container">
              <h1> Chingu Owls team 23 React Splash Page </h1>
              <p> with Bootstrap and SASS </p>
              <p><a className="btn btn-primary" href="http://www.google.com" target="_blank"> Discovery things</a></p>
            </div>
          </div>
    );
  }
}

export default Jumbo;
