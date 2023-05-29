import React from "react";
import styled from "styled-components";

export default function Talent() {
  return (
    <TalentWrappper>
      <div className="wrapper w-90 auto">
        <img
          src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png"
          alt=""
        />
        <header className="auto flex column gap-3">
          <h2>
          Suddenly it's all so <span className="span">growing.</span>
          </h2>
          <div className="flex py-2">
            <button className="btn py-1 px-3">Get Started</button>
          </div>
        </header>
      </div>
    </TalentWrappper>
  );
}

const TalentWrappper = styled.div`
  padding: 5rem 0;
  .wrapper {
    position: relative;
    min-height: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
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
    @media (max-width:780px) {
      width: 90%;
    }
    .btn {
      background-color: var(--green);
      color: #fff;
      padding: 1.4rem 3rem;
      font-weight: 500;
      border-radius: 3px;
      font-size: 18px;
    }
    h2 {
      color: #fff;
      font-size: 6rem;
      @media (max-width:780px) {
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
