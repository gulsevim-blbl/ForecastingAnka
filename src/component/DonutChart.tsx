import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import "../styles/donutchart.css";

const DonutChart = () => {
  const filledPercentage = 40; // Dolu kısmın yüzdesi
  const emptyPercentage = 100 - filledPercentage; // Boş kısmın yüzdesi
  const filledColor = '#62A420'; // Dolu kısmın rengi
  const emptyColor = '#CCCCCC'; // Boş kısmın rengi

  const data = {
    series: [filledPercentage, emptyPercentage],
    options: {
      chart: {
        type: 'donut' as const, 
        toolbar: {
          show: false // Araç çubuğunu gizle
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '90%', // Donut boyutunu ayarla
            labels: {
              show: false // Etiketleri gizle
            }
          }
        }
      },
      colors: [filledColor, emptyColor], // Renkler
      stroke: {
        width: 0 // Kenar çizgilerini kaldır
      },
      dataLabels: {
        enabled: false // Veri etiketlerini gizle
      },
      legend: {
        show: false // Açıklamayı gizle
      }
    } as ApexOptions
  };

  return (
    <div className='donutchart'>
      <div className="chart">
         <Chart options={data.options} series={data.series} type="donut" />
      </div>
      <div className="donutchart-text">
        <p>Asia FY Budget 2023</p>
        <p className='price'>$ 986,890</p>
        <p className='useddata'>40% Used till date</p>
      </div>
    </div>
  );
};

export default DonutChart;
