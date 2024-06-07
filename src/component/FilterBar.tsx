import React from 'react';
import { Button, Menu } from 'antd';
import { FilterOutlined, DownOutlined, SmileOutlined, InfoCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import "../styles/filterbar.css";

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

const dropdownMenu = {
    items: [
        { key: '1', label: 'Upsize' },
        { key: '2', label: 'Downsize' },
        { key: '3', label: 'Terminate' }
    ]
};

const FilterBar = () => {
    return (
        <div className='filterbar-container'>
            <Dropdown menu={dropdownMenu} trigger={['click']}>
                <Button className="filter-button">
                    <FilterOutlined />FILTERS
                </Button>
            </Dropdown>
            <div className="timeInverval">
                <p>Time Inverval </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                            Monthly <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="forecastDuration">
                <p>Forecast Duration <InfoCircleOutlined /> </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                            12 months <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="historicalData">
                <p>Historical Data </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                            12 months <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="category">
                <p>Category <InfoCircleOutlined /> </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                            Accounts <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="filter-buttons">
                <button className='update'>update</button>
                <button className='reset'>reset</button>
            </div>
        </div>
    );
};

export default FilterBar;
