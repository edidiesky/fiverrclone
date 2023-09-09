import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const benefitData = [
  {
    id: 1,
    image: "img/flight_4.jpg",
    title: "Private Jet Bookings",
    desc: "Luxury air travel made easy with our expert private jet bookings service.",
  },
  {
    id: 2,
    image: "img/passport_2.jpg",
    title: "Immigration",
    desc: "Our experienced team provides hassle-free immigration services for a smooth and stress-free process.",
  },
  {
    id: 3,
    image: "img/car_1.jpeg",
    title: "Car Hire",
    desc: "Choose from our wide selection of quality car rentals for your convenience and comfort.",
  },
  {
    id: 4,
    image: "img/vacation_1.jpg",
    title: "Travel & Tourism",
    desc: "Let us plan your dream vacation with our expert travel and tourism services.",
  },
  {
    id: 5,
    image: "img/travel/travelcarousel02.jpg",
    title: "Hotel & Accommodation",
    desc: "We offer a range of accommodation options to suit your needs and budget.",
  },
  {
    id: 5,
    image: "img/car_2.jpg",
    title: "Car Hire",
    desc: "Our efficient and knowledgeable team will find you the best deals for your next flight.",
  },
];
const benefitIcon = [
  {
    id: 1,
    image: "img/demos/business-consulting/icons/icon-1.png",
    value: 15,
    title: "Years in Business",
  },
  {
    id: 2,
    image: "img/demos/business-consulting/icons/icon-2.png",
    value: 2050,
    title: "Successfull Cases",
  },
  {
    id: 3,
    image: "img/demos/business-consulting/icons/icon-3.png",
    value: 100,
    title: "Satisfied Clients",
  },
  {
    id: 4,
    image: "img/demos/business-consulting/icons/icon-4.png",
    value: 250,
    title: "Pro Consultants",
  },
];
export default function Benefit() {
  const BenfitBottom = () => {
    return (
      <BenefitContent>
        <div className="container">
          <div className="w-100 hidden">
            <h2
              className="font-weight-bold text-color-dark mb-3 hidden"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="350"
            >
              - Expertises
            </h2>
          </div>

          <div className="rows hidden">
            {benefitData.map((x, index) => {
              return (
                <div
                  className="FeatureCard hidden"
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-delay={index * 300}
                >
                  <Link
                    to="/visa"
                    className="FeatureCardLink hidden text-decoration-none appear-animation"
                  >
                    <div
                      className="feature-box"
                      data-aos="zoom-in"
                      data-aos-duration="1300"
                      data-aos-delay="350"
                    >
                      <div className="feature-box-icon">
                        <img src={x.image} alt="" className="featImage" />
                      </div>
                      <div className="feature-box-info">
                        <h4 className="font-bold fs-30 text-5">
                          {" "}
                          {x.title}
                        </h4>
                        <p className="text-2 text-grey text-bold fs-12">{x.desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="row">
            <div className="text-center ">
              <button
                className="btn btn1"
                data-aos="fade-up "
                data-aos-duration="1000"
                data-aos-delay="350"
              >
                View All
              </button>
            </div>
          </div>
        </div>
      </BenefitContent>
    );
  };
  const BenefitTop = () => {
    return (
      <BenefitTop1Wrapper>
        <div className="container">
          <div className="row">
            <div className="w-100 hidden">
              <h2
                className="font-weight-bold text-color-dark"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="250"
              >
                Benefits Of Visa Online Coaching & Preparation
              </h2>
            </div>

            <div className="row list1">
              <ul className="row hidden">
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="250"
                >
                  <div className="icon">
                    <BiChevronRight />
                  </div>{" "}
                  Certified Professionals
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="350"
                >
                  {" "}
                  <div className="icon">
                    <BiChevronRight />
                  </div>
                  Former Chief Executives
                </li>
                <li
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay="450"
                >
                  {" "}
                  <div className="icon">
                    <BiChevronRight />
                  </div>
                  Real Estate Professionals
                </li>
              </ul>
              <div className="w-100" style={{ padding: "1.5rem 2rem" }}>
                <a
                  className="btn btn-outline hidden text-uppercase"
                  href="/visa"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                  data-aos-delay="450"
                  style={{
                    padding: "1.3rem 4rem",
                    fontSize: "1.6rem",
                    borderRadius: "30px",
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="grid">
            {benefitIcon.map((x, index) => {
              return (
                <div
                  className="iconCard"
                  key={x.id}
                  data-aos="zoom-in"
                  data-aos-duration="800"
                  data-aos-delay={index * 400}
                >
                  <img src={x.image} alt="iconimage" />
                  <h3 className="fs-18">
                    {x.value}+<span className="fs-24">{x.title}</span>
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </BenefitTop1Wrapper>
    );
  };
  return (
    <BenefitContainerWrapper>
      <BenefitTop />
      <BenfitBottom />
    </BenefitContainerWrapper>
  );
}

const BenefitContent = styled.div`
  background-color: #eef4f2 !important;
  padding: 8rem 0;
  width: 100%;
  .row {
    button {
      &.btn1 {
        background-color: transparent;
        color: var(--green);
        border: 2px solid var(--green);
        outline: none;
        font-size: 1.7rem;
        transition: all 0.4s;
        &:hover {
          background-color: var(--green);
          color: #fff;
        }
      }
    }
  }
  .rows {
    grid-gap: 6rem;

    .FeatureCard {
      .FeatureCardLink {
        width: 100%;
        .feature-box {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 3rem;
          &:hover {
            .feature-box-icon {
              .featImage {
                transform: scale(1.1);
              }
            }
          }
          .feature-box-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            flex: 1;
          }
          .feature-box-icon {
            background: transparent;
            width: 120px;
            position: relative;
            height: 120px;
            border: 6px solid #fff;
            border-radius: 100%;
            margin-top: 0;
            z-index: 1;
            overflow: hidden;
            transform: scale(1);

            position: relative;
            .featImage {
              width: 100%;
              height: 100%;
              border-radius: 100%;
              top: 0;
              left: 0;
              transition: all ease 0.3s;
            }
          }
        }
      }
    }
  }
`;

const BenefitTop1Wrapper = styled.div`
  width: 100%;
  background: #f7f7f7;
  padding: 12rem 0;
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    @media (max-width: 780px) {
      grid-template-columns: 1fr;
    }
    .row {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      align-items: flex-start;
      &.list1 {
        width: 90%;
        margin: 0 auto;
        gap: 3rem;
        padding-top: 2rem;
      }
      ul {
        li {
          font-size: 2.4rem;
          font-weight: 500;
          color: var(--dark-1);
          display: flex;
          align-items: center;
          gap: 2rem;
          .icon {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            background-color: #e2fdea;
            display: grid;
            place-items: center;
            svg {
              color: var(--green);
              width: 70%;
              height: 70%;
            }
          }
        }
      }
      h2 {
        padding-right: 2rem;
      }
    }
    .grid {
      .iconCard {
        display: flex;
        align-items: flex-start;
        gap: 2rem;
        padding: 3rem 2rem;

        h3 {
          font-size: 4rem;
          font-weight: 700;
          color: var(--green);
          span {
            font-size: 2rem;
            font-weight: 400;
            color: var(--dark-1);
            display: block;
          }
        }
        &:nth-child(1),
        &:nth-child(4) {
          background-color: #fff;
          box-shadow: 0 2px 1px rgba(0, 0, 0, 0.08);
        }
      }
    }
  }
`;

const BenefitContainerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  align-items: flex-start;
`;
