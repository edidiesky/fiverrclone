import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const serviceData = [
  {
    id: 1,
    title: "Visa processing",
    image: "img/Home/action/Businessvisa.jpg",
    desc: "Streamline your visa application process with our expert assistance.",
  },
  {
    id: 2,
    title: "Passport services",
    image: "img/Home/action/Greencard.jpg",
    desc: "Obtain or renew your passport with ease and convenience.",
  },
  {
    id: 3,
    title: "Immigration law",
    image: "img/Home/action/privatefight.jpg",
    desc: "Navigate complex immigration laws with our experienced attorneys.    ",
  },
  {
    id: 4,
    title: "Travel advisories",
    image: "img/Home/action/studentvisa.jpg",
    desc: "Stay informed about potential travel risks and disruptions.",
  },
  {
    id: 5,
    title: "Citizenship application",
    image: "img/Home/action/workpermit.jpg",
    desc: "Achieve your dream of citizenship with our comprehensive support.",
  },
  {
    id: 6,
    title: "Customs clearance",
    image: "img/Home/action/workpermit.jpg",
    desc: "Facilitate your customs clearance and avoid delays with our guidance.    ",
  },
];

export default function Services() {
  return (
    <ServicesContent>
      <div className="container flex column gap-6 item-center">
        <div className="text-center">
          <div className="w-100 hidden">
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="250"
              className="letter-spacing"
            >
              WHAT WE DO
            </h3>
          </div>
          <div className="w-100 hidden">
            <h2
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
              className="fs-24 mb-3 pb-1 appear-animation"
            >
              Our Premium Services
            </h2>
          </div>
          <div className="w-100 hidden center">
            <p
              data-aos="fade-up"
              className="center w-100"
              data-aos-duration="1000"
              data-aos-delay="750"
            >
              We Provide Experts, Create Great Value For Visa Categories{" "}
            </p>
          </div>
        </div>
        <div className="rows">
          {serviceData.map((x, index) => {
            return (
              <div
                className=""
                key={x.id}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 300}
              >
                <Link
                  to="/travels"
                  className="custom-link-hover-effects text-decoration-none"
                  data-cursor-effect-hover="plus"
                >
                  <div className="card box-shadow-4">
                    <div className="card-img-top position-relative">
                      <div className="overlay-show" style={{zIndex:"400" }}></div>
                      <div className="Content1">
                        <h4 style={{letterSpacing:".6px"}} className="font-weight-semibold text-color-light text-6 mb-1">
                          {x.title}
                        </h4>
                        <div className="custom-crooked-line">
                          <img
                            width="154"
                            height="26"
                            src="img/demos/business-consulting-3/icons/infinite-crooked-line.svg"
                            alt=""
                            data-icon
                            data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                            style={{ width: "150px", zIndex:"400" }}
                          />
                        </div>
                      </div>
                      <img src={x.image} alt="Card Image" className="CardImage w-100" />
                    </div>
                    <div className="text-color-light card-body px-4 d-flex">
                      <p className="card-text fs-12 text-bold w-100 mb-0">
                        {x.desc}
                      </p>
                      <img
                        width="50"
                        height="50"
                        className="w-auto"
                        src="img/demos/business-consulting-3/icons/arrow-right.svg"
                        alt=""
                        data-icon
                        data-plugin-options="{'onlySVG': true, 'extraClass': 'svg-fill-color-primary'}"
                        style={{ width: "50px" }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col text-center">
            <Link
              to="/travels"
              className="btn btn-primary fs-16"
              data-cursor-effect-hover="plus"
              data-cursor-effect-hover-color="light"
            >
              <span className="fs-16 span">All Services</span>
            </Link>
          </div>
        </div>
      </div>
    </ServicesContent>
  );
}

const ServicesContent = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  padding: 12rem 0;
  .span {
    font-size: 13px;
  }
  h4 {
    font-size: 20px;
  }
  .card-img-top {
    height: 20rem;
    position: relative;
    .Content1{
      position: absolute;
      bottom: 0;
      z-index: 400;
      left: 5%;
    }
    .CardImage {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 20;
    }
  }

  .rows {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-gap: 2rem;
    grid-row-gap: 5rem;
  }
  .text-center {
    h3 {
      font-size: 2.5rem;
      text-transform: uppercase;
      color: var(--green);
    }
    h2 {
      font-size: 5rem;
    }
  }
`;
