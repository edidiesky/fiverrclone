import React from "react";
import styled from "styled-components";

export default function Banner1Index() {
  return (
    <Banner1IndexWrappper>
      <div className="wrapper w-90 auto">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png"
          alt=""
        />
        <header className="auto flex py-2 column gap-1">
          <div className="flex item-center gap-1">
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
            <h4 className="fs-30 text-light text-white">logo maker</h4>
          </div>
          <h3>
            Make an incredible logo
            <br />
            <span className="span">in minutes.</span>
          </h3>
          <h4 className="fs-18 text-bold text-white">
            Pre-designed by top talent. Just add your touch.
          </h4>
          <div className="flex py-2">
            <button className="btn py-1 px-3">Try Fivver Logo Maker</button>
          </div>
        </header>
      </div>
    </Banner1IndexWrappper>
  );
}

const Banner1IndexWrappper = styled.div`
  padding: 5rem 0;
  .wrapper {
    position: relative;
    min-height: 30rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue-1);
    @media (max-width: 780px) {
      flex-direction: column;
    }
  }
  img {
    width: 100%;
    border-radius: 5px;
    z-index: 30;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  header {
    z-index: 300;
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 780px) {
      width: 95%;
    }
    .btn {
      background-color: #fff;
      color: var(--blue-1);
      padding: 1.4rem 3rem;
      font-weight: 600;
      border-radius: 3px;
      font-size: 18px;
      @media (max-width: 780px) {
      flex-direction: column;
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
