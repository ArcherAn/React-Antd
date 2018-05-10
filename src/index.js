import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
}from 'react-router-dom'

import './index.css';
import App from './App';
import HomeContainer from '../src/containers/HomeContainer';
import Layout from './components/LayoutComponent'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
          <Layout />, document.getElementById('root'));
registerServiceWorker();
