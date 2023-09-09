import React from "react";
import styled from "styled-components";
import { planData } from "../../data/Plan";
export default function Plans() {
  return (
    <PlansContent>
      <div className="w-90 auto container">
        <div className="w-100 center hidden">
          <h2
            className="text-bold w-100 center"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="200"
          >
            Passport Plans
            <span className="block fs-24 text-light text-grey family-1 pt-2">
              Start here and choose the preferred passport best for you.
            </span>
          </h2>
        </div>

        <div className="w-100 grid2">
          {planData.map((x,index) => {
            return (
              <div
                className={
                  index === 2
                    ? "Card w-100 column item-center flex back-white active"
                    : "Card w-100 column item-center flex back-white"
                }
                key={index}
              >
                <div
                  className={
                    index === 2
                      ? "top center py-3 px-3 w-100 fs-16 uppercase active"
                      : "top center py-3 px-3 w-100 fs-16 uppercase"
                  }
                >
                  {x.title}
                </div>
                <div className="hidden w-100">
                  <h2 className="py-4 ">
                    <sup className="fs-14">$</sup>
                    {x.price}
                    <span className="fs-12 capitalize text-light block text-grey">
                      PER MONTH
                    </span>
                  </h2>
                </div>

                <ul className="w-100 flex column gap-1 py-3">
                  {x.list.map((x, index) => {
                    return (
                      <div className="w-100 hidden">
                        <li
                          data-aos="fade-up"
                          data-aos-duration="1100"
                          data-aos-delay={index * 300}
                          className="w-80 fs-18 text-light center border-bottom py-1 auto"
                        >
                          {x}
                        </li>
                      </div>
                    );
                  })}
                </ul>
                <div className="w-100 py-2 pb-3 flex item-center justify-center hidden">
                  <button
                    className="btn fs-12 family1 text-light"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-delay="600"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PlansContent>
  );
}

const PlansContent = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  .btn2 {
    border: none;
    outline: none;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--green);
    background-color: transparent;
    padding: 1.4rem 2rem;
    margin-bottom: 2rem;
    border: 2px solid var(--green);
    &:hover {
      background-color: var(--green);
      color: #fff;
    }
  }
  .top {
    background-color: var(--dark-1);
    color: #fff;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;
    &.active {
      background-color: var(--blue-2);
    }
  }
  .Card {
    background-color: #fff;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 40px;
    &.active {
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
      transform: translateY(-10px) scale(1.1);
      border-radius: 40px;
    }
    h2 {
      width: 100%;
      text-align: center;
      background-color: #f7f7f7;
    }
  }
  .grid2 {
    display: grid;
    width: 100%;
    padding: 8rem 0;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-gap: 0.09rem;
    grid-row-gap: 10rem;
    place-items: start;
  }
  .container {
    background-color: #f7f7f7;
    padding: 8rem 0;
    width: 90%;
  }
`;
