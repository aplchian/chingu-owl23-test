import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
      <div className ="jumbotron jumbotron-fluid align-baseline" style={{backgroundImage:'url(bgimg.jpg)'}}>
       <div className ="container">
         <h1> Chingu Owls team 23 React Splash Page </h1>
         <p> with Bootstrap and SASS </p>
         <p><a className="btn btn-primary" href="http://www.google.com" target="_blank"> Discovery things</a></p>

       </div>

     </div>
     div className="panel panel-default">
 <div className="panel-heading">Panel heading without title</div>
 <div className="panel-body">
   Panel content
 </div>
</div>

<div className="panel panel-default">
 <div className="panel-heading">
   <h3 className="panel-title">Panel title</h3>
 </div>
 <div className="panel-body">
   Panel content
 </div>
</div>
</div>
    );
  }
}

export default App;
