import React from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import {
  removeBagItem,
  increaseBagQty,
  decreaseBagQty,
  onCartAlert,
} from "../../Features";

export default function SmallCard({ x, type }) {
  const dispatch = useDispatch();
  const handleRemoveBagItem = () => {
    dispatch(removeBagItem(x));
  };
  const increaseQty = (item) => {
    dispatch(increaseBagQty({ item }));
  };
  const decreaseQty = (item) => {
    dispatch(decreaseBagQty({ item }));
  };

  return (
    <SmallCardContent key={x._id}>
      <div className="cartProduct">
        <div className="iconsWrapper">
          <RxCross2 fontSize={"17px"} />
        </div>
        <div className="imageWrapper">
          <img src={x?.image} alt="images" />
        </div>
        <h3>{x?.title}</h3>
        <p>${x?.price}</p>
        {/* <div className="btnWrapper">
          <button
            className="cartBtn"
            disabled={x?.quantity === x?.countInStock}
            style={{
              borderTopLeftRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
            onClick={() => dispatch(increaseBagQty(x))}
          >
            <BiPlus />
          </button>
          <h3>{x?.quantity}</h3>
          <button
            className="cartBtn"
            disabled={x?.quantity === 1}
            onClick={() => dispatch(decreaseBagQty(x))}
            style={{
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
            }}
          >
            <BiMinus />
          </button>
        </div> */}
        <div className="w-100 flex">
          <div
            className="flex item-center qty1"
            style={{
              width: "12rem",
              margin: "0 auto",
              borderRadius: "40px",
              border: "1px solid rgba(0,0,0,.09)",
              height: "4rem",
            }}
          >
            <button
              className="flex item-center justify-center fs-16 text-light text-grey"
              style={{
                flex: "1",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                alignItems: "center",
                borderRight: "1px solid rgba(0,0,0,.09)",
              }}
            >
              <BiPlus />
            </button>
            <h5
              className="flex item-center justify-center fs-16 text-light text-grey"
              style={{ flex: "1" }}
            >
              1
            </h5>
            <button
              className="flex item-center justify-center fs-16 text-light text-grey"
              style={{
                flex: "1",
                height: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                alignItems: "center",
                borderLeft: "1px solid rgba(0,0,0,.09)",
              }}
            >
              <BiMinus />
            </button>
          </div>
        </div>
        <p>${x?.price * x?.quantity}</p>
      </div>
    </SmallCardContent>
  );
}

const SmallCardContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem 0;
  .cartProduct {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    .iconsWrapper {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      gap: 2rem;
      justify-content: center;
      cursor: pointer;
      background-color: rgb(0 0 0 / 13%);
      box-shadow: 0 2px 3px rgb(0 0 0 / 13%);
      &:hover {
        background: rgb(0 0 0 / 23%);
      }
    }
    p {
      font-size: 1.8rem;
      color: var(--dark-grey);
      font-weight: 400;
      text-align: center;
    }
    .btnWrapper {
      border: 1px solid var(--grey-2);
      display: flex;
      width: 100px;
      align-items: center;
      height: 4.5rem;
      justify-content: center;
      margin: 0 auto;
      border-radius: 6px;
      h3 {
        font-size: 1.4rem;
        font-weight: 700;
        text-align: center;
        color: var(--dark-grey);
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
        }
        .icon {
          width: 2rem;
          height: 2rem;
          color: var(--dark-1);
        }
      }
    }

    .imageWrapper {
      img {
        width: 180px;
        height: 190px;
      }
    }
  }
`;
