import React from "react";
import styled from "styled-components";
import CartContent from "./CartContent";
import CartHolder from "./CartHolder";
import SmallCartCard from "./SmallCartCard";
export default function Cartindex() {
  return (
    <CartContainer>
      <div className="cartHolderWrapper">
        <CartContent />
        <SmallCartCard />
        <div className="grid item-start w-100 grid-2 grid-gap3">
          {/* <CartHolder type="coupon" /> */}
          <CartHolder />
        </div>
      </div>
    </CartContainer>
  );
}

const CartContainer = styled.div`
  width: 100%;

  .cartHolderWrapper {
    width: 90%;
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    gap: 2rem;
    justify-content: flex-end;
  }
`;
