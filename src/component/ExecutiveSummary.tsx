import React from 'react';
import "../styles/executivesummary.css";
import { Card, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import {  ArrowUpOutlined } from '@ant-design/icons';
import DonutChart from './DonutChart';


const ExecutiveSummary = () => {
  return (
    <div className='executivesummary'>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={6}>
          <Card
            title={<span className="card-title">Month to Date (MTD) Cost <InfoCircleOutlined /></span>}
            bordered={false}
            className="card-content1"
          >
            <div className="price">
                $531,456
                <div className="increaserate">
                <ArrowUpOutlined className="anticon-arrow-up" />  $31,740
                </div>
            </div>
            <div className="cost">
                Current MTD Cost
                <div className="info">
                Budget remaining this month: $1,000.00. Expiring in <span className='days'>23 days</span>
                </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            title={<span className="card-title">Forecasted Cost <InfoCircleOutlined /></span>}
            bordered={false}
            className="card-content2"
          >
           <div className="price">
                $155,999
                <div className="increaserate">
                <ArrowUpOutlined className="anticon-arrow-up" />  $22,740
                </div>
            </div>
            <div className="cost">
                Current Month Projected Cost
                <div className="info">
                    Monthly Budget: $126,150
                </div>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            title={<span className="card-title">Annual Budget </span>}
            bordered={false}
            className="card-content3"
          >
            <div className="annualbutget">
                <DonutChart/>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ExecutiveSummary;
