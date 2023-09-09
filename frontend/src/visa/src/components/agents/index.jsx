import React from "react";
import styled from "styled-components";
import Banner3 from "./Banner3";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const agentData = [
  { id: 1, image: "img/team/team-1.jpg", name: "Micheal", position: "CEO" },
  {
    id: 2,
    image: "img/team/team-2.jpg",
    name: "Jessica Doe",
    position: "Marketing",
  },
  { id: 3, image: "img/team/team-3.jpg", name: "Melinda Doe", position: "CEO" },
  {
    id: 4,
    image: "img/team/team-4.jpg",
    name: "Melinda Doe",
    position: "Marketing",
  },
];
export default function AgentsIndex() {
  return (
    <AgentsWrapper>
      <Banner3 />
      <div className="container1">
        {agentData.map((x, index) => {
          return (
            <div
              className="Card grid grid-2 grid-gap4 item-center gap-2"
              key={x.id}
            >
              <div
                className="Imgwrapper relative hidden w-100 appear-animation"
                data-appear-animation="fadeInLeftShorter"
              >
                <img
                  src={x.image}
                  className="h-100 w-100"
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="1200"
                />
              </div>
              <div className="CardLeft flex gap-2 col-md-7 order-2">
                <div className="hidden">
                  <h2
                    className="text-color-dark font-weight-bold text-8 mb-0 pt-0 mt-0 appear-animation"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    {x.name}
                  </h2>
                </div>
                <div className="hidden">
                  <p
                    className="font-weight-extra-bold text-primary text-uppercase fs-18"
                    data-appear-animation="maskUp"
                    data-appear-animation-delay="500"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {x.position}
                  </p>
                </div>
                <div className="hidden">
                  <p
                    className="fs-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"
                  >
                    Consectetur adipiscing elit. Aliquam iaculis sit amet enim
                    ac sagittis. Curabitur eget leo varius, elementum mauris
                    eget, egestas quam Consectetur adipiscing elit. Aliquam
                    iaculis sit amet enim ac sagittis. Curabitur eget leo
                    varius, elementum mauris eget, egestas quam.
                  </p>
                </div>
                <div className="hidden">
                  <p
                    className="fs-16"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"
                  >
                    Consectetur adipiscing elit. Aliquam iaculis sit amet enim
                    ac sagittis. Curabitur eget leo varius, elementum mauris
                    eget, egestas quam.
                  </p>
                </div>

                <div className="border-bottom"></div>
                <div className="flex left item-center gap-2 py-2 justify-space w-100 appear-animation">
                  <div className="hireWrapper flex item-center">
                    <div className="hidden" style={{ padding: "2rem 0" }}>
                      <a
                        href="#"
                        className="btn-1 dark mt-3 fs-14 capitalize"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="1200"
                      >
                        Get In Touch
                      </a>
                    </div>

                    <div className="hidden" style={{ padding: "2rem 0" }}>
                      <a
                        href="#"
                        className="btn-1 blue mt-3 fs-14 capitalize"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="1400"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                  <div className="flex item-center gap-1 justify-end">
                    <div className="hidden">
                      <h4
                        className="fs-16 text-extra-bold"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="1200"
                      >
                        Follow Me
                      </h4>
                    </div>
                    <div className="iconContanier flex item-center gap-1">
                      <div className="hidden">
                        <div
                          className="icon"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="1200"
                        >
                          <FaFacebook />
                        </div>
                      </div>
                      <div className="hidden">
                        <div
                          className="icon"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="1400"
                        >
                          <FaTwitter />
                        </div>
                      </div>
                      <div className="hidden">
                        <div
                          className="icon"
                          data-aos="fade-left"
                          data-aos-duration="1000"
                          data-aos-delay="1400"
                        >
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AgentsWrapper>
  );
}

const AgentsWrapper = styled.div`
  width: 100%;
  .left {
    @media (max-width: 1080px) {
      flex-direction: column;
    }
  }
  .iconContanier {
    .icon {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background-color: #ffff;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
      cursor: pointer;
      &:hover {
        background-color: var(--blue-2);
        svg {
          color: #fff;
        }
      }
      svg {
        width: 50%;
        height: 50%;
      }
    }
  }
  .container1 {
    padding-top: 7rem;
    gap: 8rem;
    .Card {
      padding-top: 2rem;
      @media (max-width: 980px) {
        flex-direction: column;
      }
      &:nth-child(odd) {
        display: flex;
        flex-direction: row-reverse;
        gap: 2rem;
        @media (max-width: 980px) {
          flex-direction: column;
        }
        .Imgwrapper,
        .CardLeft {
          flex: 1;
        }
      }
      .CardLeft {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: space-between;
        .role {
          p {
            font-weight: 900;
            color: var(--blue-2);
          }
        }
        .hireWrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          .btn-1 {
            padding: 1.5rem 3rem;
            font-size: 1.4rem;
            border-radius: 6px;
          }
        }
      }
    }
  }
`;
