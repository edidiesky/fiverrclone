import React from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";
// import { Bar } from 'react-chartjs-2';

const VisualChart = ({type}) => {
  const chartOptions = {
    chart: {
      height: 350,
      width: "100%",
      type: type,
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["var(--dark-1)"],
    series: [
      {
        name: "Series A",
        data: [1, 2,],
      },
    ],
    stroke: {
      width: [4, 4],
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
      },
    },
    xaxis: {
      categories: [2009, 2010,],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: "var(--dark-1)",
        },
        labels: {
          style: {
            colors: "var(--dark-1)",
          },
        },
        title: {
          text: "Series A",
          style: {
            color: "var(--dark-1)",
          },
        },
      },
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false,
      },
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40,
    },
  };

  return (
    <VisualsWrapper className="w-100">
      {/* <Bar data={chartData} /> */}

      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type={type}
        height={450}
      />
    </VisualsWrapper>
  );
};

const VisualsWrapper = styled.div`
  width: 100%;
  padding: 2rem 1.5rem;
  background: var(--white);
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  h3 {
    font-size: 2.5rem;
    color: var(--text-color);
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export default VisualChart;
