import React from "react";
import Styled from "styled-components";
import { useSelector } from "react-redux";
import SmallCard from "./SmallCard";
import { Message } from "../modals";

export default function SmallCartCard() {
  // get the cart content
  const { bag } = useSelector((store) => store.bag);
  return (
    <SmallCartContainer>
      {bag?.length === 0 ? (
        <Message alertText="No items in your bag" />
      ) : (
        <>
          <h2>You have {bag?.length} items in your cart</h2>
          {bag?.map((x) => {
            return <SmallCard x={x} key={x?._id} />;
          })}
        </>
      )}
    </SmallCartContainer>
  );
}

const SmallCartContainer = Styled.div`
width:100%;
border:1px solid rgba(0,0,0,.1);
padding:2rem;
display:flex;
flex-direction:column;
gap:3.6rem;

  @media (min-width:480px) {
    display:none;
 }

 h2 {
  font-size:3rem;
  font-weight:700;
  color:var(--dark-1);
  text-align:center;
  line-height:1.5;
  border-bottom:1px solid rgba(0,0,0,.1);
  padding:1rem 0;
  text-transform:uppercase;
 }
`;
