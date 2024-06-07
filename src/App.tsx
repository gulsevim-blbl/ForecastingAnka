import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"
import ForecastingDashboard from './ForecastingDashboard';
function App() {
  return ( 
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ForecastingDashboard/>} /> 
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;