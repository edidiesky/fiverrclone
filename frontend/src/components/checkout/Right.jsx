import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaClock } from "react-icons/fa";
import styled from "styled-components";
export default function CheckoutRight() {
  return (
    <CheckoutRightContent className="w-100">
      <div className="Right flex gap-2 column">
        {/* box */}
        <div className="w-100 border flex column gap-2">
          {/* gig image and basic description */}
          <div className="py-2 p2 border flex item-center gap-2">
            <div className="flex1">
              <img
                src="https://fiverr-res.cloudinary.com/video/upload/f_auto,q_auto,t_medium5/a3pnweseanfwojjjkdki.png"
                alt=""
                className="w-100 radius1"
              />
            </div>
            <h4 className="fs-14 flex1 text-dark family1">
              I will build sketchup revit 3d model and make realistic render
            </h4>
          </div>
          {/* basic information */}
          <div className="w-100 flex column gap-2 p2">
            {/* price */}
            <div className="w-100 family1 flex item-center justify-space">
              <h4 className="fs-16 text-dark">Basic</h4>
              {/* price */}
              <h4 className="fs-16 text-grey text-light">$28</h4>
            </div>
            {/* work desc */}
            {/* <h4 className="fs-16 text-grey text-light">
              1 Professional Logo concept + Jpeg + PNG
            </h4> */}
            <ul className="flex borderB column py-1 gap-1">
              <div className="w-100 flex family1 item-center gap-1 fs-16 text-grey">
                <FaCheck className="text-green" />5 Days Delivery
              </div>
              <li className="flex item-center family1 gap-1 fs-16 text-grey">
                <FaCheck className="text-green" /> 1 concept included
              </li>
              <li className="flex item-center family1 text-light gap-1 fs-16 text-grey">
                <FaCheck className="text-green" /> Logo transparency
              </li>
              <li className="flex item-center family1 text-light gap-1 fs-16 text-grey">
                <FaCheck className="text-green" /> Vector file
              </li>
              <li className="flex item-center family1 text-light gap-1 fs-16 text-grey">
                <FaCheck className="text-green" /> Printable file
              </li>
              <li className="flex item-center family1 gap-1 fs-16 text-grey">
                <FaCheck className="text-green" /> 1 concept included
              </li>
            </ul>
            {/* total taxes */}
            <ul className="flex column py-1 borderB gap-2">
              <li className="flex item-center justify-space w-100 family1 gap-1 fs-16 text-grey">
                <span className="text-light">Service fee</span> $2.28
              </li>
              <li className="flex item-center justify-space w-100 family1 gap-1 fs-16 text-grey">
              <span className="text-light">VAT</span> $2.28
              </li>
            </ul>
            {/* total fee */}
            <ul className="flex column py-1 borderB gap-2">
              <li className="flex item-center text-light justify-space w-100 family1 gap-1 fs-16 text-grey">
                <span className="text-bold">Total</span> $2.28
              </li>
              <li className="flex item-center justify-space w-100 family1 gap-1 fs-16 text-grey">
              <span className="text-light">Total delivery time</span> $2.28
              </li>
            </ul>
            {/* paypal Checkout */}
          </div>
        </div>
      </div>
    </CheckoutRightContent>
  );
}

const CheckoutRightContent = styled.div`
  width: 100%;
  .Right {
    position: sticky;
    top: 0;
  }
  .text-green {
    color: var(--green);
  }
  .flex1 {
    flex: 1;
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }
  .borderB {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
`;
