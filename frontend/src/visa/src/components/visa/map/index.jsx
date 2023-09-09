import React from "react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { testimonialData } from "../../../data/Testimonial";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  items: 1,
  dots: true,
  margin: 20,
  dotsClass: "owl-dots custom-dots",
  dotClass: "owl-dot custom-dot",
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
  },
};

export default function MapIndex() {
  return (
    <MapIndexWrapper>
      <img src="/img//map.png" alt="" className="map" />
      <div className="w-80 auto flex column gap-3">
        <div className="accordion">
          <h3>
            <strong className="text-bold">What</strong> client's say
          </h3>
        </div>
        <OwlCarousel className="owl-theme" {...options}>
          {testimonialData.map((x) => {
            return (
              <div className="w-100 flex Card item-start gap-2" key={x.id}>
                <div className="imageWrapper item hidden">
                  <img
                    src={x.image}
                    alt=""
                    className="images"
                    data-aos="flip-up"
                    data-aos-duration="1200"
                    data-aos-delay="250"
                  />
                </div>

                <div className="testCard  item flex column gap-4 flex-1 py-4">
                  <div className=" textTop">
                    <ImQuotesLeft
                      className="icons icon1"
                      data-aos="zoom-in"
                      data-aos-duration="900"
                      data-aos-delay="150"
                    />
                    <div className=" hidden">
                      <p
                        className="line1 text-bold fs-18 text-dark"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="350"
                      >
                        {x.desc}
                      </p>
                    </div>

                    <ImQuotesRight
                      className="icons icon2"
                      data-aos="zoom-in"
                      data-aos-duration="900"
                      data-aos-delay="150"
                    />
                  </div>
                  <div className="w-100 flex column item-start">
                    <div className="w-100 hidden">
                      <h4
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-delay="450"
                        className="fs-24"
                      >
                        {x.name} <span className="text-green">{x.position}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </MapIndexWrapper>
  );
}

const TestimonialCard = styled.div`
display: flex;
  .images {
    position: relative;
    height: 25rem;
    width: 25rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const MapIndexWrapper = styled.div`
  width: 100%;
  .btn-3 {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .Card {
    @media (max-width:680px) {
      flex-direction: column;
    }
  }
  .images {
    position: relative;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    object-fit: cover;
  }
  position: relative;
  .left {
    width: 4rem;
    display: flex;
    flex-direction: column;
    .top {
      background-color: #fff;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      color: var(--blue-2);
      font-size: 1.5rem;
      font-weight: 600;
    }
    .bottom {
      width: 100%;
      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--blue-2);
      color: #fff;
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
  .right {
    display: flex;
    gap: 1.5rem;
    flex: 1;
    h4 {
      font-size: 1.6rem;
      color: var(--blue-2);
      font-weight: 600;
      span {
        display: block;
        font-size: 1.3rem;
        color: var(--grey-2);
        font-weight: 400;
      }
    }
  }
  .map {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .container2 {
    background-color: rgba(247, 247, 247, 0.5);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 5rem 0;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    .container3 {
      display: grid;
      grid-template-columns: 40vw 1fr;
      width: 85%;
      grid-gap: 4rem;
      margin: 0 auto;
      overflow: hidden;
      @media (max-width: 780px) {
        grid-template-columns: 1fr;
      }
      .accordion {
        width: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        h3 {
          color: var(--text-dark);
          font-weight: 400;
        }
        .Card {
          .images {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
          }
          .textTop {
            padding: 4rem 2rem;
            background-color: var(--blue-2);
            display: flex;
            gap: 3rem;
            position: relative;
            &::after {
              content: "";
              bottom: -10%;
              left: 10%;
              width: 4rem;
              height: 4rem;
              background-color: red;
              position: absolute;
              transform: rotate(-45deg);
              background-color: inherit;
            }
            .icons {
              font-size: 3rem;
              color: #fff;
            }
            p {
              color: #fff;
              width: 85%;
            }
          }
        }
      }
    }
  }
`;
