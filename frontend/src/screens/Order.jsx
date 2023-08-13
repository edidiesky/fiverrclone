import React, { useEffect } from "react";
import { Header, Meta } from "../components/common";
import OrderIndex from "../components/order";
import Info from "../components/order/Info";
import styled from "styled-components";

export default function Order() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Meta title={"My Orders"} />
      {/* <Banner1/> */}
      {/* <Banner title="Order Success" /> */}
      <Header />

      <OrderWrapper
        className="py-2 w-90 auto flex column gap-1"
        style={{ border: "1px solid rgba(0,0,0,.1)", margin: "2rem auto" }}
      >
        <h3
          className="py-2 w-90 auto family1 text-bold text-dark"
          style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
        >
          Thank you. Your order has been received.
        </h3>
        <div className="flex item-center w-90 auto flex item-start justify-space">
          <OrderIndex />
          <Info />
        </div>
      </OrderWrapper>
    </>
  );
}

const OrderWrapper = styled.div`
  .py-3 {
    padding: 0;
    @media (max-width: 480px) {
      padding: 2rem 0rem;
    }
  }
  h3 {
    font-size: 24px;

    @media (max-width: 680px) {
      font-size: 2.4rem !important;
    }
  }
`;
