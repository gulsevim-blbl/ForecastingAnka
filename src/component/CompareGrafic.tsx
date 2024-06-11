import React, { useEffect, useState } from 'react';
import { Column } from '@ant-design/plots';
import { linearRegression } from 'simple-statistics';
import axios from 'axios';
import "../styles/comparegrafic.css"

interface DataItem {
  time: string;
  value: number;
  type: string;
}

const CompareGrafic = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [predictedData, setPredictedData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios.get('/api/compareDataGraphic.json')
      .then(response => {
        setData(response.data.compareData);
        const newPredictedData = generatePredictedData(response.data.compareData);
        setPredictedData(newPredictedData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const generatePredictedData = (data: DataItem[]) => {
    const types: string[] = Array.from(new Set(data.map(item => item.type))); // Get all unique types
    const months: string[] = ['2023-07','2023-08', '2023-09', '2023-10', '2023-11', '2023-12','2024-01','2024-02','2024-03','2024-04','2024-05','2024-06','2024-07','2024-08']; // Months to predict
    
    const predictedDataArray: DataItem[] = [];
    types.forEach(type => {
      const typeData = data.filter(item => item.type === type);
      const values = typeData.map(item => item.value);
      for (let i = 0; i < months.length; i++) {
        const month = months[i];
        const lastValue = values[values.length - 1];
        const predictedValue = lastValue + (i + 1) * 5; // Assuming a linear increase
        predictedDataArray.push({ time: month, value: predictedValue, type: type });
      }
    });
    return predictedDataArray;
  };

  const config = {
    data: [...data, ...predictedData],
    xField: 'time',
    yField: 'value',
    colorField: 'type',
    stack: true,
    interaction: {
      tooltip: {
        render: (e: any, { title, items }: { title: string, items: any[] }) => {
          return (
            <div key={title}>
              <h4>{title}</h4>
              {items.map((item: any) => {
                const { name, value, color } = item;
                return (
                  <div>
                    <div style={{ margin: 0, display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <span
                          style={{
                            display: 'inline-block',
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: color,
                            marginRight: 6,
                          }}
                        ></span>
                        <span>{name}</span>
                      </div>
                      <b>{value}</b>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        },
      },
    },
  };

  return (
    <div className='comparegrafic'>
      <Column {...config} />
      <div className="predicted-data-background-two">
        <p className='text-two'>Forecasted Values</p>
       </div>
    </div>
  );
};

export default CompareGrafic;
