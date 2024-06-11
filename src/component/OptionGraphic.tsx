import React from 'react';
import { Area } from '@ant-design/plots';
import "../styles/optiongraphic.css"
import {Card} from 'antd';


interface Config {
  data: {
    type: string;
    value: string;
  };
  xField: (d: any) => Date;
  yField: string;
  seriesField: string;
  colorField: string;
  shapeField: string;
  stack: {
    orderBy: "maxIndex" | "series" | "value" | "sum" | string[];
    reverse: boolean;
    y?: "y" | "y1" | undefined;
  };
  axis: {
    y: { labelFormatter: string };
  };
  tooltip: { channel: string; valueFormatter: string };
  line: {
    stack: {
      orderBy: "maxIndex" | "series" | "value" | "sum" | string[];
      reverse: boolean;
      y?: "y" | "y1" | undefined;
    };
    style: { stroke: string };
  };
}

const DemoArea = () => {
  const config: Config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/f38a8ad0-6e1f-4bb3-894c-7db50781fdec.json',
    },
    xField: (d: any) => new Date(d.year),
    yField: 'revenue',
    seriesField: 'format',
    colorField: 'group',
    shapeField: 'smooth',
    stack: {
      orderBy: 'maxIndex',
      reverse: true,
    },
    axis: {
      y: { labelFormatter: '~s' },
    },
    tooltip: { channel: 'y', valueFormatter: '.2f' },
    line: {
      stack: {
        orderBy: 'maxIndex',
        reverse: true,
        y: 'y1',
      },
      style: {
        stroke: 'white',
      },
    },
  };
  return <Area {...config} />;
};

const OptionGraphic = () => {
  return (
    <div className='option-graphic'>
        <Card className="option-two-graphic-card">
            <DemoArea />
        
        </Card>  
     
    </div>
  )
}

export default OptionGraphic;
