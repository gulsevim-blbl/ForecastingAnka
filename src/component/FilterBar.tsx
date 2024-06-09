import React, { useState } from 'react';
import { Button, Dropdown, Space, Collapse, Radio, Select, Input } from 'antd';
import { FilterOutlined, DownOutlined, SmileOutlined, InfoCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
// import { Dropdown, Space } from 'antd';
import "../styles/filterbar.css";


const { Panel } = Collapse;
const { Option } = Select;

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



const FilterBar = () => {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [growthFactorType, setGrowthFactorType] = useState('standard');
    
    const toggleFilterMenu = () => {
        setIsFilterOpen(!isFilterOpen);
    };


    return (
        <div className='filterbar-container'>
            
            <Button className="filter-button" onClick={toggleFilterMenu}>
                <FilterOutlined />FILTERS
            </Button>
            <div className={`filter-panel ${isFilterOpen ? 'open' : ''}`}>
                <div className="top">
                        <div className="button-container">
                            <p className='title-filter'>Filters</p>
                            <div className="clear">
                                 <Button className='clear-button'>Clear</Button>
                            </div>
                            <div className="cancel">
                                 <Button className='cancel-button'>Cancel Report</Button>
                            </div>
                            <div className="apply">
                                <Button className='apply-button'>Appley</Button>
                            </div>
                        </div>
                </div>
                <div className="filters-area">
                        <div className="Budget">
                            <p>Budget </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        Quarterly AWS Budget <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Accounts">
                            <p>Accounts </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    CloudHealth, CloudHealth EDS, CloudHealth MGT, Prod +4 more   <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Services">
                            <p>Services </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Amazon API, Other, CloudHealth Starburt, Amazon Doc DB  +3 more   <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Billing Accounts">
                            <p>Services </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Select Billing Accounts <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Charge Type">
                            <p>Charge Type </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Select Charge Type <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Months">
                            <p>Months </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Select Months<DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Regions">
                            <p>Regions </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Select Regions<DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Inclusions">
                            <p>Inclusions </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Commitment discounts, Anomalies, Policies, Alerts,  APIs +2<DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Chart Type">
                            <p>Chart Type </p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Stacked Bar (default)<DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="X Axis">
                            <p>X Axis</p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Months<DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>

                        <div className="Y Axis">
                            <p>Y Axis</p>
                            <Dropdown menu={{ items }}>
                                <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                    Cost ($)<DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                </div>
                <div className="growth-factor">

                </div>
            </div>
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
