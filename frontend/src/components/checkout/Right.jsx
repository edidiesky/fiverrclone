import React from "react";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PaymentButton from "./paypal";
export default function CheckoutRight() {
  const { cartDetails, cartIsLoading } = useSelector((store) => store.cart);
  return (
    <CheckoutRightContent className="w-100">
      <div className="Right flex gap-2 column">
        {/* box */}
        <div className="w-85 auto border top flex column gap-2">
          {/* gig image and basic description */}
          <div className="py-2 p2 border flex item-center">
            <div className="flex1">
              <img
                src={cartDetails?.gigId?.image[0]}
                alt=""
                className="w-100 radius1"
              />
            </div>
            <h4 className="fs-18 flex1 text-grey">
              {cartDetails?.gigId?.shortDescription}
            </h4>
          </div>
          {/* basic information */}
          <div className="w-100 flex column gap-2 p2">
            {/* price */}
            <div className="w-100 family1 flex item-center justify-space">
              <h4 className="fs-18 text-light text-dark">Basic</h4>
              {/* price */}
              <h4 className="fs-18 text-light text-grey text-light">
                ${cartDetails?.gigId?.price}
              </h4>
            </div>
            {/* work desc */}

            <ul className="flex borderB top column py-1 gap-1">
              <div className="w-100 flex item-center gap-1 fs-18 text-light text-grey">
                <FaCheck className="text-green" />
                {cartDetails?.gigId?.deliveryDays} Days Delivery
              </div>
              {cartDetails?.gigId?.subInfo?.map((x, index) => {
                return (
                  <li
                    key={index}
                    className="flex item-center gap-1 fs-18 text-light text-grey"
                  >
                    <FaCheck className="text-green" /> {x}
                  </li>
                );
              })}
            </ul>
            {/* total taxes */}
            <ul className="flex column top py-1 borderB gap-2">
              <li className="flex item-center justify-space w-100 gap-1 fs-18 text-light text-grey">
                <span className="text-light">Service fee</span> $2.28
              </li>
              <li className="flex item-center justify-space w-100 gap-1 fs-18 text-light text-grey">
                <span className="text-light">VAT</span> $
                {0.055 * parseInt(cartDetails?.gigId?.price)}
              </li>
            </ul>
            {/* total fee */}
            <ul className="flex column py-1 borderB gap-2">
              <li className="flex item-center text-light justify-space w-100 gap-1 fs-18 text-grey">
                <span className="text-bold">Total</span> $2.28
              </li>
              <li className="flex item-center justify-space w-100 gap-1 fs-18 text-light text-grey">
                <span className="text-light">Total delivery time</span> $2.28
              </li>
              <PaymentButton />
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
  .top {
    background-color: #fafafa;
  }
  img {
    width: 80%;
  }

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
