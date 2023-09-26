import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createCustomersOrder } from "../../Features";
import LoaderIndex from "../loaders";
export default function CheckoutRight() {
  const { GigsDetails } = useSelector((store) => store.gigs);
  const dispatch = useDispatch();
  const { cartDetails, cartIsLoading } = useSelector((store) => store.cart);
  const price =
    0.055 * parseInt(cartDetails?.gigId?.price) +
    parseInt(cartDetails?.gigId?.price) +
    parseInt(2.28);
  const { urls, orderisLoading } = useSelector((store) => store.order);

  // console.log(cartDetails);

  let estimatedTax = 0.055 * parseInt(cartDetails?.gigId?.price);

  let ShoppingPrice =
    parseInt(cartDetails?.gigId?.price) * parseInt(cartDetails?.gigQuantity);
  let shippingPrice = ShoppingPrice > 100 ? 100 : 0;
  let TotalShoppingPrice = parseFloat(
    ShoppingPrice + estimatedTax + parseInt(shippingPrice)
  ).toFixed(1);

  // order data to be created
  const orderData = {
    cartId: cartDetails?._id,
    paymentMethod: "Paypal",
    TotalShoppingPrice: TotalShoppingPrice,
    totalQuantity: cartDetails?.gigQuantity,
    estimatedTax: estimatedTax,
    cart_items: [
      {
        price: TotalShoppingPrice * 100,
        image: cartDetails?.gigId?.image,
        title: cartDetails?.gigId?.title,
        quantity: cartDetails?.gigQuantity,
      },
    ],
  };
  // console.log(orderData);
  //
  const handleOrderPayment = () => {
    dispatch(createCustomersOrder(orderData));
  };

  useEffect(() => {
    if (urls) {
      window.location.href = urls;
    }
  }, [urls]);

  return (
    <CheckoutRightContent className="w-100">
      <div className="Right flex gap-2 column">
        {/* box */}
        <div className="w-85 auto border top flex column gap-2">
          {/* gig image and basic description */}
          <div
            className="py-2 p2 border gap-1 flex item-center"
            style={{ flexWrap: "wrap" }}
          >
            <div className="flex-1 detailsImageWrapper">
              {cartDetails?.gigId?.image?.map((x) => {
                return <img src={x} alt="" className="radius1 w-100" />;
              })}
            </div>
            <h4 className="fs-16 flex1 text-grey">
              {cartDetails?.gigId?.shortDescription}
            </h4>
          </div>
          {/* basic information */}
          <div className="w-100 flex column gap-1 p2">
            {/* price */}
            <div className="w-100 family1 flex item-center justify-space">
              <h4 className="fs-18 text-light text-dark">Basic</h4>
              {/* price */}
              <h4 className="fs-18 text-light text-grey text-light">
                ${cartDetails?.gigId?.price}
              </h4>
            </div>
            {/* work desc */}

            <ul
              style={{ gap: ".7rem" }}
              className="flex borderB top column py-1"
            >
              <div className="w-100 flex item-center fs-18 gap-1 text-light text-grey">
                <FaCheck className="text-green" />
                {cartDetails?.gigId?.deliveryDays} Days Delivery
              </div>
              {cartDetails?.gigId?.subInfo?.map((x, index) => {
                return (
                  <li
                    key={index}
                    className="flex item-center gap-1 fs-18 text-light text-grey"
                  >
                    <FaCheck className="text-green" /> {x}
                  </li>
                );
              })}
            </ul>
            {/* total taxes */}
            <ul className="flex column top py-1 borderB gap-2">
              <li className="flex item-center justify-space w-100 gap-1 fs-18 text-light text-grey">
                <span className="text-light">Service fee</span> $2.28
              </li>
              <li className="flex item-center justify-space w-100 gap-1 fs-18 text-light text-grey">
                <span className="text-light">VAT</span> $
                {0.055 * parseInt(cartDetails?.gigId?.price)}
              </li>
            </ul>
            {/* total fee */}
            <ul className="flex column py-1 borderB gap-2">
              <li className="flex item-center text-light justify-space w-100 gap-1 fs-18 text-grey">
                <span className="text-bold">Total</span> $
                {0.055 * parseInt(cartDetails?.gigId?.price) +
                  parseInt(cartDetails?.gigId?.price) +
                  parseInt(2.28)}
              </li>
              <li className="flex item-center justify-space w-100 gap-1 fs-18 text-light text-grey">
                <span className="text-light">Total delivery time</span> $2.28
              </li>
            </ul>
            {/* paypal Checkout */}
            {orderisLoading && <LoaderIndex />}
            <div
              onClick={handleOrderPayment}
              className="btn btn-1 text-center fs-18 text-light text-white"
            >
              Pay Now
            </div>
          </div>
        </div>
      </div>
    </CheckoutRightContent>
  );
}

const CheckoutRightContent = styled.div`
  width: 100%;
  .detailsImageWrapper {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    height: 8rem;

    img {
      width: 100%;
      object-fit: cover;
      position: absolute;
      border-radius: 6px;
      height: 100%;
    }
  }
  .top {
    background-color: #fafafa;
  }
  img {
    width: 80%;
  }
  .btn {
    padding: 1rem 2rem;
    border-radius: 40px;
  }

  .Right {
    position: sticky;
    top: 0;
  }
  .text-green {
    color: var(--green);
  }
  .flex1 {
    flex: 1;
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }
  .borderB {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
`;
