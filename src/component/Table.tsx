import React from 'react';
import { CiViewColumn } from "react-icons/ci";
import "../styles/table.css";

type Account = {
  name: string;
  actuals: number[];
  forecasted: number[];
};

const formatCurrency = (value: number): string => {
  return `$${value.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

const accountsData: Account[] = [
  { name: 'Total', actuals: [150015000, 150015000, 150015000, 150015000, 150015000, 150015000], forecasted: [] },
  { name: 'CloudHealth NG Prod', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
  { name: 'CloudHealth Staging', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
  { name: 'CloudHealth NG Dev', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
  { name: 'CloudHealth NG Staging', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
  { name: 'CloudHealth Management', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
  { name: 'CloudHealth Starburst', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
  { name: 'CloudHealth EDS', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
  { name: 'CloudHealth NG Prod', actuals: [25087000, 25000000, 25087000, 25000000, 25087000, 25000000], forecasted: [] },
];

const forecastMonths = 3;

const forecastPrices = (accounts: Account[], forecastMonths: number): Account[] => {
  return accounts.map(account => {
    const { actuals } = account;
    const forecasted = [];

    for (let i = 0; i < forecastMonths; i++) {
      const avg = actuals.reduce((sum, price) => sum + price, 0) / actuals.length;
      forecasted.push(avg);
    }

    return { ...account, forecasted };
  });
};

const Table = () => {
  const updatedAccounts = forecastPrices(accountsData, forecastMonths);

  return (
    <div className='table'>
      <table border={1}>
        <thead>
          <tr>
            <th>Account Name</th>
            <th>2022-11 Actuals</th>
            <th>2022-12 Actuals</th>
            <th>2023-01 Actuals</th>
            <th>2023-02 Actuals</th>
            <th>2023-03 Actuals</th>
            <th>2023-04 Actuals</th>
            <th>2023-05 Forecasted</th>
            <th>2023-06 Forecasted</th>
            <th>2023-07 Forecasted</th>
          </tr>
        </thead>
        <tbody>
          {updatedAccounts.map((account, index) => (
            <tr key={index}>
              <td>{account.name}</td>
              {account.actuals.map((actual, idx) => (
                <td key={idx}>{formatCurrency(actual)}</td>
              ))}
              {account.forecasted.map((forecast, idx) => (
                <td key={account.actuals.length + idx} className="forecasted-cell">{formatCurrency(forecast)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <CiViewColumn />
      </div>
    </div>
  );
};

export default Table;
