import React from 'react';
import { Card, Col, Row } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import {  ArrowUpOutlined } from '@ant-design/icons';
import DonutChart from './DonutChart';
import "../styles/compareSummary.css"
import CompareDonutChart from './CompareDonutChart';

const CompareSummary = () => {
    return (
        <div className='comparesummary'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Card
                title={<span className="card-title">Month to Date (MTD) Cost <InfoCircleOutlined /></span>}
                bordered={false}
                className="card-content1"
              >
                <div className="compare-price">
                    $3,188,319
                </div>
                <div className="compare-cost">
                    Current MTD Cost
                </div>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                title={<span className="card-title">Forecasted Cost <InfoCircleOutlined /></span>}
                bordered={false}
                className="card-content2"
              >
               <div className="compare-price">
                    $3,908,053
                </div>
                <div className="compare-cost">
                    Current Month Projected Cost
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
                    <CompareDonutChart/>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      );
}

export default CompareSummary;
