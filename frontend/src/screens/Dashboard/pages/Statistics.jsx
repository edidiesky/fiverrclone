import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import {Widget } from "../components";
import VisualChart from "../components/Visuals";
import { getSellerOrder } from "../../../Features/order/orderReducer";
import { Table } from "./styles";
import TableCards from "../components/TableCard";

// import Products from "./Products";

const StatisticsWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
  const [tab, setTab] = useState(1);
  const dispatch = useDispatch();

  const { order, isLoading } = useSelector((store) => store.order);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSellerOrder());
  }, []);
  

  return (
    <>
      <StatisticsWrapper>
        <div className="w-90 auto">
          <h2 className="family1 w-90 text-bold auto flex-1 text-dark">
            Your Sales Balance is
            <span className="block family2 text-grey3 text-bold w-50">
              $400,4000
            </span>
          </h2>
        </div>
        <div className="w-90 auto">
          <Widget />
        </div>
        <div className="chartWrapper w-90 auto flex column gap-2">
          <VisualChart type={"line"} />
        </div>
        <div className="w-90 auto">
          <div className="flex item-center w-90 auto flex item-start justify-space">
            <Table>
              <div className="TableContainer">
                <div className="flex column gap-2 justify-space w-100 flex-wrap">
                  {/* <h3 className="fs-24 text-bold">Transaction History</h3> */}
                </div>
                <table className="tableWrapper">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Gig Image</th>
                      <th>Gig Name</th>
                      <th>Date</th>
                      <th>Paid</th>
                      <th>Price</th>
                      <th>Estimated Tax</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.map((x) => {
                      return (
                        <TableCards type={"sellerorder"} x={x} key={x?._id} />
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
            </Table>
          </div>
        </div>
      </StatisticsWrapper>
    </>
  );
}
