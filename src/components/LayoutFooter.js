import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Layout, Menu,  Icon } from 'antd';
const { Footer } = Layout;


class LayoutFooter extends Component {

    render(){
        return(
        <Footer   style={{ textAlign: 'center' }} className="layout-footer">

            Ant Design ©2016 Created by Ant UED
        </Footer>
        )
    }
}

export default LayoutFooter;