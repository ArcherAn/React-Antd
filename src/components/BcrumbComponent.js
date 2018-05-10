import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
import { Icon, Breadcrumb } from 'antd';
import '../css/bcrumb.css';
 /*
   
   创建公共面包屑

    <Link to ="/home">
            <Icon type="home" />
            <span>主页</span>
    </Link>

*/
class BcrumbComponent extends Component{

    constructor(props) {
        super(props);   // 之后才可以使用 this 获取实例化对象
      }

    render(){
        return (
            <Breadcrumb className="bread-crumb">
               <Breadcrumb.Item>
               
                     <Icon type="home" />
                     <span>主页</span>
              
               </Breadcrumb.Item>
               <Breadcrumb.Item>
                     <Icon type={this.props.icon ? this.props.icon : 'laptop'} />
                     <span>{this.props.title}</span>
               </Breadcrumb.Item>
             
            </Breadcrumb>
          );
    }
}

export default BcrumbComponent;