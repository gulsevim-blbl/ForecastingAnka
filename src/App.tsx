import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"
import ForecastingDashboard from  './page/ForecastingDashboard';
import CompareDashborard from './page/CompareDashborard';
function App() {
  return ( 
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ForecastingDashboard/>} /> 
            <Route path="/undefined/compare" element={<CompareDashborard/>} /> 
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;