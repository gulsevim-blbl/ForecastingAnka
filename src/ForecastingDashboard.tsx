import React from 'react'
import "./forecastingDashboard.css"
import Brdcumb from './component/Brdcumb';
import Buttons from './component/Buttons';
import FilterBar from './component/FilterBar';

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
    </div>
  )
}

export default ForecastingDashboard
