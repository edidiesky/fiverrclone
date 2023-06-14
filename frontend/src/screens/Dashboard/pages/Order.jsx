import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { getAllCustomersOrder } from "../../../Features";
import { Pagination, Header, Topbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { TableCard } from "../components";
import { Table } from "./styles";
import Message from "../../../components/loaders/Message";
import LoaderIndex from "../../../components/loaders/index";
import { orderData } from "../../../data/Order";

export default function Order() {
  const dispatch = useDispatch();

  // const { isLoading, orders, totalorder, orderpage } = useSelector(
  //   (store) => store.order
  // );

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   dispatch(getAllCustomersOrder());
  // }, [orderpage]);

  return (
    <>
      {/* <Alert />
      {isLoading && <LoaderIndex loading={isLoading} />} */}
      {/* <Header
        text={"My orders"}
        subtext={"Here is what is happening with your orders today"}
      /> */}
      <Topbar />
      <OrdersContainer >
        <div className="w-100 flex column gap-3">
          <h2 className="family1 flex-1 fs-30 text-dark">Orders</h2>
          <Table>
            <div className="TableTop">
              <div className="TableTopLeft"></div>
            </div>
            <div className="TableContainer">
              <table className="tableWrapper">
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Date</th>
                    <th>customer's Name</th>
                    <th>Total</th>
                    <th>Paid</th>
                    <th>Delivered</th>
                    <th>See Details</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData?.slice(0,4).map((x) => {
                    return <TableCard x={x} key={x?._id} type="orders" />;
                  })}
                </tbody>
              </table>
            </div>
            {/* {totalorder > 0 && <Pagination type={"order"} />} */}
          </Table>
        </div>
      </OrdersContainer>
    </>
  );
}

const OrdersContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 3rem;
`;
