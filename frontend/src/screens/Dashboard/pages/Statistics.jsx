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
import { Header, Orders, Topbar, Widget } from "../components";
import VisualChart from "../components/Visuals";

// import Products from "./Products";

const StatisticsWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2 {
    font-size: 50px;
    font-weight: 700;
    span {
      color: var(--green);
    }
  }

  .chartWrapper {
    margin: 0 auto;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    place-items: start; */
    @media (max-width: 980px) {
      width: 95%;
    }
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
      <StatisticsWrapper>
        <div className="w-90 auto">
          <h2 className="family1 w-90 text-bold auto flex-1 fs-30 text-dark">
            Your Sales Balance is

            <span className="block family2 text-grey3 text-bold w-50">
             $400,4000
            </span>
          </h2>
        </div>
        <Widget />
        <div className="chartWrapper w-100 flex column gap-2">
           <VisualChart type={"line"} />
          {/* <VisualChart type={"line"} />
          <VisualChart type={"bar"} />
          <Orders /> */}
        </div>
      </StatisticsWrapper>
    </>
  );
}
