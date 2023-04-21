import React from "react";
import { RightWrapper } from "../checkout/Right";

export default function Info() {
  return (
    <div
      className="py-3 w-90 auto"
      style={{ border: "1px solid rgba(0,0,0,.1)", padding: "3rem" }}
    >
      <h2
        className="py-2 fs-35 text-bold text-dark"
        style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
      >
        Order details
      </h2>
      <RightWrapper className="py-2">
        <div className="top flex column w-100 gap-4">
          <div className="w-100 flex column gap-4">
            {/* head of the table */}
            <div className="w-100 flex item-center justify-space">
              <h4 className="fs-16 family1 text-bold text-dark">Product</h4>
              <h4 className="fs-16 family1 text-bold text-dark">Sub Total</h4>
            </div>
            {/* order content */}
            <div className="w-100 flex item-center gap-3">
              {/* order image */}
              <div className="w-100 flex item-center">
                <img
                  src="https://avada.theme-fusion.com/classic-shop/wp-content/uploads/sites/48/2015/10/spring_printed_dress.jpg"
                  alt=""
                  style={{ height: "15rem" }}
                />
                <div className="flex column gap-1">
                  <h6 className="fs-14 text-bold family1 text-dark">
                    Women Sport Kit - Large × 1
                  </h6>
                  <h6 className="fs-14 text-bold family1 text-dark">
                    Colors: Blue Grey
                  </h6>
                </div>
              </div>
              {/* total qty price */}
              <h5 className="fs-18 text-bold family1 text-dark py-3">$40</h5>
            </div>
          </div>
        </div>
        <div className="flex center py-2">
          {/* order summary */}
          <div className="w-50 flex gap-2 column">
            <h5 className="text-bold fs-16 text-dark w-100 flex item-center justify-space">
              Subtotal
              <span className="text-light">$45.00</span>
            </h5>
            <h5 className="text-bold fs-16 text-dark w-100 flex item-center justify-space">
              Payment method
              <span className="text-light">Cash on delivery</span>
            </h5>
            <h5 className="text-bold fs-16 text-dark w-100 flex item-center justify-space">
              Total
              <span className="text-light">$45.00</span>
            </h5>
          </div>
        </div>
      </RightWrapper>
    </div>
  );
}
