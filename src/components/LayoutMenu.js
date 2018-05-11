import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Layout, Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;

class LayoutMenu extends Component{

    render(){
        return(
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
              <Icon type="laptop" />
              <span>快速入门</span>
        </Menu.Item>
        <SubMenu key="home" title={<span><Icon type="dashboard" /><span>仪表盘</span></span>}>
           <Menu.Item key="dashboard1">仪表盘 1</Menu.Item>
           <Menu.Item key="dashboard2">仪表盘 2</Menu.Item>
        </SubMenu>

     </Menu>
        )
    }
}

export default LayoutMenu;