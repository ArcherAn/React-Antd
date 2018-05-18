import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import CountUp from 'react-countup';
import '../../App.css';
import '../../css/Card.css';
import { Icon, Row, Col, Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend, View, Guide, Shape } from 'bizcharts';
import DataSet from '@antv/data-set';


class SalesCard extends Component{

    render(){

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
    
        const data = [
            { 'State': 'WY', '小于5岁': 25635, '5至13岁': 1890, '14至17岁': 9314 },
            { 'State': 'DC', '小于5岁': 30352, '5至13岁': 20439, '14至17岁': 10225 },
            { 'State': 'VT', '小于5岁': 38253, '5至13岁': 42538, '14至17岁': 15757 },
            { 'State': 'ND', '小于5岁': 51896, '5至13岁': 67358, '14至17岁': 18794 },
            { 'State': 'AK', '小于5岁': 72083, '5至13岁': 85640, '14至17岁': 22153 }
          ];


        const ds1 = new DataSet();
        const dv1 = ds1.createView().source(salescard);
        dv1.transform({
          type: 'fold',
          fields: [ '卫衣', 'T恤', '衬衫' ], // 展开字段集
          key: 'kinds', // key字段
          value: 'price', // value字段
        });
        const cols1 = {
            year: {
            range: [ 0, 1 ]
          }
        }

      const ds2= new DataSet();
      const dv2 = ds2.createView().source(data);
      dv2.transform({
        type: 'fold',
        fields: [ '小于5岁', '5至13岁', '14至17岁' ], // 展开字段集
        key: '年龄段', // key字段
        value: '人口数量', // value字段
        retains: [ 'State' ] // 保留字段集，默认为除fields以外的所有字段
      });


        return(
          <div>
           <Row>
            <Col span={24}>
            <Card bordered={false} bodyStyle={{
              padding: '24px 36px 24px 0',
            }}>
               <div className='title' style={{paddingLeft:'20px'}}>销售统计</div>
               <Chart height={270} data={dv1} scale={cols1} forceFit>
               <Legend />
               <Axis name="year" />
               <Axis name="price" label={{formatter: val => `${val}`}}/>
               <Tooltip crosshairs={{type : "y"}}/>
               <Geom type="line" position="year*price" size={3} color={'kinds'} shape={'smooth'} />
               <Geom type='point' position="year*price" size={4} shape={'circle'} color={'kinds'} style={{ stroke: '#fff', lineWidth: 1}} />
               </Chart>
               </Card>
            </Col>
          </Row>

          <Row style={{marginTop:'25px'}}>
            <Col span={24}>
            <Card bordered={false} bodyStyle={{
             padding: '24px 36px 24px 0',
            }}>
            <div className='title' style={{paddingLeft:'20px'}}>年龄统计</div>
            <Chart height={260} data={dv2} forceFit>
            <Legend />
            <Coord transpose />
            <Axis name="State" label={{offset: 12}} />
            <Axis name="人口数量" />
            <Tooltip />
            <Geom type="intervalStack" position="State*人口数量" color={'年龄段'} />
            </Chart>
              
           </Card>
           </Col>
          </Row>
          </div>
        )
    }
    
}
  
export default SalesCard;