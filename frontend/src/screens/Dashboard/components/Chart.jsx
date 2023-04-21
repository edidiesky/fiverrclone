import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import Chart from "react-apexcharts";
import { FaEye } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import TableCard from "./TableCard";
import Links from "./Links";
import Pagination from "./Pagination";
import { Table } from "../pages/styles";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";

export default function Visuals() {
  const dispatch = useDispatch();
  const { productStat, isLoading } = useSelector((store) => store.product);

  const ProductStatdate = productStat?.map((stats) => {
    const { date, count } = stats;
    return date;
  });

  const ProductQuantity = productStat?.map((stats) => {
    const { date, count } = stats;
    return count;
  });

  const [data, setData] = useState({
    options: {
      chart: {
        type: "bar",
        height: 450,
        fontFamily: "Montserrat",
        foreColor: "#081b36",
        fontSize: "20px",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ProductStatdate,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$" + val;
          },
        },
      },
    },
    series: [
      {
        name: "Product Count",
        data: ProductQuantity,
      },
    ],
  });

  return (
    <>
      <VisualsWrapper>
        {isLoading && <LoaderIndex />}
        <h3>Product Statistics</h3>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width={"100%"}
          height={450}
        />
      </VisualsWrapper>
    </>
  );
}

const VisualsWrapper = Styled.div`
width:100%;
padding:2rem;
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
