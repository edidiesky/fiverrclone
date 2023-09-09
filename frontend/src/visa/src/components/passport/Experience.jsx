import React from "react";
import styled from "styled-components";

export default function Discover() {
  return (
    <div className="w-100 back-white py-10">
      <DiscoverContainer className=" auto py-10">
        <div className="w-100 flex column gap-3">
          <div className="w-100 hidden">
            <h2
              className=" text-extra-bold capitalize"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="250"
            >
              Twenty Years of Experience
            </h2>
          </div>
          <div className="w-100 hidden">
            <p
              className="fs-16 text-dark family1 text-light"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="250"
              style={{ lineHeight: "1.4" }}
            >
              Are you looking for a travel and immigration agency with years of
              experience? Look no further! Our agency has been providing expert
              assistance for two decades, helping thousands of clients achieve
              their travel and immigration goals. Our team of experienced
              professionals is dedicated to providing personalized services
              tailored to your unique needs. Whether you need help with visa
              processing, passport services, immigration law, or customs
              clearance, we are here to help. Trust us to be your reliable
              partner on your travel and immigration journey, backed by our
              twenty years of experience.
            </p>
          </div>
          <div className="w-100 hidden">
            <p
              className="fs-16 text-dark family1 text-light"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="450"
              style={{ lineHeight: "1.7" }}
            >
              Are you looking to obtain or renew your passport? We are here to
              help! Our travel and immigration agency provides comprehensive
              passport services to help you get the passport you need,
              hassle-free. From application assistance to expedited processing,
              our experienced team is dedicated to helping you achieve your
              passport goals. Trust us to be your reliable partner on your
              passport journey, with personalized services tailored to your
              unique needs. Get started today and let us help you get your
              desired passport to any listed country.
            </p>
          </div>
        </div>
        <div
          className="w-100"
          style={{
            minHeight: "40rem",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/img/Passport/experience.jpg"
            alt=""
            className="img-2"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="350"
          />
        </div>
      </DiscoverContainer>
    </div>
  );
}

const DiscoverContainer = styled.div`
  display: grid;
  grid-template-columns: 40vw 1fr;
  grid-gap: 5rem;
  place-items: center;
  width: 90%;
  .img-2 {
    height: 100%;
    border-radius: 10px;
    width: 100%;
    z-index: 80;
    object-fit: cover;
  }
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
  }
`;
