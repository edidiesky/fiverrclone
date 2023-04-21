import React from "react";
import styled from "styled-components";


export default function Top() {
  return (
    <TopIndexWrapper>
      <div className="w-90 auto flex item-center justify-space">
        <h4 className="text-dark fs-18 text-extra-bold">
          Logo_56575
          {/* message */}
          <span className="block fs-14 text-light text-grey">
          OnlineLocal time: Mar 26, 2023, 1:53 AM
          </span>
        </h4>
      </div>
    </TopIndexWrapper>
  );
}

const TopIndexWrapper = styled.div`
  width: 100%;
  top: 0;
  position: absolute;
  left: 0;
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  min-height: 5.5rem;
  padding: 1.5rem 0;
  z-index: 100;
`;
