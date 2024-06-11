import React, { useState, useEffect } from 'react';
import { Table, Spin } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import "../styles/selectforecasts.css";
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  account: string;
  services: string;
  budget: string;
  historicalData: string;
  growthFactor: string;
  inclusions: string;
  creationDate: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Account',
    dataIndex: 'account',
  },
  {
    title: 'Services',
    dataIndex: 'services',
  },
  {
    title: 'Budget',
    dataIndex: 'budget',
  },
  {
    title: 'Historical Data',
    dataIndex: 'historicalData',
  },
  {
    title: 'Growth Factor',
    dataIndex: 'growthFactor',
  },
  {
    title: 'Inclusions',
    dataIndex: 'inclusions',
  },
  {
    title: 'Creation Date',
    dataIndex: 'creationDate',
  },
];

const SelectForecasts = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/optionData.json'); 
        const result = await response.json();
        const formattedData: DataType[] = result.optionData.map((item: any, index: number) => ({
          key: index,
          account: item.Account,
          services: item.Services,
          budget: item.Budget,
          historicalData: item["Historical Data"],
          growthFactor: item["Growth Factor"],
          inclusions: item.Inclusions,
          creationDate: item["Creation Date"],
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const onSelectChange = (selectedRowKeys: React.Key[]) => {
    // Limit selection to maximum 3 rows
    if (selectedRowKeys.length > 3) {
      selectedRowKeys.splice(3);
    }
    setSelectedRowKeys(selectedRowKeys);
  };

  const handleContinue = () => {
    // Navigate to compareoptiontwo route
    navigate('/compareoptiontwo');
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  if (loading) {
    return <Spin tip="Loading..." />;
  }

  return (
    <div className="select-option">
      <nav>
        <p className='main-title'>Compare (1/2): Select Forecasts</p>
        <p className='main-info'>Select maximum of 3 forecasts to Compare</p>
        <div className="icon">
          <CloseOutlined />
        </div>
      </nav>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ pageSize: 6 }}/>
      <div className="continue"> 
        <button className='continue-button' onClick={handleContinue} disabled={selectedRowKeys.length === 0}>Continue</button>
      </div>
    </div>
  );  
};

export default SelectForecasts;
