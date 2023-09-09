import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Accordion from "../../common/accordion";


export default function Banner1index() {
  return (
    <BannerIWrapper className="border-0 custom-bg-color-grey-1 pt-5 custom-el-pos-3 p-relative z-index-1">
      <div className="container py-5">
        <div className="grid-1 grid-gap4 pt-5">
          {/* right start */}
          <div className="flexd">
            <h2 className="fs-45 font-weight-semibold text-center text-9 text-capitalize mb-2">
            Frequently asked questions.
            </h2>
            <div className="divider divider-small mt-0 mb-4">
              <hr className="bg-primary" />
            </div>

            {/* Accordion section */}
            <Accordion />
            <h6 className="m-0 mt-5">
              <a href="#" className="">
                Read More
              </a>
            </h6>
          </div>
          {/* right end */}
        </div>
      </div>
    </BannerIWrapper>
  );
}

const BannerIWrapper = styled.div`
  width: 100%;
  padding: 10rem 0;
  background-color: #f8f9fb;
  .grid-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    @media (max-width:780px) {
        grid-template-columns: 1fr;
      }
  }
  h2 {
    font-family: "Sintony", sans-serif;
    font-weight: 400;
    font-size: 6  rem;
  }
  h4 {
    font-family: "Sintony", sans-serif;
    font-weight: 600;
  }
  .card-img-top {
    &:hover {
      .overlay-show {
        opacity: 1;
        visibility: visible;
      }
    }
    .overlay-show {
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
    }
  }
  .content {
    padding-top: 3rem;
  }
`;
