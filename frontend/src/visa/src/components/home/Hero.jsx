import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const HeroData = [
  {
    id: 1,
    image: "/img/travel-5219496_1920.jpg",
    subtext: "Study / Work",
    text: "Over 15  Countries",
  },

];


export default function Hero() {
  return (
    <HeroContent>
        {HeroData.map((x) => {
          return (
            <div className="HeroWrapper" key={x.id}>
              <img
                src={'/img/travel-5219496_1920.jpg' }
                alt="cart"
                className="imageWrapper"
              />
              <header className="flex column gap-4 item-start">
                <div className=" hidden">
                  <h2
                    className="text-white fs-30 text-bold"
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
                <div className=" hidden py-2">
                  <Link
                    to={"/visa"}
                    className="btn capitalize"
                    data-aos="fade-up"
                    data-aos-duration="1100"
                    data-aos-delay="700"
                  >
                    Get Started
                  </Link>
                </div>
              </header>
              <div className="section1 w-100 flex item-center">
                <div className="flex1">
                  <h2 className="fs-18 text1 family1 text-light flex-1">
                    Searching for a <br /> Reliable Travel Agency ?
                    <span className="block fs-14 family1 text-white family1 text-light pt-2">
                      Let's help take care of your Travels and Visa
                    </span>
                  </h2>
                  <div className="flex-1 flex item-center gap-4 jusify-end">
                    <h3 className="text1 sidetext fs-14 family1 text-light">
                      <span className="block pb-1 fs-12 family1 text-green family1 text-bold">
                        Call Us Now
                      </span>
                      +001 1230 45101
                    </h3>
                    <h3 className="text1 sidetext fs-14 family1 text-light">
                      <span className="block pb-1 fs-12 family1 text-green text-bold">
                        Email Us Now
                      </span>
                      [email protected]
                    </h3>
                  </div>
                </div>
              </div>
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
  .btn {
    padding:2rem 3rem;
    @media (max-width:680px) {
      padding:1.7rem 3rem;
    }
  }
  .HeroWrapper {
    min-height: 70rem;
    position: relative;
    display: flex;
    align-items: center;
    .section1 {
      background-color: transparent;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 3rem 0;
      position: absolute;
      bottom: 0;
      width: 85%;
      transform: translateX(-50%);
      left: 50%;
      margin: 0 auto;
      max-width:1160px;
      @media (max-width:680px) {
      padding:2rem 0;
      width:90%;
    }
    }
    header {
      width: 85%;
      margin: 0 auto;
      max-width:1160px;
    }
    .imageWrapper {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      left: 0;
      object-fit: cover;
    }
    header {
      position: relative;
      z-index: 50;
      padding: 6rem 0;
      @media (max-width: 1080px) {
        padding-bottom: 0;
      }
      @media (max-width: 480px) {
         padding: 0;
          }
      h2 {
        font-size: 45px;
        @media (max-width: 1080px) {
          font-size: 20px;
        }
        .text2 {
          font-size: 78px;
          font-weight: 700;
          @media (max-width: 1080px) {
            font-size: 55px;
          }
          @media (max-width: 480px) {
            font-size: 45px;
          }
          @media (max-width: 320px) {
            font-size: 40px;
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


// fixed topbar
// team navbar
// image in interest
// community standard screen and legal screen 