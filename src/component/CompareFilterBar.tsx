import React, { useState } from 'react';
import { Button, Dropdown, Space, Collapse, Radio,Checkbox} from 'antd';
import { FilterOutlined, DownOutlined, SmileOutlined, InfoCircleOutlined } from '@ant-design/icons';
import type { MenuProps,CheckboxProps } from 'antd';
import type { RadioChangeEvent } from 'antd/lib/radio';
import "../styles/CompareFilterBar.css"



/**Collapse yapısı için */
const { Panel } = Collapse;

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



const CompareFilterBar = () => {


    /**Side Menu */
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    
    const toggleFilterMenu = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    /**Radio Button  */
    const [value, setValue] = useState(1);

    const onRadioChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    
    // const [isClicked, setIsClicked] = useState(false);

    // const handleCollapseClick = () => {
    //     setIsClicked(!isClicked);
    // };

    /** Collapse Panel */
    const [activeKey, setActiveKey] = useState<string[]>([]);

    const handleCollapseClick = () => {
        setActiveKey(activeKey.length === 0 ? ['1'] : []);
    };
    
    /**checkbox */
    const onCheckboxChange: CheckboxProps['onChange'] = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return (
    <div className='comparefilterbar-container'>
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
                    <Collapse
                        activeKey={activeKey}
                        onChange={(key) => setActiveKey(key as string[])}
                        className={activeKey.length ? 'custom-collapse clicked' : 'custom-collapse'}
                    >
                        <Panel
                            header={
                                <span className="panel-header" onClick={handleCollapseClick}>
                                    Growth Factor <InfoCircleOutlined />
                                </span>
                            }
                            key="1"
                        >
                             <Radio.Group onChange={onRadioChange} value={value} className='cutom-radio-group'>
                                <Radio className='custom-radio' value={1}>Standard</Radio>
                                <Radio className='custom-radio' value={2}>Advanced</Radio>
                            </Radio.Group>
                            {value === 1 && (
                                <div className='standart-content'> 
                                    <div className="Duration">
                                        <p>Duration</p>
                                         <Dropdown menu={{ items }}>
                                        <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                 Annually<DownOutlined />
                                            </Space>
                                        </a>
                                         </Dropdown>
                                    </div>
                                    <div className="growthfactor">
                                        <p>Growth Factor %</p>
                                         <Dropdown menu={{ items }}>
                                        <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                            <Space className='space'>
                                                 %
                                            </Space>
                                        </a>
                                         </Dropdown>
                                         <p className='percentage'>
                                          <span className='span'>5%</span> System estimated value. <a href="#More">Learn More</a>
                                         </p>
                                    </div>
                                </div>
                            )}
                            {value === 2 && (
                                <div className='advanced-content'>
                                    {/* Show content for Advanced */}
                                    <div className="type ">
                                         <p>Type  <InfoCircleOutlined /> </p>
                                         <Dropdown menu={{ items }}>
                                             <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                                                 <Space className='advanced-space'>
                                                    Select type of growth factor   <DownOutlined />
                                                 </Space>
                                             </a>
                                         </Dropdown>
                                    </div>
                                </div>
                            )}
                        </Panel>
                    </Collapse>
                </div>
            </div>
            <div className="cloud">
                <p>Cloud </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                            AWS <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
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
                <p>Forecast Duration </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                            12 months <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>
            <div className="pasttimeframe">
                <p>Past timeframe </p>
                <Dropdown menu={{ items }}>
                    <a className='dropdown-link' onClick={(e) => e.preventDefault()}>
                        <Space>
                           Last 12 months <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </div>

            <Checkbox onChange={onCheckboxChange} className='checkbox'>Include current month</Checkbox>        
            
            <div className="category">
                <p>Category  </p>
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
  )
}

export default CompareFilterBar
