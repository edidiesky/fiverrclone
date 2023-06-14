import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import {
//   getProductStats,
//   getAllProduct,
//   getAllCustomer,
//   getCustomerOrderStats,
// } from "../../../Features";
import styled from "styled-components";
// import { Widget, Visuals, Header, Chart, Orders, Alert } from "../components";
import { Widget } from "../components";
import VisualChart from "../components/Visuals";

// import Products from "./Products";

const StatisticsWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  .chartWrapper {
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    place-items: start;
  }
`;

export default function Statistics() {
  // // get all Order statistics and product statistics
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllProduct());
  //   dispatch(getAllCustomer());
  //   dispatch(getCustomerOrderStats());
  //   dispatch(getProductStats());
  // }, []);
  // const { userInfo } = useSelector((store) => store.user);

  return (
    <>
      {/* <Alert /> */}
      <StatisticsWrapper>
        <Widget />
        <div className="chartWrapper">
          {/* <Chart title="Analytics" />
          <Visuals /> */}
          <VisualChart />
          <VisualChart />
        </div>
        {/* <Orders /> */}
      </StatisticsWrapper>
    </>
  );
}
