import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CountUp from 'react-countup';
import '../../App.css';
import '../../css/Card.css';
import { Icon, Row, Col, Card, Steps, Button, message } from 'antd';

class CountCard extends Component{
    render(){
        const countcard =[
            {
                icon:"message",
                color:"#ffa726",
                title:"评论数",
                number:2781
              },
              {
                icon:"team",
                color:"#66bb6a",
                title:"新注册",
                number:3241,
              },
              {
                icon:"appstore-o",
                color:"#26c6da",
                title:"项目数",
                number:253,
              },
              {
                icon:"like-o",
                color:"#d81b60",
                title:"推荐",
                number:4324,
              }
        ]

        return(
         <div>
             <Row gutter={16} className="showcase-3"> 
             {
               countcard.map((v, k) => {
                   return
                   (
                    <Col xs={24} sm={24} md={12} lg={6} xl={6} key={k}>
                    <Card
                    bordered={false}
                    hoverable = {true}
                    className = "countcard"
                    style={{cursor:'pointer'}}>
                    <Icon className='iconWarp' style={{ color: v.color }} type={v.icon} />
                    <div className='card-content3'>
                      <p className='title'>{v.title || ''}</p>
                      <p className='number'>
                        <CountUp
                          start={0}
                          end={v.number}
                          duration={2.75}
                          useEasing
                          useGrouping
                          separator=","
                        />
                      </p>
                    </div>
                    </Card>
                    </Col>
                   )
               })
            }
             </Row>
         </div>
        
        );
    }
}


export default CountCard;