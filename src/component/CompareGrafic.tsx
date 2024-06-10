import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';
import "../styles/comparegrafic.css"

const DemoColumn = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/api/compareDataGraphic.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const config = {
    data,
    xField: '月份',
    yField: '月均降雨量',
    colorField: 'name',
    group: true,
    style: {
      // Padding for all four sides of the rectangle
      inset: 5,
      // Padding for a single side of the rectangle
      // insetLeft: 5,
      // insetRight: 20,
      // insetBottom: 10,
      // insetTop: 10,
    },
  };

  return <Column {...config} />;
};

const CompareGrafic: React.FC = () => {
  return (
    <div className='comparegrafic'>
      <DemoColumn />
    </div>
  );
};



export default CompareGrafic;
