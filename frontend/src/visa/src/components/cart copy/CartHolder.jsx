import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { calculateBagItem } from "../../Features";
export default function CartHolder({ type }) {
  const dispatch = useDispatch();
  // const { productDetails } = useSelector((store) => store.product);
  const {
    bag,
    totalPrice,
    totalQuantity,
    shippingPrice,
    estimatedTax,
    TotalShoppingPrice,
  } = useSelector((store) => store.bag);

  // useEffect(() => {
  //   dispatch(calculateBagItem());
  // }, [productDetails?.quantity, bag]);

  return (
    <CartHolderContainer>
      <h2>Cart Holder</h2>
      <h3 className="subtotal">
        Subtotal <span className="subspan">${totalPrice}</span>
      </h3>
      <h3 className="total">
        Tax <span className="subspan span1">$30</span>
      </h3>
      <h3 className="total">
        Total <span className="subspan span1">${TotalShoppingPrice}</span>
      </h3>
      <div className="btnWrapper">
        <Link to={"/billing"} className="btn">
          Proceed to Checkout
        </Link>
      </div>
    </CartHolderContainer>
  );
}

const CartHolderContainer = styled.div`
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  width: clamp(45%, 220px, 90%);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
  .cart1 {
    @media (max-width: 680px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
    }
  }

  input {
    border: 1px solid rgba(0, 0, 0, 0.09);
    padding: 1.2rem 2rem;
    flex: 1;
  }
  @media (max-width: 980px) {
    width: 100%;
  }
  h2 {
    font-size: 3.8rem;
    font-weight: 600;
    color: var(--dark-1);
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .btnWrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .btn {
      border: none;
      outline: none;
      padding: 1.2rem 4rem;
      background: var(--blue-2);
      color: #fff;
      font-size: 1.4rem;
      text-align: center;
      font-weight: 400;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 40px;
      font-family: "Roboto Condensed", sans-serif;
      &:hover {
        background-color: var(--red);
      }
      @media (max-width: 980px) {
        padding: 1.6rem 4rem;
      }
    }
  }

  h3 {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 600;
    color: var(--dark-1);
    padding: 1.6rem 0;
    font-family: "Roboto Condensed", sans-serif;
    &.subtotal {
      padding: 2rem 0;
    }

    .subspan {
      color: var(--dark-grey);
      font-weight: 400;
      font-family: "Roboto Condensed", sans-serif;
      &.span1 {
        color: var(--blue-2);
        font-weight: 400;
      }
    }
  }
`;
