import React from 'react'
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import "../styles/comparedonutchart.css"

const CompareDonutChart = () => {

    const filledPercentage = 30; // Dolu kısmın yüzdesi
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
              size: '70%', // Donut boyutunu ayarla
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
        <div className='compare-donutchart'>
          <div className="comparechart">
             <Chart options={data.options} series={data.series} type="donut" />
          </div>
          <div className="donutchart-text">
            <p>June Annual Budget</p>
            <p className='compare-donut-price'>$46,900,000</p>
            
          </div>
        </div>
      );
};

export default CompareDonutChart
