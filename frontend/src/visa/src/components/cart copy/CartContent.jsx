import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { Message } from "../modals";
export default function CartContent() {
  // get the cart content
  const { isLoading, isError, bag } = useSelector((store) => store.bag);
  return (
    <CartContentContainer
      style={{ border: "1px solid rgba(0,0,0,.1)", padding: "3rem" }}
    >
      {bag?.length === 0 ? (
         <h2
         className="py-2 fs-40 text-bold text-dark"
         style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
       >
         You have no items in your cart
       </h2>
      ) : (
        <>
          <h2
            className="py-2 fs-40 text-bold text-dark"
            style={{ borderBottom: "1px solid rgba(0,0,0,.1)" }}
          >
            You have {bag?.length} items in your cart
          </h2>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Destination</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {bag?.map((x) => {
                return <Card key={x.id} x={x} />;
              })}
            </tbody>
          </table>
        </>
      )}
    </CartContentContainer>
  );
}

const CartContentContainer = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 480px) {
    display: none;
  }

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: var(--text-color);
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    padding: 2rem 0;
    text-transform: uppercase;
  }

  table {
    width: 100%;
    padding: 2rem 0;
    border-collapse: collapse;
    table-layout: fixed;
    thead {
      width: 100%;
      tr {
        width: 100%;
        padding: 2rem 0;
        th {
          width: 100%;
          font-size: 16px;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.09);
          font-weight: 700;
          color: var(--dark-1);
        }
      }
    }
    tbody {
      width: 100%;
      tr {
        width: 100%;
        td {
          text-align: center;
          padding: 2rem 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.09);
          font-size: 1.5rem;
          font-weight: 400;
          font-family: "Roboto Condensed", sans-serif;
          color: rgb(43, 46, 50);
          .iconsWrapper {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 2rem;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            &:hover {
              background: rgba(0, 0, 0, 0.09);
            }

            svg {
              font-size: 2rem;
            }
          }
          .cartProduct {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 2rem;
            justify-content: center;

            .imageWrapper {
              img {
                width: 100px;
                height: 12rem;
              }
            }
          }

          &:nth-child(2),
          &:nth-child(3),
          &:nth-child(4) {
            width: 15%;
          }
          &:nth-child(1) {
            width: 40%;
          }
          &:nth-child(5) {
            width: 4%;
          }
          .btnWrapper {
            width: 100px;
            display: flex;
            align-items: center;
            height: 4rem;
            justify-content: center;
            margin: 0 auto;
            border-radius: 6px;
            h3 {
              font-size: 1.4rem;
              font-weight: 600;
              color: #333;
              flex: 1;
            }
            .cartBtn {
              border: none;
              outline: none;
              flex: 1;
              height: 100%;
              background: rgb(0 0 0 / 8%);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              &:hover {
                background: rgb(0 0 0 / 13%);
                svg {
                  color: var(--dark-1);
                }
              }
              svg {
                width: 1.4rem;
                height: 1.4rem;
                color: #333;
              }
            }
          }
        }
      }
    }
  }
`;
