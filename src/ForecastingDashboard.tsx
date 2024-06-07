import React from 'react';
import "./forecastingDashboard.css"
import Brdcumb from './component/Brdcumb';
import Buttons from './component/Buttons';
import FilterBar from './component/FilterBar';
import ExecutiveSummary from './component/ExecutiveSummary';
import Graphic from './component/Graphic';
import { Card } from 'antd';
import Table from './component/Table';
const ForecastingDashboard = () => {
  return (
    <div className='forecasting'>
      <div className="header">
        <nav>
          <Brdcumb/>
          <Buttons/>
          <div className="title">Forecasting</div>
        </nav>
      </div>
      <div className="filters">
        <FilterBar/>
      </div>
      <div className='card'>
        <ExecutiveSummary/>
      </div>
      <div className="graphic">
          <Card className='graphic-card'>
            <Graphic/>
          </Card>   
      </div>
      <div className="table">
          <Table/>
      </div>
    </div>
  )
}

export default ForecastingDashboard;
