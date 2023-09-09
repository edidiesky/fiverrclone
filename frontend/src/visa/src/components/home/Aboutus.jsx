import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

export default function AboutUs() {
  return (
    <AboutUsContent>
      <div className="AboutUsWrapper">
        <div id="aboutus" className="grid w-100 pt-4 mt-5">
          <div className="col-md-10 col-lg-6 mb-5 mb-lg-0">
            <div className="flex1">
              <div className="col-6 hidden">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  src="img/Home/about/pexels-spencer-davis-4353813.jpg"
                  className="w-100 box-shadow-5"
                  alt=""
                />
              </div>
              <div className="col-6 hidden">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                  src="img/Home/about/pexels-luana-freitas-15466072.jpg"
                  className="w-100 box-shadow-5 mb-4"
                  alt=""
                />
                <img
                  data-aos="fade-left"
                  data-aos-duration="1400"
                  data-aos-delay="750"
                  src="img/Home/about/pexels-jopwell-2422293.jpg"
                  className="w-100 box-shadow-5"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-100 flex column gap-2 item-start">
            <div className="w-100 hidden">
              <h3
                data-aos="fade-up"
                data-aos-duration="1000"
                className="fs-20 text-light text-color-primary mb-2 appear-animation"
                data-appear-animation="fadeInUpShorter"
              >
                ABOUT US
              </h3>
            </div>
            <div className="w-100 hidden">
              <h2
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="250"
                className="w-100 font-weight-semibold mb-4 mb-lg-3 mb-xl-4 appear-animation"
              >
                Visa And Immigration Services From Discovery Pass Immigration
                Agency.
              </h2>
            </div>
            <div className="w-100 hidden">
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="450"
                className="text-3-5 pb-1 mb-4 mb-lg-2 mb-xl-4 appear-animation"
              >
                The Most Eminent Visas and Immigration Consultant service
                provider. Branches in Canada and over 27+ countries.{" "}
              </p>
            </div>

            <div className="grid1 pb-2 mb-4 mb-lg-1 mb-xl-4 appear-animation">
              <div className="col-5">
                <div className="flex item-start gap-2">
                  <img
                    width="63"
                    height="63"
                    src="img/demos/business-consulting-3/icons/label.svg"
                    alt=""
                    data-icon
                    data-plugin-options="{'onlySVG': true, 'extraClass': 'd-lg-none d-xl-block'}"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="250"
                  />
                  <div className="w-100 hidden">
                    <span
                      className="flex column item-start fs-16 text-grey"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="250"
                    >
                      <strong className="d-block font-weight-bold fs-40 text-dark">
                        240+
                      </strong>
                      Satisfied Clients
                    </span>
                  </div>   
                </div>
              </div>
              <div className="col-7 w-100 hidden" data-aos-delay="300">
                <p
                  className="mb-0"
                  data-aos="fade-light"
                  data-aos-duration="1000"
                  data-aos-delay="450"
                >
                  Discovery Pass immigration Agency was established with a small
                  idea that was incepted in the minds of its promoters. We
                  skillfully guide applicants for their work permit process to
                  any country they aspire to settle.
                </p>
              </div>
            </div>
            <div className="appear-animation py-3 hidden">
              <Link
                to="/"
                className="btn btn-primary fs-16"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="450"
              >
                <span>Get Link Quote</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AboutUsContent>
  );
}

const AboutUsContent = styled.div`
  width: 100%;
  h2 {
    @media (max-width: 1080px) {
      font-size: 3rem;
    }
  }
  .AboutUsWrapper {
    width: 100%;
    @media (max-width: 780px) {
      width: 90%;
      margin: 0 auto;
    }
    .row {
      @media (max-width: 780px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
  .flex1 {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr;
  }

  .grid1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    @media (max-width: 1100px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
