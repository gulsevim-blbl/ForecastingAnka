import React, { useEffect, useState } from 'react';
import { DualAxes } from '@ant-design/plots';
import { linearRegression } from 'simple-statistics';
import "../styles/graphic.css"

interface DataItem {
  time: string;
  value: number;
  type: string;
}

const Graphic = () => {
 
   // Tahmin edilen verilerin oluşturulması için lineer regresyon kullanımı
   const [uvBillData, setUvBillData] = useState<DataItem[]>([]);
  const [predictedData, setPredictedData] = useState<DataItem[]>([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('/api/dataGraphic.json')
      .then(response => response.json())
      .then((data: { uvBillData: DataItem[] }) => {
        setUvBillData(data.uvBillData);
        generatePredictedData(data.uvBillData);
      });
  }, []);

  const generatePredictedData = (data: DataItem[]) => {
    const types: string[] = Array.from(new Set(data.map(item => item.type))); // Get all unique types
    const months: string[] = ['2021-08', '2021-09', '2021-10', '2021-11']; // Months to predict
    
    const predictedDataArray: DataItem[] = [];
    types.forEach(type => {
      months.forEach(month => {
        const filteredData = data.filter(item => item.type === type && item.time < month);
        const yValues: number[] = filteredData.map(item => item.value);
        const { m, b } = linearRegression([yValues]); // Put yValues array into another array
        const predictedValue = m * new Date(month).getTime() + b;
        predictedDataArray.push({ time: month, value: predictedValue, type: type });
      });
    });
    setPredictedData(predictedDataArray);
  };
   // Grafik konfigürasyonu
   const config = {
     xField: 'time',
     children: [
       {
         data: uvBillData,
         type: 'interval',
         yField: 'value',
         stack: true,
         colorField: 'type',
         style: { maxWidth: 80 },
         scale: { y: { domainMax: 1200 } },
         interaction: { elementHighlightByColor: { background: true } },
       },
       {
         data: predictedData,
         type: 'interval',
         yField: 'value',
         stack: true,
         colorField: 'type',
         style: { maxWidth: 80 }, 
         scale: { y: { domainMax: 1200 } }, 
         axis: { y: { position: 'right' } },
         interaction: {
           tooltip: {
             crosshairs: false,
             marker: false,
           },
         },
       },
     ],
   };
  
   // Grafik bileşeni
   return (
     <div className="graphic-container">
       <DualAxes {...config} />
       <div className="predicted-data-background">
        <p className='text'>Forecasted Values</p>
       </div>
     </div>
   );
 };
 
 export default Graphic;