import React from 'react'
import "../styles/selectforecaststwo.css"
import { CloseOutlined ,DownOutlined,SmileOutlined} from '@ant-design/icons';
import { Dropdown, Space,MenuProps,Card} from 'antd';
import OptionGraphic from './OptionGraphic';


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                2nd menu item (disabled)
            </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
    },
    {
        key: '3',
        danger: true,
        label: 'a danger item',
    },
];




const SelectForecastsTwo = () => {
  return (
    <div className='select-option-two'>
      <nav>
        <p className='main-title'>Compare (2/2): View Details</p>

        <div className="icon">
          <CloseOutlined />
        </div> 
        <div className="Filters-select">
            <div className="timeInvervalFilter">
                <p>Time Inverval </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                            Monthly <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="Budget">
                <p>Budget (3)</p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                        HR, Fin, UX<DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
        </div>
      </nav>
    
        

    </div>
  )
}

export default SelectForecastsTwo
