import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AttentionGrabber } from './fold';

import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AttentionGrabber />, document.getElementById('top'));
registerServiceWorker();
