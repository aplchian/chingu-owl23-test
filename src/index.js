import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Jumbo from './Jumbo';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Jumbo />, document.getElementById('top'));
registerServiceWorker();
