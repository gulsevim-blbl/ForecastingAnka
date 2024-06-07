import React from 'react';
import { DualAxes } from '@ant-design/plots';
import { linearRegression } from 'simple-statistics';

const Graphic = () => {
  // Mevcut veriler
  const uvBillData = [
    { "time": "2020-11", "value": 250, "type": "Compute Engine-VMs" },
    { "time": "2020-11", "value": 30, "type": "Compute Engine-Storage" },
    { "time": "2020-11", "value": 10, "type": "Credit - Substained Usage Discount" },
    { "time": "2020-11", "value": 10, "type": "Credit - Others" },
    { "time": "2020-11", "value": 10, "type": "Container - Small Clusters" },
    { "time": "2020-11", "value": 0, "type": "BigQuery - Analysis" },
    { "time": "2020-11", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2020-11", "value": 0, "type": "Cloud SQL - Other" },
    { "time": "2020-11", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2020-11", "value": 0, "type": "DataFlow - Vcpu" },
    { "time": "2020-11", "value": 10, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2020-12", "value": 250, "type": "Compute Engine-VMs" },
    { "time": "2020-12", "value": 50, "type": "Compute Engine-Storage" },
    { "time": "2020-12", "value": 10, "type": "Credit - Substained Usage Discount" },
    { "time": "2020-12", "value": 20, "type": "Credit - Others" },
    { "time": "2020-12", "value": 0, "type": "Container - Small Clusters" },
    { "time": "2020-12", "value": 0, "type": "BigQuery - Analysis" },
    { "time": "2020-12", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2020-12", "value": 0, "type": "Cloud SQL - Other" },
    { "time": "2020-12", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2020-12", "value": 0, "type": "DataFlow - Vcpu" },
    { "time": "2020-12", "value": 10, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2021-01", "value": 250, "type": "Compute Engine-VMs" },
    { "time": "2021-01", "value": 30, "type": "Compute Engine-Storage" },
    { "time": "2021-01", "value": 20, "type": "Credit - Substained Usage Discount" },
    { "time": "2021-01", "value": 0, "type": "Credit - Others" },
    { "time": "2021-01", "value": 10, "type": "Container - Small Clusters" },
    { "time": "2021-01", "value": 20, "type": "BigQuery - Analysis" },
    { "time": "2021-01", "value": 20, "type": "Compute Engine - Licenses" },
    { "time": "2021-01", "value": 10, "type": "Cloud SQL - Other" },
    { "time": "2021-01", "value": 15, "type": "Compute Engine - Licenses" },
    { "time": "2021-01", "value": 20, "type": "DataFlow - Vcpu" },
    { "time": "2021-01", "value": 0, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2021-02", "value": 250, "type": "Compute Engine-VMs" },
    { "time": "2021-02", "value": 50, "type": "Compute Engine-Storage" },
    { "time": "2021-02", "value": 30, "type": "Credit - Substained Usage Discount" },
    { "time": "2021-02", "value": 20, "type": "Credit - Others" },
    { "time": "2021-02", "value": 40, "type": "Container - Small Clusters" },
    { "time": "2021-02", "value": 15, "type": "BigQuery - Analysis" },
    { "time": "2021-02", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2021-02", "value": 0, "type": "Cloud SQL - Other" },
    { "time": "2021-02", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2021-02", "value": 8, "type": "DataFlow - Vcpu" },
    { "time": "2021-02", "value": 3, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2021-03", "value": 280, "type": "Compute Engine-VMs" },
    { "time": "2021-03", "value": 30, "type": "Compute Engine-Storage" },
    { "time": "2021-03", "value": 10, "type": "Credit - Substained Usage Discount" },
    { "time": "2021-03", "value": 10, "type": "Credit - Others" },
    { "time": "2021-03", "value": 15, "type": "Container - Small Clusters" },
    { "time": "2021-03", "value": 10, "type": "BigQuery - Analysis" },
    { "time": "2021-03", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2021-03", "value": 10, "type": "Cloud SQL - Other" },
    { "time": "2021-03", "value": 0, "type": "Compute Engine - Licenses" },
    { "time": "2021-03", "value": 20, "type": "DataFlow - Vcpu" },
    { "time": "2021-03", "value": 30, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2021-04", "value": 250, "type": "Compute Engine-VMs" },
    { "time": "2021-04", "value": 60, "type": "Compute Engine-Storage" },
    { "time": "2021-04", "value": 40, "type": "Credit - Substained Usage Discount" },
    { "time": "2021-04", "value": 10, "type": "Credit - Others" },
    { "time": "2021-04", "value": 20, "type": "Container - Small Clusters" },
    { "time": "2021-04", "value": 10, "type": "BigQuery - Analysis" },
    { "time": "2021-04", "value": 30, "type": "Compute Engine - Licenses" },
    { "time": "2021-04", "value": 10, "type": "Cloud SQL - Other" },
    { "time": "2021-04", "value": 10, "type": "Compute Engine - Licenses" },
    { "time": "2021-04", "value": 10, "type": "DataFlow - Vcpu" },
    { "time": "2021-04", "value": 10, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2021-05", "value": 270, "type": "Compute Engine-VMs" },
    { "time": "2021-05", "value": 40, "type": "Compute Engine-Storage" },
    { "time": "2021-05", "value": 10, "type": "Credit - Substained Usage Discount" },
    { "time": "2021-05", "value": 10, "type": "Credit - Others" },
    { "time": "2021-05", "value": 20, "type": "Container - Small Clusters" },
    { "time": "2021-05", "value": 40, "type": "BigQuery - Analysis" },
    { "time": "2021-05", "value": 20, "type": "Compute Engine - Licenses" },
    { "time": "2021-05", "value": 15, "type": "Cloud SQL - Other" },
    { "time": "2021-05", "value": 15, "type": "Compute Engine - Licenses" },
    { "time": "2021-05", "value": 10, "type": "DataFlow - Vcpu" },
    { "time": "2021-05", "value": 10, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2021-06", "value": 240, "type": "Compute Engine-VMs" },
    { "time": "2021-06", "value": 50, "type": "Compute Engine-Storage" },
    { "time": "2021-06", "value": 10, "type": "Credit - Substained Usage Discount" },
    { "time": "2021-06", "value": 40, "type": "Credit - Others" },
    { "time": "2021-06", "value": 10, "type": "Container - Small Clusters" },
    { "time": "2021-06", "value": 20, "type": "BigQuery - Analysis" },
    { "time": "2021-06", "value": 22, "type": "Compute Engine - Licenses" },
    { "time": "2021-06", "value": 10, "type": "Cloud SQL - Other" },
    { "time": "2021-06", "value": 25, "type": "Compute Engine - Licenses" },
    { "time": "2021-06", "value": 15, "type": "DataFlow - Vcpu" },
    { "time": "2021-06", "value": 0, "type": "Compute Engine - CPU - Nvidia Tesla P4s" },
    { "time": "2021-07", "value": 350, "type": "Compute Engine-VMs" },
    { "time": "2021-07", "value": 50, "type": "Compute Engine-Storage" },
    { "time": "2021-07", "value": 10, "type": "Credit - Substained Usage Discount" },
    { "time": "2021-07", "value": 20, "type": "Credit - Others" },
    { "time": "2021-07", "value": 20, "type": "Container - Small Clusters" },
    { "time": "2021-07", "value": 40, "type": "BigQuery - Analysis" },
    { "time": "2021-07", "value": 15, "type": "Compute Engine - Licenses" },
    { "time": "2021-07", "value": 60, "type": "Cloud SQL - Other" },
    { "time": "2021-07", "value": 40, "type": "Compute Engine - Licenses" },
    { "time": "2021-07", "value": 20, "type": "DataFlow - Vcpu" },
    { "time": "2021-07", "value": 10, "type": "Compute Engine - CPU - Nvidia Tesla P4s" }
  ];

   // Tahmin edilen verilerin oluşturulması için lineer regresyon kullanımı
   const predictedData: { time: string; value: number; type: string }[] = [];
   const types = Array.from(new Set(uvBillData.map(item => item.type))); // Tüm unique type'ları al
   const months = ['2021-08', '2021-09', '2021-10', '2021-11']; // Tahmin edilecek aylar
   
   // Her bir type için tahmin verilerini oluştur
   types.forEach(type => {
     months.forEach(month => {
       const filteredData = uvBillData.filter(item => item.type === type && item.time < month);
       const yValues = filteredData.map(item => item.value);
       const { m, b } = linearRegression([yValues]); // yValues dizisini bir dizi içine yerleştirin
       const predictedValue = m * new Date(month).getTime() + b;
       predictedData.push({ time: month, value: predictedValue, type: type });
     });
   });
 
   // Grafik konfigürasyonu
   const config = {
     xField: 'time',
     children: [
       {
         data: uvBillData,
         type: 'interval',
         yField: 'value',
         stack: true,
         colorField: 'type',
         style: { maxWidth: 80 },
         scale: { y: { domainMax: 1200 } },
         interaction: { elementHighlightByColor: { background: true } },
       },
       {
         data: predictedData,
         type: 'interval',
         yField: 'value',
         stack: true,
         colorField: 'type',
         style: { maxWidth: 80 }, 
         scale: { y: { domainMax: 1200 } }, 
         axis: { y: { position: 'right' } },
         interaction: {
           tooltip: {
             crosshairs: false,
             marker: false,
           },
         },
       },
     ],
   };
 
   // Grafik bileşeni
   return <DualAxes {...config} />;
 };
 
 export default Graphic;