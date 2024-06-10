import React from 'react'
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import "../styles/buttonscompare.css"

const menuItems = [
    { key: '1', label: 'Save Forecasts' },
    { key: '2', label: 'View Saved Forecasts' },
    { key: '3', label: 'Compare Forecasts' }
];

const ButtonsCompare = () => {
    const menu = {
        items: menuItems
    };

    return (
        <div className='comparebutton-container'>
             <div className="applygrowthfactor">
                    <button className='applygrowthfactor-button'>Apply Growth Factor <InfoCircleOutlined /></button>
            </div>
            <div className="compare-actions">
                <Dropdown menu={menu} trigger={['click']}>
                    <Button className="action-button">
                        Actions <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
        </div>
    );
};

export default ButtonsCompare;
