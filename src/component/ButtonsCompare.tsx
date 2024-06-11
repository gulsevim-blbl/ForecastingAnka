import React from 'react';
import { Button, Dropdown, Menu } from 'antd';
import { DownOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { MenuInfo } from 'rc-menu/es/interface'; // Import the MenuInfo type
import "../styles/buttonscompare.css";

const menuItems = [
    { key: '1', label: 'Save Forecasts' },
    { key: '2', label: 'View Saved Forecasts' },
    { key: '3', label: 'Compare Forecasts', path: '/compareoption' }
];

const ButtonsCompare: React.FC = () => {
    const navigate = useNavigate();

    const handleMenuClick = (e: MenuInfo) => {
        const menuItem = menuItems.find(item => item.key === e.key);
        if (menuItem && menuItem.path) {
            navigate(menuItem.path);
        }
    };

    const menu = (
        <Menu onClick={handleMenuClick}>
            {menuItems.map(item => (
                <Menu.Item key={item.key}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className='comparebutton-container'>
            <div className="applygrowthfactor">
                <button className='applygrowthfactor-button'>
                    Apply Growth Factor <InfoCircleOutlined />
                </button>
            </div>
            <div className="compare-actions">
                <Dropdown overlay={menu} trigger={['click']}>
                    <Button className="action-button">
                        Actions <DownOutlined />
                    </Button>
                </Dropdown>
            </div>
        </div>
    );
};

export default ButtonsCompare;
