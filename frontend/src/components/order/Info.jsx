import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function Info() {
  const { cart } = useSelector((store) => store.cart);
  const { order } = useSelector((store) => store.order);
  return (
    <div className=" w-90 auto">
      <RightWrapper className=" w-90 auto">
        <div className="flex summary center py-2">
          {/* order summary */}
          <div className="w-50 flex gap-2 column">
            <h5 className="text-bold fs-18 text-dark w-100 flex item-center justify-space">
              EstimatedTax
              <span className="text-light">${order?.estimatedTax}</span>
            </h5>

            <h5 className="text-bold fs-18 text-dark w-100 flex item-center justify-space">
              Payment method
              <span className="text-light">{order?.paymentMethod}</span>
            </h5>
            <h5 className="text-bold fs-18 text-dark w-100 flex gap-2 item-center justify-space">
              Total
              <span className="text-light">${order?.TotalShoppingPrice}</span>
            </h5>
          </div>
        </div>
      </RightWrapper>
    </div>
  );
}

const RightWrapper = styled.div`
  .w-50 {
    width: clamp(30%, 280px, 70%);
    @media (max-width: 580px) {
      width: 100%;
    }
  }
  .w-90 {
    @media (max-width: 480px) {
      width: 100% !important;
    }
  }
  .summary {
    justify-content: flex-end;
  }
  .product {
    gap: 1.5rem;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
