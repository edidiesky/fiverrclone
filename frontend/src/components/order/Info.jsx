import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
export default function Info() {
  const { cart, cartDetails } = useSelector((store) => store.cart);
  const { order } = useSelector((store) => store.order);
  return (
    <div className=" w-90 auto">
      <RightWrapper className=" w-90 auto">
        <div className="flex summary center py-2">
          {/* order summary */}
          <div className="w-50 flex gap-2 column">
            <div className="w-100 detailsImageWrapper">
              {/* {cartDetails?.gigId?.image?.map((x) => {
                return (
                  <img
                    src={
                      "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/215100800/original/5fd553fd6fc3516fb438fdbfd7f4c022fae4e258/do-flat-modern-minimalist-logo-design.jpg"
                    }
                    alt=""
                    className="radius1 w-100"
                  />
                );
              })} */}
              <img
                src={
                  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/215100800/original/5fd553fd6fc3516fb438fdbfd7f4c022fae4e258/do-flat-modern-minimalist-logo-design.jpg"
                }
                alt=""
                className="radius1 w-100"
              />
            </div>
            <h5 className="text-bold fs-18 text-dark w-100 flex item-center justify-space">
              EstimatedTax
              <span className="text-light">${order?.estimatedTax || 100}</span>
            </h5>

            <h5 className="text-bold fs-18 text-dark w-100 flex item-center justify-space">
              Payment method
              <span className="text-light">
                {order?.paymentMethod || "Stripe"}
              </span>
            </h5>
            <h5 className="text-bold fs-18 text-dark w-100 flex gap-2 item-center justify-space">
              Total
              <span className="text-light">
                ${order?.TotalShoppingPrice || 3000}
              </span>
            </h5>
          </div>
        </div>
      </RightWrapper>
    </div>
  );
}

const RightWrapper = styled.div`
  .detailsImageWrapper {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    height: 18rem;

    img {
      width: 100%;
      object-fit: cover;
      position: absolute;
      border-radius: 6px;
      height: 100%;
    }
  }
 
  .w-50 {
    width: clamp(30%, 280px, 70%);
    @media (max-width: 580px) {
      width: 100%;
    }
  }
  .w-90 {
    @media (max-width: 480px) {
      width: 100% !important;
    }
  }
  .summary {
    justify-content: flex-end;
  }
  .product {
    gap: 1.5rem;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }
  }
`;
