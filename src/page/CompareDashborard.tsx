import React from 'react';
import CompareBrdcumb from '../component/CompareBrdcumb';
import ButtonsCompare from '../component/ButtonsCompare';
import "./compareDashboard.css"
import FilterBar from '../component/FilterBar';
import CompareFilterBar from '../component/CompareFilterBar';
import { Card } from 'antd';
import CompareSummary from '../component/compareSummary';
import CompareGrafic from '../component/CompareGrafic';

const CompareDashborard = () => {
  return (
    <div className='compare-brdcumb'>
        <div className="header">
        <nav>
            <CompareBrdcumb/>
            <ButtonsCompare/>
            <div className="compare-title">Forecasting</div>
        </nav>
      </div>
      <div className="filters">
            <CompareFilterBar/>
      </div>
      <div className='summary'>
           <CompareSummary/>
      </div>
      <div className="compaire-graphic">
          <Card className='compaire-graphic-card'>
              <CompareGrafic/>
          </Card>   
      </div>
    </div>
  )
}

export default CompareDashborard
