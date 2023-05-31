import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go";
import { BiChevronRight } from "react-icons/bi";

export default function Header() {
  const HeaderTopLeft = () => {
    return (
      <div className="headerTopLeft flex item-center gap-1">
        <div className="flex item-center gap-1">
          <div className="icons">
            <GoThreeBars fontSize={"24px"} />
          </div>
          <Link to={"/"}>
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g className={"fill"}>
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
              <g fill="#1dbf73">
                <path d="m85.3 27c2 0 3.7-1.7 3.7-3.7s-1.7-3.7-3.7-3.7-3.7 1.7-3.7 3.7 1.7 3.7 3.7 3.7z"></path>
              </g>
            </svg>
          </Link>
        </div>
        <div
          className="w-100 flex item-center gap-1"
          style={{ flexWrap: "wrap" }}
        >
          <div className="flex fs-16 family1 text-green item-center gap-1">
            <div className="avatar flex item-center justify-center fs-18 text-white">
              <BiChevronRight className="fs-24" />
            </div>
            Order Details
          </div>
          <BiChevronRight className="fs-30 text-grey" />
          <div className="flex fs-16 family1 text-green item-center gap-1">
            <div className="avatar flex item-center justify-center fs-18 text-white">
              2
            </div>
            Confirm & Pay
          </div>
          <BiChevronRight className="fs-30 text-grey" />
          <div className="flex fs-16 family1 text-green item-center gap-1">
            <div className="avatar flex item-center justify-center fs-18 text-white">
              3
            </div>
            Submit Requirements
          </div>
        </div>
      </div>
    );
  };

  return (
    <HeaderWrapper>
      <HeaderTopContainer className={"w-100 headerTopContainer"}>
        <div className="headerTopWrapperContainer flex item-center w-90 auto">
          <HeaderTopLeft />
        </div>
      </HeaderTopContainer>
    </HeaderWrapper>
  );
}

const HeaderTopContainer = styled.div`
  min-height: 8rem;
  width: 100%;
  display: flex;
  align-items: center;
  background: #fff;
  padding: 1.5rem 0;
  gap: 3rem;
  .links {
  }
  .fill {
    fill: var(--dark-1);
  }

  .icons {
    @media (min-width: 1080px) {
      display: none;
    }
  }
  .headerTopLeft {
    flex: 1;
    gap: 3rem;
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.5rem;
    }
  }
  .Right {
    .btn-4 {
      border: 1.5px solid var(--green);
      color: var(--green);
      padding: 0.5rem 2rem;
      border-radius: 3px;
      transition: all 0.5s;
      &:hover {
        background-color: var(--green);
        color: #fff;
      }
    }
  }

  .headerTopCenter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.6rem;
    @media (max-width: 980px) {
      display: none;
    }
    .nav-link {
      font-weight: 400;
      color: var(--dark-dark);
      transition: all 0.5s;
      text-decoration: none;
      position: relative;
      &:hover {
        color: var(--green);
      }
      &.active {
        position: relative;
        color: var(--green);
      }
    }
  }

  .headerTopWrapperContainer {
    display: flex;
    align-items: center;
    gap: 4rem;
    @media (max-width: 1080px) {
      gap: 2rem;
    }
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 5000;
  .text-green {
    color: var(--green);
  }
  .avatar {
    background-color: var(--green);
    width: 3rem;
    height: 3rem;
  }
  .headerTopContainer {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    &.active {
      background-color: transparent;
      border-bottom: none;
    }
    .headerTopCenter {
      &.active {
        color: #fff;
      }
    }
  }
  .HeaderBottom {
    overflow: auto;
    width: 100%;
    z-index: 5000;
    background-color: #fff;
    &.active {
      display: none;
    }
  }
  .nav-links {
    min-width: 5rem;
  }
`;
