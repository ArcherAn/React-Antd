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
import Layout from './components/LayoutComponent'


ReactDOM.render(

          <Layout />, document.getElementById('root')
          );

