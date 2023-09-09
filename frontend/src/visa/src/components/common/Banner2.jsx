import React from "react";
import styled from "styled-components";

export default function Banner2({ type, text, subText }) {
  return (
    <Banner2Content>
      <div className="Banner2Wrapper">
        <div className="Banner2Left">
          <div className="w-100 hidden">
            <h2
              data-aos="fade-right"
              data-aos-duration="1100"
              data-aos-delay="400"
            >
              {text}
              <span
                data-aos="fade-right"
                data-aos-duration="1100"
                data-aos-delay="700"
              >
                {subText}
              </span>
            </h2>
          </div>

          <div className="btnWrapper w-100">
            <button
              className="startBtn"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="550"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </Banner2Content>
  );
}

const Banner2Content = styled.div`
  width: 100%;
  z-index: 50;
  position: relative;
  background: var(--blue-2);
  .Banner2Wrapper {
    width: 90%;
    margin: 0 auto;
    padding: 6rem 4rem;
    margin: 0 auto;
    max-width: 1600px;
    @media (max-width: 980px) {
      padding: 6rem 0;
    }
    .Banner2Left {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 20vw;
      grid-gap: 2rem;
      @media (max-width: 980px) {
        grid-template-columns: 1fr;
      }
      h2 {
        font-size: 5rem;
        font-weight: 700;
        color: #fff;
        width: 100%;
        line-height: 1.7;

        span {
          display: block;
          font-size: 2rem;
          padding: 0.6rem 0;
          font-weight: 600;
          line-height: 34px;
          text-transform: uppercase;
        }
      }
      .btnWrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        @media (max-width: 980px) {
          justify-content: flex-start;
      }
        .startBtn {
          border: none;
          outline: none;
          padding: 2rem 3.5rem;
          font-size: 1.7rem;
          color: var(--blue-2);
          background: #fff;
          border-radius: 10px;
          font-family: "Sintony", sans-serif;
          font-weight: 600;
          z-index: 5000;
          cursor: pointer;
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }
  }
`;
