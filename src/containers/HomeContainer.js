import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css'
import '../css/home.css'
import { Icon, Row, Col, Card, Steps, Button, message } from 'antd';
import Bcrumb from '../components/BcrumbComponent'

const Step = Steps.Step;

class HomeContainer extends Component{

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
        };
      }
      next() {
        const current = this.state.current + 1;
        this.setState({ current });
      }
      prev() {
        const current = this.state.current - 1;
        this.setState({ current });
      }

    render(){
        const { current } = this.state;
        const steps = [{
            title: '下载',
            content: <div><p>$&nbsp;&nbsp;&nbsp;git clone</p><p>$&nbsp;&nbsp;&nbsp;git clone https://github.com/sosout/react-antd.git</p><p>$&nbsp;&nbsp;&nbsp;cd react-antd</p> </div>
          }, {
            title: '安装',
            content: <div><p>// 安装前请先确保已安装node和npm</p><p>// 安装成功后,再安装依赖，如果之前有用npm安装过，请先删掉node_modules</p><p>$&nbsp;&nbsp;&nbsp;yarn install</p></div>
          }, {
            title: '运行',
            content: <div><p>$&nbsp;&nbsp;&nbsp;yarn run dev （正常编译模式，注意：index.html里必须手动引用app.css，<link href="/antd/dist/app.css" rel="stylesheet" />，否则没有样式）</p><p>$&nbsp;&nbsp;&nbsp;yarn run hot （热替换编译模式，注意：热替换模式下index.html里去掉引用app.css）</p><p>$&nbsp;&nbsp;&nbsp;yarn run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）</p></div>
          }];

        return (
            <div className="home-container">
              <Bcrumb title= "快速入门" />
              <Row>
                 <Col span={24}>
                    <Card title= "项目前言">
                    <p>本工程主要基于react + redux + immutable + less + ES6/7 + webpack + fetch + react-router(4.x) + antd(3.x)实现的SPA后台管理系统模板。</p>
                    </Card>
                 </Col>
              </Row>

              <Row>
                 <Col span={24}>
                    <Card title= "项目上手">
                    <Steps current={current}>
                    {steps.map(item => <Step key={item.title} title={item.title} />)}
                    </Steps>
                       <div className="steps-content">{steps[this.state.current].content}</div>
                       <div className="steps-action">
                       {
                          this.state.current < steps.length - 1 &&
                          <Button type="primary" onClick={() => this.next()}>下一步</Button>
                       }
                       {
                          this.state.current === steps.length - 1 &&
                          <Button type="primary" onClick={() => message.success('恭喜你，大牛!')}>完成</Button>
                       }     
                       {
                          this.state.current > 0  &&
                          <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}> 上一步 </Button>
                       }
                       </div>
                    </Card>
                 </Col>
              </Row>

              <Row>
                 <Col span={24}>
                    <Card title= "访问">
                    <p>在浏览器地址栏输入http://127.0.0.1:3000 </p>
                    </Card>
                 </Col>
              </Row>

              <Row>
                 <Col span={24}>
                    <Card title= "项目说明">
                    <p>此项目是为学习react、antd搭建的，希望大家提供宝贵的意见和建议，谢谢。</p>
                    </Card>
                 </Col>
              </Row>
            </div>
          )
    }
}

export default HomeContainer;