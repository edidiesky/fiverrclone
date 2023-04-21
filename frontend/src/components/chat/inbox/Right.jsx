import React from "react";
import styled from "styled-components";
export default function InboxRight() {
  return (
    <InboxRightWrapper className="flex item-center justify-center column gap-2">
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/inbox_perseus/apps/no-selection.fb46419.svg"
        alt=""
        className="image"
      />
      <h3 className="fs-24 family1 text-center text-dark">
        Pick up where you left off
        <span className="fs-16 block text-grey text-light">
          Select a conversation and chat away.
        </span>
      </h3>
    </InboxRightWrapper>
  );
}
const InboxRightWrapper = styled.div`
  width: 100%;
  height: 100%;
  .image {
    width: 250px;
  }
`;
