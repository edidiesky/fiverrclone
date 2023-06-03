import React from "react";
import styled from "styled-components";
import Paypal from "../svg/paypal";
import { useSelector } from "react-redux";
export default function CheckoutLeft() {
  const { userInfo } = useSelector((store) => store.user);
  return (
    <CheckoutLeftContent className="w-100 border flex column gap-2">
      <div className="w-100 wrapper radius1 flex column">
        <h3 className="fs-20 p2 text-grey radius1 back-grey">
          Billing information
        </h3>
        <div className="p2 flex column gap-2">
          <div className="flex w-100 item-center justify-space gap-4">
            <h4 className="fs-18 flex-1 text-grey text-light">
              Your invoice will be issued according to the details listed here.
            </h4>
            <div className="flex-1">
              <div className={"cartBtn py-1 fs-14 text-dark text-extra-bold family1"}>Add Details</div>
            </div>
          </div>
          <div className="w-100 flex column">
            <h4 className="fs-20 text-grey text-bold">{userInfo?.username}</h4>
            <h4 className="fs-18 text-grey text-light">
              {userInfo?.country ? userInfo?.country : userInfo?.email}
            </h4>
          </div>
        </div>
      </div>
      <div className="w-100 wrapper radius1 flex column">
        <h3 className="fs-20 p2 text-grey radius1 back-grey">
          Payment Options
        </h3>
        <div className="p2 flex item-center gap-1">
          <Paypal />
        </div>
      </div>
    </CheckoutLeftContent>
  );
}

const CheckoutLeftContent = styled.div`
  width: 100%;

  background-color: #fff;
  flex-direction: column;
  gap: 5rem;
  .cartBtn {
    width: 45%;
  }
  .wrapper {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .p2 {
    padding: 2rem;
  }

  .back-grey {
    background-color: var(--light-grey);
  }
  .text-green {
    color: var(--green);
  }
`;
