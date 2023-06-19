import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import CheckoutLeft from "./Left";
import CheckoutRight from "./Right";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleBuyerCart } from "../../Features/cart/cartReducer";
import LoaderIndex from "../loaders";
import { useSearchParams } from "react-router-dom";
export default function CheckoutIndex() {
  const dispatch = useDispatch();
  const { cartIsLoading } = useSelector((store) => store.cart);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("gigid");
  useEffect(() => {
    if (id) {
      dispatch(GetSingleBuyerCart(id));
    }
  }, [id]);
  return (
    <div>
      <div className="w-100">
        <Header />
      </div>
      {cartIsLoading ? (
        <LoaderIndex />
      ) : (
        <CheckoutIndexContent className="w-90 auto grid-auto">
          <CheckoutLeft />
          <CheckoutRight />
        </CheckoutIndexContent>
      )}
    </div>
  );
}

const CheckoutIndexContent = styled.div`
  
  &.grid-auto {
    display: grid;
    padding: 4rem 0;
    grid-template-columns: 1fr 30vw;
    place-items: start;
    grid-gap: 10rem;
    padding-top: 10rem;
    @media (min-width: 1500px) {
      grid-template-columns: 1fr 26vw;
    }
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      padding-top: 16rem;
      display: flex;
      flex-direction: column-reverse;
    }
  }
`;
