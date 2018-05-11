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
import Layout1 from './components/LayoutComponent'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

          <Layout1 />
          , document.getElementById('root')
          );
//registerServiceWorker();
