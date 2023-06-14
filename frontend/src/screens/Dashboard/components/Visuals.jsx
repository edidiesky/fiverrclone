import React from 'react';
import Chart from "react-apexcharts";
import styled from 'styled-components';
// import { Bar } from 'react-chartjs-2';
const chartOptions = {
  chart: {
    height: 350,
    type: "line",
    stacked: false
  },
  dataLabels: {
    enabled: false
  },
  colors: ["#FF1654", "#247BA0"],
  series: [
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58]
    }
  ],
  stroke: {
    width: [4, 4]
  },
  plotOptions: {
    bar: {
      columnWidth: "20%"
    }
  },
  xaxis: {
    categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
  },
  yaxis: [
    {
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#FF1654"
      },
      labels: {
        style: {
          colors: "#FF1654"
        }
      },
      title: {
        text: "Series A",
        style: {
          color: "#FF1654"
        }
      }
    },
    {
      opposite: true,
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#247BA0"
      },
      labels: {
        style: {
          colors: "#247BA0"
        }
      },
      title: {
        text: "Series B",
        style: {
          color: "#247BA0"
        }
      }
    }
  ],
  tooltip: {
    shared: false,
    intersect: true,
    x: {
      show: false
    }
  },
  legend: {
    horizontalAlign: "left",
    offsetX: 40
  }
}

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
    <VisualsWrapper className='w-100'>
      {/* <Bar data={chartData} /> */}
    
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={450}
      />
    </VisualsWrapper>
  );
};

const VisualsWrapper = styled.div`
width:100%;
padding:2rem 1.5rem;
background:var(--white);
display:flex;
border-radius:6px;
flex-direction:column;
  h3 {
    font-size:2.5rem;
    color:var(--text-color);
    font-weight:600;
    text-transform: uppercase;
    font-family: "Barlow", sans-serif;
  }

`;


export default VisualChart;
