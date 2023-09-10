import React from "react";
import styled from "styled-components";
import Top from "./Top";

export default function Right() {
  return (
    <RightIndexWrapper>
      <Top type={'details'} />
      <div className="top w-100">
        <div className="w-85 auto gap-2 flex item-start column">
          {/*lisitng image to book */}
          <div className="flex bottom1 w-100 flex column gap-2">
            <div className="image_wrapper">
              <img
                src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-47935370/original/3cfda1b1-1e16-43af-b062-2f9b7652efa9.jpeg?aki_policy=large"
                alt=""
                className="w-100 h-100"
              />
            </div>
            <h4 className="fs-20 text-extra-bold text-dark">
              Ready to book?
              <span
                style={{ marginTop: "8px" }}
                className="block fs-16 text-light"
              >
                Bookiply lets guests book instantly.
              </span>
            </h4>
            <div className="bookBtn fs-16 text-bold text-center">Book Now</div>
          </div>
          {/* trip details */}
          <div className="flex bottom1 w-100 flex column gap-2">
            <h4 className="fs-24 text-extra-bold text-dark">
              Trip Details
              <span
                style={{ marginTop: "8px", fontWeight: "700" }}
                className="block text-dark fs-16"
              >
                Las Terrazas Villa 3
                <span
                  style={{ marginTop: "6px" }}
                  className="fs-14 block text-dark text-light"
                >
                  Entire villa · El Salobre, Canarias, ES
                </span>
              </span>
            </h4>
          </div>
          {/* check in */}
          <div className="flex bottom1 w-100 flex item-center justify-space gap-2">
            <span className="text-dark text-light fs-18">Check-in</span>
            <span className="text-dark text-light fs-18">Dec 8, 2023</span>
          </div>

          {/* check out */}
          <div className="flex bottom1 w-100 flex item-center justify-space gap-2">
            <span className="text-dark text-light fs-18">Check-out</span>
            <span className="text-dark text-light fs-18">Dec 8, 2023</span>
          </div>

          {/* guests */}
          <div className="flex bottom1 w-100 flex item-center justify-space gap-2">
            <span className="text-dark text-light fs-18">guest</span>
            <span className="text-dark text-light fs-18">3 Adults</span>
          </div>

          {/* payment details */}
          <div
            style={{ marginTop: "13px" }}
            className="flex bottom1 column gap-2"
          >
            <h4 className="fs-24 text-extra-bold">Payment Details</h4>
            {/* price */}
            <div className="flex gap-1 column w-100">
              <div className="flex w-100 flex item-center justify-space gap-2">
                <span className="text-dark text-bold fs-16">
                  $335.93 x 5 nights
                </span>
                <span className="text-dark text-bold fs-16"> $1,679.67</span>
              </div>

              {/*Cleaning fee  */}
              <div className="flex w-100 flex item-center justify-space gap-2">
                <span className="text-dark text-bold fs-16">
                Cleaning fee
                </span>
                <span className="text-dark text-bold fs-16"> $1,679.67</span>
              </div>
            </div>
          </div>
          {/* total */}
          <div className="flex bottom1 w-100 flex item-center justify-space gap-2">
            <span className="text-dark text-bold fs-16">Total</span>
            <span className="text-dark text-bold fs-16">$1000</span>
          </div>
        </div>
      </div>
    </RightIndexWrapper>
  );
}

const RightIndexWrapper = styled.div`
  width: 100%;
  flex: 0 0 400px;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  .w-85 {
    width: 80%;
  }
  @media (max-width: 980px) {
    display: none;
  }
  .bottom1 {
    padding-bottom: 1.5rem !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  }
  .top {
    height: 90%;
    overflow: auto;
    padding-bottom: 2rem;
    /* width: 80%; */
  }
  .bookBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 1rem;
    border-radius: 10px;
    background-color: #fff;
  }
`;
