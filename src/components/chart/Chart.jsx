import React from "react";
import { Chart, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2'


 


const BarChart = () => {
    Chart.register(...registerables);

    const data = {
        labels: ['Jan', 'Mar', 'May', 'July', 'Oct'],
        datasets: [
          {
            label: 'Iphone sales',
            data: [400, 1000, 4000, 800, 1500],
            fill: true,
            pointBorderColor:"blue",
            pointBorderWidth:5,
            pointRadius:8,
            tension: 0.4
          },
        ],
      };
      
      const options = {
        responsive: true,
        plugins:{legend:{display:false}},
        layout:{padding:{bottom:100}},
        scales: {
          y:{
            ticks:{
              color:"black",
              font:{
                size:18
              }
            },
            grid:{
              color:"black"
            }
          },
          x:{
            ticks:{
              color:"black",
              font:{
                size:18
              }
            }
          }
        },
      };



    
  return (
    <div className='chart-container'>
     <Bar data={data} options={options}/>
    </div>
  );
};

export default BarChart;
