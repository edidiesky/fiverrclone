import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import { BiMinus, BiPlus, BiRevision, BiTime } from "react-icons/bi";
import { CreateBuyerCart, offCartSidebar } from "../../Features";
import Message from "../modals/Message";
import { clearCartAlert } from "../../Features/bag/bagSlice";

export default function CartSidebar() {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  // get the cart content
  // const { isLoading, isError, bag } = useSelector((store) => store.bag);
  const { cartsidebar } = useSelector((store) => store.toggle);
  const { GigsDetails } = useSelector((store) => store.gigs);
  const { cartIsLoading, cartIsSuccess, showAlert, alertText } = useSelector(
    (store) => store.cart
  );
  const navigate = useNavigate();
  const handleAddToCart = () => {
    dispatch(CreateBuyerCart({ qty }));
  };

  useEffect(() => {
    if (cartIsSuccess) {
      setTimeout(() => {
        navigate(`/checkout?gigid=${GigsDetails?._id}`);
      }, 5000);
    }
  }, [cartIsSuccess]);

  return (
    <CartSidebarContainer className={cartsidebar ? "active" : ""}>
      <div
        className="backdrop"
        onClick={() => dispatch(offCartSidebar())}
      ></div>
      <div className="cartSidebarWrapper">
        <div className="cartSidebarTop flex item-center justify-space w-100">
          <h4 className="fs-16 family1 ">Order options</h4>
          <div className="icon" onClick={() => dispatch(offCartSidebar())}>
            <RxCross2 />
          </div>
        </div>
        <div className="cartSidebarCenter flex column gap-2 py-2">
          {/* gig info and increase btn */}
          <div
            className="w-100 flex column gap-2 radius1"
            style={{ padding: "2rem", border: "2px solid rgba(0,0,0,.2)" }}
          >
            {/* price and gig info */}
            <h4 className="flex family1 w-100 justify-space item-center fs-18 text-">
              Basic{" "}
              <span className="text-light text-grey2">
                ${GigsDetails?.price}
              </span>
            </h4>
            <h5 className="text-grey text-light fs-16">
              <strong className="text-bold">Basic</strong>{" "}
              {GigsDetails?.shortDescription}
            </h5>
            <div className="py-1 borderBottom"></div>
            {/* gig qty start */}
            <div className="w-100 flex item-center justify-space">
              <h4 className="family1 fs-16 text-light text-dark">
                Gig Quantity
              </h4>
              {/* aty btn */}
              <div className="flex item-center gap-1">
                {/* increase btn */}
                <button
                  disabled={qty >= GigsDetails?.countInStock}
                  onClick={() => setQty(qty + 1)}
                  className="avatar btnCart fs-16 flex item-center justify-center"
                >
                  <BiPlus />
                </button>
                <h4 className="fs-20 text-dark">{qty}</h4>
                {/* descrease btn */}
                <button
                  disabled={qty <= 1}
                  onClick={() => setQty(qty - 1)}
                  className="avatar btnCart fs-16 flex item-center justify-center"
                >
                  <BiMinus />
                </button>
              </div>
            </div>
            {/* gig qty end */}
          </div>
          <div className="w-100 summary flex column gap-2">
            <h3 className="fs-30 family1 text-dark">
              ${GigsDetails?.price}
              <span className="block text-grey text-light fs-14">
                Single order
              </span>
            </h3>
            <div className="py-1 borderBottom"></div>
            <div className="w-100 flex column gap-1">
              <h5 className="flex gap-1 fs-18 text-grey text-light item-center">
                {" "}
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 18 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.75 1C0.75 0.585786 1.08579 0.25 1.5 0.25H16.5C16.9142 0.25 17.25 0.585786 17.25 1V4C17.25 4.41421 16.9142 4.75 16.5 4.75H12.25V10C12.25 10.2883 12.0847 10.5511 11.8249 10.676C11.565 10.8009 11.2566 10.7658 11.0315 10.5857L9 8.96047L6.96852 10.5857C6.74339 10.7658 6.43496 10.8009 6.17511 10.676C5.91526 10.5511 5.75 10.2883 5.75 10V4.75H1.5C1.08579 4.75 0.75 4.41421 0.75 4V1ZM7.25 4.75V8.43953L8.53148 7.41435C8.80539 7.19522 9.19461 7.19522 9.46852 7.41435L10.75 8.43953V4.75H7.25ZM2.25 3.25V1.75H15.75V3.25H2.25ZM2.5 5.25C2.91421 5.25 3.25 5.58579 3.25 6V14.25H14.75V6C14.75 5.58579 15.0858 5.25 15.5 5.25C15.9142 5.25 16.25 5.58579 16.25 6V15C16.25 15.4142 15.9142 15.75 15.5 15.75H2.5C2.08579 15.75 1.75 15.4142 1.75 15V6C1.75 5.58579 2.08579 5.25 2.5 5.25Z"
                  ></path>
                </svg>{" "}
                Basic Package
              </h5>
              <h5 className="flex gap-1 fs-18 text-grey text-light item-center">
                <BiTime className="fs-24 text-dark" />{" "}
                {GigsDetails?.deliveryDays} delivery
              </h5>
              <h5 className="flex gap-1 fs-18 text-grey text-light item-center">
                <BiRevision className="fs-24 text-dark" />3 revisions
              </h5>
            </div>
          </div>
        </div>
        <Message
          alertText={alertText}
          showAlert={showAlert}
          handleClearAlert={clearCartAlert}
        />
        <div className="cartSidebarBottom flex column gap-1">
          <div className="w-100 auto column item-center gap-1 justify-center flex">
            <div
              onClick={handleAddToCart}
              className={"cartBtn py-1 fs-16 family1"}
            >
              Continue (${GigsDetails?.price})
            </div>
            <h5 className="fs-14 center text-dark text-light">
              You won’t be charged yet
            </h5>
          </div>
        </div>
      </div>
    </CartSidebarContainer>
  );
}

const CartSidebarContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.6);

  z-index: 5000;
  display: flex;
  justify-content: flex-end;
  opacity: 0;
  visibility: hidden;
  transition: all 0.6s;
  right: -100%;
  .backdrop {
    background-color: #99999999;
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .btnCart {
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.7);
      background-color: transparent;
    }
  }
  &.active {
    opacity: 1;
    visibility: visible;
    right: 0%;
  }
  @media (max-width: 680px) {
    width: 300px;
  }
  .borderBottom {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .summary {
    padding: 2.4rem 2rem;
    background-color: var(--light-grey);
    border-radius: 10px;
  }
  button:hover {
    background-color: var(--light-grey);
    border: 1px solid var(--light-grey);
  }
  .cartSidebarWrapper {
    width: 100%;
    padding: 1rem;
    display: flex;
    width: 420px;
    height: 100vh;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    background-color: #fff;
    .cartSidebarCenter {
      padding: 1.6rem 1rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      overflow-y: auto;
      width: 100%;
      max-height: 100vh;
      padding-bottom: 3rem;
      justify-content: space-around;
      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
        background: #f8f8f8;
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: var(--grey-2);
        border-radius: 10px;
        transition: all 0.5s;
        &:hover {
          background: #333;
        }
      }
    }
    .cartSidebarTop {
      padding: 1.6rem;
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .icon {
        width: 3rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        svg {
          width: 70%;
          height: 70%;
          color: var(--dark-1);
        }
      }
      h3 {
        font-size: 2rem;
        color: var(--dark-1);
        font-weight: 600;
        .cartSpan {
          font-size: 1.4rem;
          font-weight: 400;
        }
      }
    }

    .cartSidebarBottom {
      padding: 1rem 0;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      width: 100%;
      z-index: 20000;
      position: absolute;
      background-color: #fff;
      bottom: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      @media (max-width: 780px) {
        flex-direction: column;
        justify-content: flex-start;
      }
    }
  }
`;
