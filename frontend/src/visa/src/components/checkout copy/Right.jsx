import React, { useEffect } from "react";
import {
  getCoinBaseUrl,
  offOrderModal,
  ToggleOrderModal,
} from "../../Features";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

export default function Right() {
  const { orderModal } = useSelector((store) => store.modal);
  const dispatch = useDispatch();
  const {
    totalPrice,
    TotalShoppingPrice,
    bag,
    totalQuantity,
    shippingPrice,
    estimatedTax,
  } = useSelector((store) => store.bag);
  const { showAlert, paySuccess, payError, payLoading, url } = useSelector(
    (store) => store.pay
  );
  useEffect(() => {
    if (url) {
      window.location = url;
    }
  }, [url]);
  const RightBottom = () => {
    return (
      <div className="w-100 flex column gap-2">
        <div className="w-100 flex column gap-1">
          <div className="w-100 py-2">
            <p
              className="fs-18 family1 text-light text-dark"
              style={{ padding: "1rem 2rem", lineHeight: "2" }}
            >
              Please provide all the necessary information in order for us to
              process your visa application. We require this information to
              ensure that your visa application meets the requirements of the
              destination country. Please submit a completed visa application
              form, a valid passport, and any other supporting documents
              required by the destination country. Failure to provide all the
              necessary information may result in the delay or rejection of your
              visa application.
            </p>
          </div>
        </div>
        <div className="w-100 btnCard flex item-center">
          <button
            className="btn fs-16 uppercase text-light family1"
            onClick={() => dispatch(getCoinBaseUrl({ TotalShoppingPrice }))}
          >
            {payLoading ? (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            ) : (
              "Pay Now"
            )}
          </button>
        </div>
      </div>
    );
  };
  return (
    <RightWrapper>
      <div className="top flex column w-100 gap-4">
        <h3 className="fs-24 text-bold text-dark">Review your order</h3>
        <div className="w-100 flex column gap-4">
          <div className="w-100 flex item-center justify-space">
            <h4 className="fs-16 family1 text-bold text-dark">Product</h4>
            <h4 className="fs-16 family1 text-bold text-dark">Sub Total</h4>
          </div>
          <div className="flex column gap-2 w-100">
            {bag.map((x, index) => {
              return (
                <div className="w-100 flex item-center gap-3" key={index}>
                  <div className="w-100 flex item-center gap-2">
                    <img
                      src={x.image}
                      alt=""
                      style={{ height: "15rem", width: "12rem" }}
                    />
                    <div className="flex column gap-1">
                      <h6 className="fs-18 text-light family1 text-dark">
                        {x.title}
                      </h6>
                      <h6 className="fs-18 text-light family1 text-dark">
                        Country: {x.country}
                      </h6>
                    </div>
                  </div>
                  <h5 className="fs-18 text-bold family1 text-dark py-3">
                    ${x.price}
                  </h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex center py-2">
        <div className="w-50 flex gap-2 column">
          <h5 className="text-bold fs-18 text-light text-dark w-100 flex item-center justify-space">
            Subtotal
            <span className="text-bold">${totalPrice}</span>
          </h5>
          <h5 className="text-bold text-light fs-18 text-dark w-100 flex item-center justify-space">
            Tax
            <span className="text-bold">$30.00</span>
          </h5>
          <h5 className="text-bold text-light fs-18 text-dark w-100 flex item-center justify-space">
            Total
            <span className="text-bold">${TotalShoppingPrice}</span>
          </h5>
        </div>
      </div>
      <RightBottom />
    </RightWrapper>
  );
}
//
export const RightWrapper = styled.div`
  gap: 2rem;
  .grid-2 {
    grid-template-columns: 1fr 0.5fr;
  }
  .btnCard {
    justify-content: flex-end;
  }
  h5 {
    @media (max-width: 780px) {
      font-size: 1.5rem;
      font-weight: 900;
      text-align: start;
    }
  }
  .btn {
    border: none;
    outline: none;
    padding: 1.4rem 4rem;
    background: var(--blue-1);
    color: #fff;
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 40px;
    font-family: "Karla", sans-serif;
    @media (max-width: 980px) {
      padding: 1.6rem 4rem;
    }
  }
  .w-50 {
    width: 50%;
    @media (max-width: 780px) {
      width: 80%;
    }
  }
  .center {
    justify-content: flex-end;
    align-items: center;
  }
`;
