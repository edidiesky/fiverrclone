import React from "react";
import styled from "styled-components";

export default function Head({ text, subtext, para }) {
  return (
    <HeadWrapper className="hidden">
      <h3 className="text-extra-bold fs-24 item-start">
        {text}
      </h3>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.div`
  h3 {
    color: var(--dark-1);
    font-size: 35px;
    line-height: 1.2;
    @media (max-width: 780px) {
      font-size: 30px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
`;
