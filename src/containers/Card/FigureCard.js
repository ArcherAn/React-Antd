import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import less from 'less';
import CountUp from 'react-countup';
import '../../App.css';
import '../../css/Card.css';
import { Icon, Row, Col, Card, Steps, Button, message } from 'antd';

class FigureCard extends Component{

    render(){

        const figurecard = [
            {
              icon: 'book',
              title: 'Bookings',
              number: 184,
              color: 'green',
              sub: 'Get More Space...',
              subIcon: 'info-circle'
            }, {
              icon: 'eye-o',
              title: 'Views',
              number: 75,
              color: 'pink',
              sub: 'Google Analytics',
              subIcon: 'tag'
            }, {
              icon: 'bank',
              title: 'Revenue',
              number: 3245,
              color: 'blue',
              sub: 'Last 24 Hours',
              subIcon: 'calendar'
            }, {
              icon: 'team',
              title: 'Followers',
              number: 245,
              color: 'yellow',
              sub: 'Just Updated',
              subIcon: 'solution'
            },
          ];

        return (
          <div>
            <Row gutter={16} className="showcase-1">
            {
               figurecard.map((v, k) => {
               return (
               <Col xs={24} sm={24} md={12} lg={6} xl={6} key={k}>
               <Card
                    title={
                      <div>
                        <div className={classnames('card-header1', { [`${v.color}`]: true })}>
                          <h4><Icon type={v.icon} /></h4>
                        </div>
                        <div className={'card-content1'}>
                          <p className={'category'}>{v.title}</p>
                          <h3>
                            <CountUp
                              start={0}
                              end={v.number}
                              duration={2.75}
                              useEasing
                              useGrouping
                              separator=","
                            />
                          </h3>
                        </div>
                      </div>
                      }
                    bordered={false}
                    hoverable = {true}>
                    <div className={'card-footer1'}>
                      <Icon type={v.subIcon} />
                      {' '}{v.sub}
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

export default FigureCard;