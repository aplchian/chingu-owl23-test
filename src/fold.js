import React, { Component } from 'react';
import './App.css';

class AttentionGrabber extends React.Component {
	render() {
		return (
      <div>
      <div class="panel panel-default">
  <div class="panel-heading">Panel heading without title</div>
  <div class="panel-body">
    Panel content
  </div>
</div>

<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title">Panel title</h3>
  </div>
  <div class="panel-body">
    Panel content
  </div>
</div>
</div>
    );
	}
}

export default AttentionGrabber;
