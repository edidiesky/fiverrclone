import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom'

export default function Discover() {
  return (
    <div className="w-100 back-white py-10">
      <DiscoverContainer className="w-80 auto py-10">
        <div className="w-100 flex column gap-2">
          <div className="w-100 hidden">
            <h4
              className="fs-24 text-extra-bold text-dark"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="350"
            >
              Discovery Pass
              <span className="block pt-1 family1 fs-16 text-grey text-light">
                We Make The Visa Process Faster
              </span>
            </h4>
          </div>
          <div className="w-100 hidden">
            <h2
              className=" capitalize"
              data-aos="fade-up"
              data-aos-duration="1400"
              data-aos-delay="250"
            >
              TOP RANKED UNIVERSITIES CANBERRA, SYDNEY, ADELAIDE, GOLD COAST,
              BRISBANE, DARWIN, MELBOURNE, PERTH
            </h2>
          </div>

          <div className="w-100 hidden">
            <Link
            to={'/visa'}
              className="btn-3 fs-16 text-green text-bold py-1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="750"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div
          className="w-100"
          style={{
            minHeight: "60rem",
            background: "#f5f5f5",
            position: "relative",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            style={{
              width: "300px",
              height: "160px",
              position: "absolute",
              borderRadius: "10px",
              bottom: "0%",
              right: "-10%",
              zIndex: "40",
            }}
          >
            <defs>
              ,
              <pattern
                id="dots"
                x="0"
                y="0"
                width="18"
                height="18"
                patternUnits="userSpaceOnUse"
              >
                <circle fill="#0088cc" cx="1.5" cy="1.5" r="1.5"></circle>
              </pattern>
            </defs>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#dots)"
            ></rect>
          </svg>
          <img
            src="img/Home/discover/library-1400313_1280.jpg"
            alt=""
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="500"
            style={{
              width: "220px",
              position: "absolute",
              borderRadius: "10px",
              top: "30%",
              left: "3%",
              zIndex: "100",
            }}
          />
          <img
            src="img/Home/discover/people-6027028_1920.jpg"
            alt=""
            className="img-2"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="750"
          />
        </div>
      </DiscoverContainer>
    </div>
  );
}

const DiscoverContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 32vw 1fr;
  grid-gap: 3rem;
  padding-bottom: 10rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  .img-2 {
    width: 80%;
    border-radius: 10px;
    height: 90%;
    z-index: 80;
  }
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
  }
`;
