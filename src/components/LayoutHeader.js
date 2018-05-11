import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Layout, Menu,  Icon } from 'antd';
const { Header } = Layout;


class LayoutHeader extends Component {
    constructor() {
        super();
        this.state = {
            siderFold: false
        }
    }

    toggle = () => {
        this.setState({
            siderFold: !this.state.siderFold,
        });
    }

    render(){
        return(
        <Header  style = {{background: '#fff'}} >
          <span className="btnBars" onClick={this.toggle} >
             <Icon 
             className="trigger"
             type= {this.state.siderFold ? 'menu-unfold' : 'menu-fold'} />
          </span>
        </Header>
        )
    }
}

export default LayoutHeader;