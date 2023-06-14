import React from 'react';
import Chart from 'react-apexcharts';

// import { Bar } from 'react-chartjs-2';
const chartOptions = {
  // Customize chart options here
  chart: {
    id: 'basic-bar',
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June'],
  },
  series: [
    {
      name: 'Series 1',
      data: [30, 40, 45, 50, 49, 60],
    },
  ],
};


const VisualChart = () => {
  // const chartData = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: 'Example Dataset',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: 'rgba(75,192,192,0.2)',
  //       borderColor: 'rgba(75,192,192,1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div>
      {/* <Bar data={chartData} /> */}
      <div>
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={350}
      />
    </div>
    </div>
  );
};

export default VisualChart;
