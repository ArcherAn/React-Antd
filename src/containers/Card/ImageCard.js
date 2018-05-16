import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import less from 'less';
import CountUp from 'react-countup';
import '../../App.css';
import '../../css/Card.css';
import { Icon, Row, Col, Card, Steps, Button, message } from 'antd';

class ImageCard extends Component{
    render (){
     const imagecard =[

      {
        image: '1',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '2',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'London, UK'
      },
      {
        image: '3',
        title: 'here is title',
        desc: 'here is desc ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '4',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'Peiking, China'
      },
      {
        image: '5',
        title: '热气球啊啊',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      },
      {
        image: '6',
        title: 'here is title',
        desc: 'here is desc，Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la Ba la ...',
        footerTitle: 'footer title',
        position: 'City, Country'
      }
    ]

        return(
            <div>
                 <Row gutter={32} className="showcase-2">
                 {
                     imagecard.map((v, k) => {
                     return (
                        <Col xs={12} sm={12} md={12} lg={8} xl={8} key={k}>
                           <Card
                           bordered={false}
                           hoverable = {true} style={{marginTop: '50px'}}>
                           <div className={'card-header2'}>
                             <img src={require(`../../img/card-${v.image}.jpeg`)} alt="" />
                           </div>
                           <div className={'card-content2'}>
                              <h4>{v.title}</h4>
                              <p>{v.desc}</p>
                           </div>
                          <div className={'card-footer2'}>
                             <h4>{v.footerTitle}</h4>
                             <div className='position'>
                                <Icon type="environment" />{' '}{v.position}
                             </div>
                          </div>

                           </Card>
                         </Col>
                     )
                    })
                 }
                  </Row>
            </div>
        )
    }
}

export default ImageCard;