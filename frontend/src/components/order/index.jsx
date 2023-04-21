import React from "react";
import { BiChevronRight } from "react-icons/bi";

// const orderData = [
//   {
//     orderId: 4283,
//     date: "March 7, 1823",
//     totalPrice: 90.0,
//     method: " Cash on delivery",
//   },
// ];
export default function OrderIndex() {
  return (
    <div
      className="py-3 w-90 auto"
      style={{ border: "1px solid rgba(0,0,0,.1)", padding: "3rem" }}
    >
      <h2
        className="py-2 fs-35 text-bold text-dark"
        style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
      >
        Thank you. Your order has been received.
      </h2>
      <div className="py-4 flex column gap-1">
        {/* order number */}
        <div className="w-100 flex item-center gap-1">
          <div
            className="flex item-center justify-center"
            style={{
              width: "1.8rem",
              height: "1.8rem",
              borderRadius: "50%",
              background: "var(--primary)",
            }}
          >
            <BiChevronRight className="text-white fs-12" style={{color:"#fff"}}/>
          </div>
          <div className="fs-18 family1 text-light text-dark">
            Order number: <strong className="text-bold">4282</strong>
          </div>
        </div>

        {/* date */}
        <div className="w-100 flex item-center gap-1">
          <div
            className="flex item-center justify-center"
            style={{
              width: "1.8rem",
              height: "1.8rem",
              borderRadius: "50%",
              background: "var(--primary)",
            }}
          >
            <BiChevronRight className="text-white fs-12" style={{color:"#fff"}}/>
          </div>
          <div className="fs-18 family1 text-light text-dark">
            Date: <strong className="text-bold">March 7, 1823</strong>
          </div>
        </div>

        {/* total order price */}
        <div className="w-100 flex item-center gap-1">
          <div
            className="flex item-center justify-center"
            style={{
              width: "1.8rem",
              height: "1.8rem",
              borderRadius: "50%",
              background: "var(--primary)",
            }}
          >
            <BiChevronRight className="text-white fs-12" style={{color:"#fff"}}/>
          </div>
          <div className="fs-18 family1 text-light text-dark">
            Total: <strong className="text-bold">$90.00</strong>
          </div>
        </div>

        {/* payment method */}
        <div className="w-100 flex item-center gap-1">
          <div
            className="flex item-center justify-center"
            style={{
              width: "1.8rem",
              height: "1.8rem",
              borderRadius: "50%",
              background: "var(--primary)",
            }}
          >
            <BiChevronRight className="text-white fs-12" style={{color:"#fff"}}/>
          </div>
          <div className="fs-18 family1 text-light text-dark">
            Payment method:{" "}
            <strong className="text-bold">Cash on delivery</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
