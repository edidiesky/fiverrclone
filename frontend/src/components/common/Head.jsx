import React from "react";
import styled from "styled-components";

export default function Head({ text, subtext, para }) {
  return (
    <HeadWrapper className="hidden">
      <h3 className="text-bold fs-24 item-start">
        {text}
        <div className="hidden">
          <span
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="block uppercase span1"
          >
            {subtext}
          </span>
        </div>

        <div className="hidden">
          <span
            data-aos="fade-up"
            data-aos-duration="1050"
            data-aos-delay="450"
            className="block py-2 para"
          >
            {para}
          </span>
        </div>
      </h3>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.div`
  h3 {
    color: var(--dark-1);
    font-size: 36px;
    line-height: 1.2;
    @media (max-width: 780px) {
      font-size: 24px;
    }
  }
`;
