import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"
import ForecastingDashboard from  './page/ForecastingDashboard';
import CompareDashborard from './page/CompareDashborard';
import CompareOption from './page/CompareOption';
import CompareOptionTwo from './page/CompareOptionTwo';
function App() {
  return ( 
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ForecastingDashboard/>} /> 
            <Route path="/undefined/compare" element={<CompareDashborard/>} /> 
            <Route path="/compareoption" element={<CompareOption/>} /> 
            <Route path="/compareoptiontwo" element={<CompareOptionTwo/>} /> 
          </Routes>
        </BrowserRouter>
    </div>
    
  );
}

export default App;