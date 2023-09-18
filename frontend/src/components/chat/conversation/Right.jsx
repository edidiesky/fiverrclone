import React from "react";
import styled from "styled-components";
import Top from "./Top";

export default function Right() {
  return (
    <RightIndexWrapper>
      <div className="top w-100">
        <div className="w-85 auto gap-2 flex item-start column">
          {/* trip details */}
          <div className="flex bottom1 w-100 flex column gap-2">
            <h4 className="fs-24 text-extra-bold text-dark">About Romis</h4>
            {/* check in */}
            <div className="flex w-100 column gap-1">
              <div className="flex w-100 flex item-center justify-space gap-2">
                <span className="text-grey text-light fs-18">From</span>
                <span className="text-dark text-extra-bold fs-18">
                  Pakistan
                </span>
              </div>
              <div className="flex w-100 flex item-center justify-space gap-2">
                <span className="text-grey text-light fs-18">
                  On Fiverr since
                </span>
                <span className="text-dark text-extra-bold fs-18">
                  Jun 2018
                </span>
              </div>
              <div className="flex w-100 flex item-center justify-space gap-2">
                <span className="text-grey text-light fs-18">English</span>
                <span className="text-dark text-extra-bold fs-18">Native</span>
              </div>
              <div className="flex w-100 flex item-center justify-space gap-2">
                <span className="text-grey text-light fs-18">English</span>
                <span className="text-dark text-extra-bold fs-18">Native</span>
              </div>
              <div className="flex w-100 flex item-center justify-space gap-2">
                <span className="text-grey text-light fs-18">Seller level</span>
                <span className="text-dark text-extra-bold fs-18">
                  Top Rated Seller
                </span>
              </div>
            </div>
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
                <span className="text-dark text-bold fs-16">Cleaning fee</span>
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
  flex: 0 0 300px;
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
