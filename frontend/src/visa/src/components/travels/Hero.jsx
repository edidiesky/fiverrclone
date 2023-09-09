import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const HeroData = [
  {
    id: 2,
    image: "img/flight_3.jpg",
    subtext: "$2000",
    text: "First-Class Rwonda Airways",
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
          <div className="HeroWrapper" key={x.id}>
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
                  className="btn 24 py-2 px-3 capitalize"
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
  .span {
    background-color: var(--green);
    padding: 2rem 6rem;
    color: #fff;
    position: absolute;
    top: 5%;
    display: block;
    text-align: center;
    font-size: 1.4rem;
    right: -15%;
    text-transform: none;
    transform: rotate(45deg);
  }
  .text1 {
    color: #fff;
  }
  .btn-1 {
    border: none;
    background-color: var(--blue-2);
    color: #fff;
    padding: 1.3rem 2rem;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
  }
  .Card {
    width: 350px;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.3);
    border-radius: 20px;
    overflow: hidden;
    &:hover {
      .ImgWrapper {
        img {
          transform: scale(1.15);
        }
      }
    }
    .CardBottom {
      transition: all 0.6s;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    .ImgWrapper {
      overflow: hidden;
      position: relative;
      .span {
        position: absolute;
        top: 10%;
        left: 5%;
        padding: 0.9rem 1rem;
        background-color: var(--blue-2);
        color: #fff;
        font-size: 1.3rem;
        font-weight: 600;
        z-index: 500;
      }
    }
  }
  .HeroWrapper {
    min-height: 70rem;
    position: relative;
    display: flex;
    align-items: center;
    .backdrop {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 30;
    }
    header {
      width: 86%;
      margin: 0 auto;
    }
    .imageWrapper {
      position: absolute;
      width: 100%;
      top: 0%;
      height: 100%;
      object-fit: cover;
    }
    header {
      position: relative;
      z-index: 50;
      width: 80%;
      h2 {
        font-size: 30px;
        width: 75%;
        color: #a7a3a3;
        @media (max-width: 780px) {
          font-size: 16px;
          width: 90%;
        }
        .text2 {
          font-size: 80px;
          font-weight: 700;
          padding-top: 1.6rem;
          @media (max-width: 1080px) {
            font-size: 35px;
            line-height: 1.3;
          }
        }
      }
    }
  }
`;
