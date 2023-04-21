import React from "react";
import styled from "styled-components";

export default function Right() {
  return (
    <RightIndexWrapper>
      <div className="w-100 flex item-start column justify-center gap-2">
        <h3 className="fs-18 text-dark family1">About Fiverr.com</h3>
        <ul className="w-100 flex item-start column justify-center gap-1">
          <li className="flex w-100 justify-space text-grey fs-16 item-center">
            <span className="text-light text-grey">From</span> Sri Lanka
          </li>
          <li className="flex w-100 justify-space text-grey fs-16 item-center">
            <span className="text-light text-grey">On Fiverr since</span> Dec
            2019
          </li>
          <li className="flex w-100 justify-space text-grey fs-16 item-center">
            <span className="text-light text-grey">English</span> Fluent
          </li>
          <li className="flex w-100 justify-space text-grey fs-16 item-center">
            <span className="text-light text-grey">Sinhala, Sinhalese</span>{" "}
            Native
          </li>

          <li className="flex w-100 justify-space text-grey fs-16 item-center">
            <span className="text-light text-grey">Seller level</span> Level 2
            Seller
          </li>
          <li className="flex w-100 justify-space text-grey fs-16 item-center">
            <span className="text-light text-grey">Rating</span> 5
          </li>
        </ul>
      </div>
    </RightIndexWrapper>
  );
}

const RightIndexWrapper = styled.div`
  width: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.3);
  padding: 3rem 2rem;
  padding-top: 10rem;
  @media (max-width: 980px) {
    display: none;
  }
`;
