import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const HeroData = [
  {
    id: 1,
    image: "img/passport_2.jpg",
    text: "Easy Visa",
    subtext: "we are keen in providing your visa choices",
    text: "Get Diverse visa collections",
  },
];
const CustomPrev = ({ onClick }) => (
  <button className="owl-prev" onClick={onClick}>
    <BiChevronLeft />
  </button>
);
const CustomNext = ({ onClick }) => (
  <button className="owl-next" onClick={onClick}>
    <BiChevronRight />
  </button>
);

const options = {
  nav: true,
  items: 1,
  autoplay: true,
  navText: [<CustomPrev />, <CustomNext />],
};

export default function Hero() {
  return (
    <HeroContent>
      {HeroData.map((x) => {
        return (
          <div className="wrapper" key={x.id}>
            <div className="backdrop"></div>
            <img src={x.image} alt="" className="imageWrapper" />
            <header className="flex column gap-4 item-start">
              <div className=" hidden">
                <h2
                  className="text-dark text-bold"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  data-aos-delay="200"
                >
                  {x.subtext}
                  <strong
                    className="text2 block fs-40 text-white text-extra-bold"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-delay="400"
                  >
                    {x.text}
                  </strong>
                </h2>
              </div>
              <div className=" hidden">
                <button
                  className="btn fs-20 py-2 px-3 capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  data-aos-delay="700"
                >
                  Book Now
                </button>
              </div>
            </header>
          </div>
        );
      })}
    </HeroContent>
  );
}

const HeroContent = styled.div`
  width: 100%;

  .text1 {
    color: #fff;
  }
  .backdrop {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .wrapper {
    position: relative;
    display: flex;
    padding: 20rem 0;
    align-items: center;
    .header {
      width: 86%;
      margin: 0 auto;
    }
    .backdrop {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 30;
      background-color: rgba(0, 0, 0, 0.7);
    }
    .imageWrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    header {
      position: relative;
      z-index: 50;
      width: 80%;
      margin: 0 auto;
      h2 {
        font-size: 24px;
        color: #cbc4c4;
        width: 95%;
        @media (max-width: 780px) {
          font-size: 16px;
          width: 90%;
        }
        .text2 {
          font-size: 80px;
          padding-top: 1.6rem;
          font-weight: 700;
          color: #fff;
          @media (max-width: 1080px) {
            font-size: 35px;
            line-height: 1.3;
          }
        }
      }
    }
  }
  .flex1 {
    display: flex;
    align-items: center;
    width: 87%;
    margin: 0 auto;
    justify-content: space-between;
    gap: 2rem;
    @media (max-width: 780px) {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  .sidetext {
    position: relative;
    &::after {
      position: absolute;
      content: "";
      width: 3px;
      border-radius: 30px;
      height: 100%;
      left: -9%;
      top: 0;
      background-color: var(--green);
    }
  }
`;
