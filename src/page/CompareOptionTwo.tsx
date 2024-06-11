import React from 'react'
import "./compareoptiontwo.css"
import { Card } from 'antd';
import SelectForecastsTwo from '../component/SelectForecastsTwo';

const CompareOptionTwo = () => {
  return (
    <div className='compare-option-two'>
        <div className="optionone-title">
          <p>Compare - Option 1</p>
      </div>
      <div className="content">
        <div className="info-text">
          <p>Proposal</p>
          <p>Overlapping Forecasts</p>
        </div>
        <div className="option-table-graphic">
          <Card className='option-table-graphic-card'>
                <SelectForecastsTwo/>
                <div className="option-two-graphic">
                    <Card  className="option-two-graphic-card">

                    </Card>
        
                </div>
          </Card>
        </div>
        
      </div>
    </div>
  )
}

export default CompareOptionTwo
