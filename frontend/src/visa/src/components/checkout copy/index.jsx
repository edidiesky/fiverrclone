import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";

export default function CheckoutIndex() {
  return (
    <CheckoutIndexContainer className="py-8 grid grid-2 grid-gap3 w-90 auto">
      <Left />
      <Right />
    </CheckoutIndexContainer>
  );
}

const CheckoutIndexContainer = styled.div`
  grid-template-columns: 1fr 35vw;
  margin-top: 10rem;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;
