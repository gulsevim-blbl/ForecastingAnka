import React from 'react'
import "../styles/brdcumb.css"
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'; 

const Brdcumb = () => {
  return (
    <div className='brdcrumb'>
    <Breadcrumb separator=">">
        <Breadcrumb.Item className="custom-breadcrumb">
            <Link to="/Setup">Setup</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item className="custom-breadcrumb">
            <Link to="/Governance">Governance</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Forecasting</Breadcrumb.Item>

    </Breadcrumb>

</div>
  )
}

export default Brdcumb