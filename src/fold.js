import React from 'react';

export class AttentionGrabber extends React.Component {
	render() {
		return (
      <div>
      <div className="panel panel-default">
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
