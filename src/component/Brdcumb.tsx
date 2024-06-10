import React from 'react'
import "../styles/brdcumb.css"
import { Breadcrumb } from 'antd';

const menuItems = [
  {
    key: '1',
    title:'Compare',
    path: '/compare'
  },
  
];

const Brdcumb = () => {

  return (
    <div className='brdcrumb'>
    <Breadcrumb 
      separator=">"
      items={[
        {
          title: <a href="/Setup" 
          className="custom-breadcrumb"
          >Setup</a>,
        },
        {
          title: <a href="/Governance" 
          className="custom-breadcrumb"
          >Governance</a>,
          menu: { items: menuItems },
        },
        {
          title: 'Forecasting',
        },
      ]}
    />
  
    </div>
  )
}

export default Brdcumb
