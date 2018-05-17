import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CountUp from 'react-countup';
import '../../App.css';
import '../../css/Card.css';
import { Icon, Row, Col, Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import DataSet from '@antv/data-set';


const data = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 }
    ];

    const salescard = [
        {year: '2008', 卫衣: 214, T恤: 354, 衬衫: 416},
        {year: '2009', 卫衣: 395, T恤: 192, 衬衫: 390},
        {year: '2010', 卫衣: 260, T恤: 269, 衬衫: 404},
        {year: '2011', 卫衣: 323, T恤: 297, 衬衫: 449},
        {year: '2012', 卫衣: 215, T恤: 220, 衬衫: 491},
        {year: '2013', 卫衣: 365, T恤: 341, 衬衫: 422},
        {year: '2014', 卫衣: 218, T恤: 187, 衬衫: 349},
        {year: '2015', 卫衣: 248, T恤: 217, 衬衫: 431}
    ];

    
    const ds = new DataSet();
    const dv = ds.createView().source(salescard);
    dv.transform({
      type: 'fold',
      fields: [ '卫衣', 'T恤', '衬衫' ], // 展开字段集
      key: 'kinds', // key字段
      value: 'price', // value字段
    });
    const cols = {
        year: {
        range: [ 0, 1 ]
      }
    }

class SalesCard extends Component{

    render(){
        return(
           <Row>
            <Col span={24}>
            <Card bordered={false} bodyStyle={{
              padding: '24px 36px 24px 0',
            }}>
               <Chart height={270} data={dv} scale={cols} forceFit>
               <Axis name="year" />
               <Axis name="price" label={{formatter: val => `${val}`}}/>
               <Tooltip crosshairs={{type : "y"}}/>
               <Geom type="line" position="year*price" size={3} color={'kinds'} shape={'smooth'} />
               <Geom type='point' position="year*price" size={4} shape={'circle'} color={'kinds'} style={{ stroke: '#fff', lineWidth: 1}} />
               </Chart>
               </Card>
            </Col>
          </Row>
        )
    }
    
}
  
export default SalesCard;