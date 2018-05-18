import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import { Layout, Menu,  Icon } from 'antd';
const { Header } = Layout;


class LayoutHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            siderFold: true
        }
    }

    toggle = () => {
        
        this.setState({
            siderFold: !this.state.siderFold,
        });
        var siderFold = this.state.siderFold;
        this.props.onCollapse(siderFold);   // 使用父组件传递过来的 onCollapse(props)，将siderFold交给父组件处理
    }

    render(){
        return(
        <Header  style={{ background: '#fff', padding: 0 }} >
          <span className="btnBars" onClick={this.toggle.bind(this)} >
             <Icon 
             className="trigger"
             type= {this.state.siderFold ? 'menu-unfold' : 'menu-fold'} />
          </span>
        </Header>
        )
    }
}

export default LayoutHeader;