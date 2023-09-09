import React from "react";
import styled from "styled-components";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { testimonialData } from "../../data/Testimonial";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./theme.css";
// owl options
const options = {
  items: 1,
  dots: true,
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

export default function About() {
  return (
    <AboutContent>
      <div className="container flex column gap-6 item-start">
        <div className="w-100 hidden">
          <h2
            className="fs-40 font-weight-bold"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="450"
          >
            Testimonials
          </h2>
        </div>

        {/* owl carousel section */}
        <OwlCarousel className="owl-theme" {...options}>
          {testimonialData.map((x) => {
            return (
              <div className="w-100 flex1 item-start gap-2" key={x.id}>
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
                        className="line1 fs-16"
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
                      >
                        {x.name}
                      </h4>
                    </div>
                    <div className="w-100 hidden">
                      <h5
                        className="fs-14 text-green text-extra-bold"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                        data-aos-delay="550"
                      >
                        {x.position}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </AboutContent>
  );
}

const AboutContent = styled.div`
  width: 100%;
  padding: 8rem 0;
  .imageWrapper {
  }
  .flex1 {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
    @media (max-width: 980px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  h4 {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: -5px;
      width: 5rem;
      height: 3px;
      background-color: #333;
      left: 0;
      border-radius: 20px;
    }
  }
  .textTop {
    position: relative;
    .icons {
      position: absolute;
      font-size: 24px;
      color: var(--dark-1);
      &.icon1 {
        top: -20%;
        left: -5%;
        @media (max-width: 780px) {
          left: 0;
          top: -25%;
        }
      }
      &.icon2 {
        bottom: -20%;
        right: 10%;
        @media (max-width: 780px) {
          right: 0;
        }
      }
    }
  }
  .images {
    position: relative;
    height: 20rem;
    width: 20rem;
    border-radius: 50%;
    object-fit:cover;
  }
`;
