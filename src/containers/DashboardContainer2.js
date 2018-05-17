import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CountCard from '../containers/Card/CountCard';
import SalesCard from '../containers/Card/SalesCard';
import '../App.css'
import { Icon, Row, Col, Card, Steps, Button, message } from 'antd';

/*

   仪表盘2的 页面组件

*/

class DashboardContainer2 extends Component{

    render(){
        return(
            <div className="home-container">

                <CountCard />
                <SalesCard />

            </div>
        )
    }
    
}

export default DashboardContainer2;