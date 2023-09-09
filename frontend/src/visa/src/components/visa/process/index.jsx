import React from "react";
import styled from "styled-components";
import { processData } from "../../../data/Process";
export default function ProcessIndex() {
  return (
    <ProcessIndexWrapper className="position-relative">
      <img
        src="img/demos/transportation-logistic/generic/generic-3.png"
        className="bannerImage"
        alt=""
      />
      <div className="container">
        <div className="col-half-section col-half-section-right py-5 ms-auto">
          <div className="hidden">
            <h2
              className="w-50"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="450"
            >
              Our Process makes us stand out from the rest, ensuring a seamless
              journey for every client.{" "}
            </h2>
          </div>

          <div className="process">
            {processData.map((x, index) => {
              return (
                <div className="w-100 hidden">
                  <div
                    className="process-step appear-animation"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay={index * 400}
                    key={x.id}
                  >
                    <div className="process-step-circle bg-tertiary border-0">
                      {x.id}
                    </div>
                    <div className="process-step-content">
                      <h4 className="mb-0 mt-1 text-4-5 font-weight-bold">
                        {x.name}
                      </h4>
                      <p className="mb-0 font-weight-medium text-3-5">
                        {x.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ProcessIndexWrapper>
  );
}

const ProcessIndexWrapper = styled.div`
  width: 100%;
  min-height: 60rem;

  .bannerImage {
    position: absolute;
    top: 0;
    left: 0;
  }
  .container {
    position: relative;
    z-index: 50;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 6rem 0;

    h3 {
      font-size: 3rem;
      font-weight: 700;
      color: var(--dark-1);
      line-height: 1.6;
      text-transform: none;
      width: 60%;
      @media (max-width: 780px) {
        width: 100%;
      }
    }
    .process {
      display: flex;
      align-items: flex-start;
      gap: 7rem;
      flex-direction: column;
      padding-top: 5rem;
      .process-step {
        display: flex;
        align-items: center;
        .process-step-content {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 1rem;
          h4 {
            font-size: 3rem;
            font-weight: 600;
            color: var(--dark-1);
            width: 50%;
            @media (max-width: 780px) {
              width: 100%;
            }
          }
          p {
            font-size: 1.4rem;
            font-weight: 600;
            color: var(--grey-1);
            width: 70%;
            @media (max-width: 780px) {
              width: 100%;
            }
          }
        }
        .process-step-circle {
          height: 30px;
          width: 30px;
          margin: 0 15px 0 0;
          min-height: 80px;
          min-width: 80px;
          border-radius: 50%;
          background-color: #222;
          display: grid;
          place-items: center;
          font-size: 2rem;
          color: #fff;
          position: relative;
          &::after {
            width: 2px;
            height: 5rem;
            content: "";
            position: absolute;
            left: 50%;
            bottom: -80%;
            background-color: var(--grey-1);
            @media (max-width: 780px) {
              height: 15rem;
              bottom: -190%;
            }
          }
        }
      }
    }
  }
`;
