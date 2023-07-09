import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import { Slider } from "../common";
import { testimonialData } from "../../data/testimonial";

const options2 = {
  items: 1,
  dots: true,
  margin: 30,
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
      <div className="container3 w-90 auto">
        <div className="accordion">
          <Slider className="owl-theme" options={options2}>
            {testimonialData.map((x) => {
              return (
                <div className="Card w-100 " key={x.id}>
                  <div className="imageWrapper">
                    <img src={x.image} alt="" className="images" />
                  </div>
                  <div className="w-90 flex gap-2 column item-start">
                    <h4 className="fs-18 text-bold text-grey flex gap-2 item-center">
                      {x.name}, {x.position}
                      <div className="flex icon item-center justify-center">
                        <img
                          src={x.companyImage}
                          alt=""
                          className="image"
                          style={{ height: "4rem" }}
                        />
                      </div>
                    </h4>
                    <p className="para">"{x.desc}"</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </MapIndexWrapper>
  );
}

const MapIndexWrapper = styled.div`
  width: 100%;
  padding: 5rem 0;
  .image {
    width: 0.8rem;
  }
  .icon {
    padding-left: 2rem;
    border-left: 1px solid var(--grey-2);
  }
  .Card {
    display: grid;
    grid-template-columns: 35vw 1fr;
    grid-gap: 4rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
      grid-gap: 4rem;
    }
    .imageWrapper {
      width: 100%;
      height: 100%;
      .images {
        width: 100%;
        height: 100%;
      }
    }

    .para {
      font-size: 3.8rem;
      font-style: italic;
      font-weight: bold;
      color: rgb(0, 57, 18);
      font-family: serif;
      line-height: 1.2;
      @media (max-width: 1080px) {
        font-size: 3rem;
      }
      @media (max-width: 780px) {
        font-size: 3rem;
      }
      @media (max-width: 780px) {
        font-size: 3rem;
      }
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
`;
