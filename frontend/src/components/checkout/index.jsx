import React from "react";
import styled from "styled-components";
import Header from "./Header";
import CheckoutLeft from "./Left";
import CheckoutRight from "./Right";
export default function CheckoutIndex() {
  return (
    <div>
      <div className="w-100">
        <Header/>
      </div>
      <CheckoutIndexContent className="w-90 auto grid-auto">
        <CheckoutLeft />
        <CheckoutRight />
      </CheckoutIndexContent>
    </div>
  );
}

const CheckoutIndexContent = styled.div`
  &.grid-auto {
    display: grid;
    padding:4rem 0;
    grid-template-columns:1fr 30vw;
    place-items: start;
    grid-gap: 7rem;
    @media (min-width:1500px) {
      grid-template-columns:1fr 30vw;
    }
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      display: flex;
      flex-direction: column-reverse;
    }
}
`;
