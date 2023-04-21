import React from "react";
import { BiChevronRight } from "react-icons/bi";
import styled from "styled-components";

const businesslist = [
  "Connect to freelancers with proven business experience",
  "Get matched with the perfect talent by a customer success manager",
  "Manage teamwork and boost productivity with one powerful workspace",
];

export default function Design1Index() {
  return (
    <div className="w-100" style={{ backgroundColor: "#0D084D" }}>
      <Design1IndexContainer className="w-90 auto grid grid-5 grid-gap3">
        <header className="auto flex py-2 column gap-2">
          <div className="flex item-center">
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#fff">
                <path d="m81.6 13.1h-3.1c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-13.4h-2.5c-2 0-3.1 1.5-3.1 4.1v9.3h-6v-18.4h6v2.8c1-2.2 2.3-2.8 4.3-2.8h7.3v2.8c1-2.2 2.3-2.8 4.3-2.8h2zm-25.2 5.6h-12.4c.3 2.1 1.6 3.2 3.7 3.2 1.6 0 2.7-.7 3.1-1.8l5.3 1.5c-1.3 3.2-4.5 5.1-8.4 5.1-6.5 0-9.5-5.1-9.5-9.5 0-4.3 2.6-9.4 9.1-9.4 6.9 0 9.2 5.2 9.2 9.1 0 .9 0 1.4-.1 1.8zm-5.7-3.5c-.1-1.6-1.3-3-3.3-3-1.9 0-3 .8-3.4 3zm-22.9 11.3h5.2l6.6-18.3h-6l-3.2 10.7-3.2-10.8h-6zm-24.4 0h5.9v-13.4h5.7v13.4h5.9v-18.4h-11.6v-1.1c0-1.2.9-2 2.2-2h3.5v-5h-4.4c-4.3 0-7.2 2.7-7.2 6.6v1.5h-3.4v5h3.4z"></path>
              </g>
            </svg>
            <h4 className="fs-30 text-light text-white">business</h4>
          </div>
          <h3>
            A business solution
            <br />
            designed for <span className="span">teams.</span>
          </h3>
          <h4
            className="fs-20 text-bold text-white"
            style={{ lineHeight: "1.8" }}
          >
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </h4>
          <ul className="flex column py-3 gap-2">
            {businesslist.map((x, index) => {
              return (
                <li
                  className="fs-16 text-bold flex item-center gap-2 text-white"
                  key={index}
                >
                  <div className="icon">
                    <BiChevronRight />{" "}
                  </div>{" "}
                  {x}
                </li>
              );
            })}
          </ul>
          <div className="flex py-2">
            <button className="btn py-1 px-3">Try Fivver Logo Maker</button>
          </div>
        </header>
        <img
          className="w-100"
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png"
          alt=""
        />
      </Design1IndexContainer>
    </div>
  );
}

const Design1IndexContainer = styled.div`
  position: relative;
  min-height: 50rem;
  padding: 8rem 0;
  &.grid-5 {
    grid-template-columns: 1fr 1fr;
    @media (max-width:980px) {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  header {
    z-index: 300;
    width: 95%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 780px) {
      width: 95%;
    }
    .btn {
      background-color: var(--green);
      color: #fff;
      padding: 1.4rem 3rem;
      font-weight: 600;
      border-radius: 3px;
      font-size: 16px;
    }
    .icon {
      width: 3rem;
      height: 3rem;
      border: 1px solid #Fff;
      display: grid;
      border-radius: 50%;
      place-items: center;

      svg {
        font-size: 20px;
      }
    }
    h3 {
      color: #fff;
      font-size: 4rem;
      @media (max-width: 780px) {
        font-size: 3.5rem;
      }
      .span {
        font-style: italic;
        font-weight: 400;
        font-family: serif;
      }
    }
  }
`;
