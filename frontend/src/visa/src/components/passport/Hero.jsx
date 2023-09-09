import React from "react";
import styled from "styled-components";

const HeroData = [
  {
    id: 1,
    image: "img/passport_3.jpg",
    subtext: "At Discovery Pass We Are Ready To Work For You",
    text: "Get your Certified Passport To Over 15+ Countries",
  },
];

export default function Hero() {
  return (
    <HeroContent>
      {HeroData.map((x) => {
        return (
          <div className="HeroWrapper" key={x.id}>
            <img src={x.image} alt="" className="imageWrapper" />
            <div className="backdrop"></div>
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
              <div className="hidden">
                <button
                  className="btn py-2 px-3 capitalize"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  data-aos-delay="700"
                >
                  Get Started
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
    text-align: end;
    @media (max-width: 980px) {
      text-align: start;
    }
  }
  .backdrop {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.7);
  }
  .flex-1 {
    justify-content: center;
    @media (max-width: 980px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
    }
    h2 {
      @media (max-width: 780px) {
        font-size: 1.8rem;
      }
    }
  }
  .flex-2 {
    justify-content: center;

    @media (max-width: 980px) {
      flex-direction: column;
      width: 100%;
      display: inline-block;
      justify-content: center;
      align-items: center;
    }
  }
  .text-dark {
    width: 80%;
  }
  .btn2 {
    border: none;
    outline: none;
    font-size: 1.4rem;
    border: 2px solid var(--blue-2);
    padding: 1.5rem 3rem;
    border-radius: 10px;
    color: var(--blue-2);
    font-weight: 600;
    z-index: 4000;
    background-color: transparent;
    &:hover {
      background-color: var(--blue-2);
      color: #fff;
    }
  }
  .btn {
    border: none;
    outline: none;
    font-size: 2rem;
    padding: 2rem 4rem;
    border-radius: 40px;
    color: #fff;
    font-weight: 600;
    text-transform: uppercase;
    z-index: 4000;
    background-color: var(--blue-2);
  }
  .HeroWrapper {
    min-height: 70rem;
    position: relative;
    display: flex;
    width: 100%;
    justify-content: center;
    .section1 {
      background-color: #f7f7f7;
      padding: 6rem 0;
      position: absolute;
      bottom: 0;
      width: 100%;
      left: 0;
      z-index: 400;
    }
    .imageWrapper {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    header {
      position: relative;
      z-index: 50;
      width: 80%;
      display: flex;
      flex-direction: column;
      padding: 10rem 0;
      justify-content: center;
      @media (max-width: 980px) {
        width: 90%;
      }
      h2 {
        font-size: 24px;
        width: 80%;
        color: #a7a3a3;
        @media (max-width: 780px) {
          font-size: 20px;
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
  .flex1 {
    display: flex;
    align-items: center;
    width: 87%;
    margin: 0 auto;
    justify-content: center;
    gap: 2rem;
    @media (max-width: 980px) {
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
