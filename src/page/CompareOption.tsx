import React from 'react';
import "./compareoption.css";
import { Card } from 'antd';
import SelectForecasts from '../component/SelectForecasts';

const CompareOption = () => {
  return (
    <div className='compare-option'>
      <div className="optionone-title">
          <p>Compare - Option 1</p>
      </div>
      <div className="content">
        <div className="info-text">
          <p>Proposal</p>
          <p>Overlapping Forecasts</p>
        </div>
        <div className="option-table">
          <Card className='option-table-card'>
                <SelectForecasts/>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default CompareOption;
