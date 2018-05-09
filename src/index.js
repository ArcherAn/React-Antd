import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomeContainer from '../src/containers/HomeContainer'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomeContainer />, document.getElementById('root'));
registerServiceWorker();
