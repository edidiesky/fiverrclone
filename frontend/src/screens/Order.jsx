import React from "react";
import { Banner1, Meta } from "../components/common";
import OrderIndex from "../components/order";
import Info from "../components/order/Info";

export default function Order() {
  return (
    <>
      <Meta title={'My Orders'}/>
      <Banner1/>
      <div className="py-4 w-100 flex column gap-2">
        <OrderIndex/>
        <Info/>
      </div>
    </>
  );
}
