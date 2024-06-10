import React from 'react'
import { Breadcrumb } from 'antd';
import "../styles/CompareBrdcumb.css"

const CompareBrdcumb = () => {
  return (
    
      <div className='compare-brdcrumb'>
          <Breadcrumb 
                 separator=">"
                items={[
                 {
                   title: 'Goverance',
                 },
                 {
                    title: 'Forecasting',
                  },

        ]}
    />
    </div>

  )
}

export default CompareBrdcumb


