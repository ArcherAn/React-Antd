import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FigureCard from '../containers/Card/FigureCard'
import '../App.css'
import { Icon, Row, Col, Card, Steps, Button, message } from 'antd';


/*

   仪表盘1的 页面组件

*/

class DashboardContainer1 extends Component{

    render(){
        return(
            <div className="home-container">
                <FigureCard />
            </div>
        )
    }
    
}

export default DashboardContainer1;