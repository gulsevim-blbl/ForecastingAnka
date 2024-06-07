import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import "../styles/buttons.css";

const menuItems = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
    { key: '3', label: 'Action 3' }
];

const Buttons = () => {
    const menu = {
        items: menuItems
    };

    return (
        <div className='button-container'>
            <div className="actions">
                <Dropdown menu={menu} trigger={['click']}>
                    <Button className="action-button">
                        Actions <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
            <div className="subscribe">
                <Button className='subscribe-button'>Subscribe</Button>
            </div>
            <div className="save">
                <Button className='saveReport'>Save Report</Button>
            </div>
        </div>
    );
};

export default Buttons;
