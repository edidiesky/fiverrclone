import React from "react";
import { BiChevronRight } from "react-icons/bi";
import styled from "styled-components";
const list = [
  "USA",
  "Germany",
  "Qatar",
  "Canada",
  "UAE",
  "China",
  "Australia",
  "Saudi Arabia",
  "South Africa",
];

export default function Discover() {
  return (
    <div className="w-100 back-white" style={{ background: "#f4f4f4" }}>
      <DiscoverContainer className="w-80 auto py-10">
        <div className="w-100 flex column gap-3">
          <div className="w-100 hidden">
            <h2
              className="text-extra-bold capitalize"
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="250"
            >
              Helping Customers Get There Desired Passport
            </h2>
          </div>
          <div className="w-100 hidden">
            <p
              className="fs-16 text-dark"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="250"
            >
              Are you looking to obtain or renew your passport? We are here to
              help! Our travel and immigration agency provides comprehensive
              passport services to help you get the passport you need,
              hassle-free.
            </p>
          </div>
          <div className="w-100 hidden">
            <p
              className="fs-16 text-grey"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="450"
            >
              From application assistance to expedited processing, our
              experienced team is dedicated to helping you achieve your passport
              goals. Trust us to be your reliable partner on your passport
              journey, with personalized services tailored to your unique needs.
              Get started today and let us help you get your desired passport to
              any listed country.
            </p>
          </div>
          <div
            className="list flex w-100 item-center gap-2"
            style={{ flexWrap: "wrap" }}
          >
            {list.map((x, index) => {
              return (
                <div
                  className="w-100 hidden"
                  style={{ width: "30%" }}
                  key={index}
                >
                  <h4
                    className="item-center flex gap-2 fs-24 text-dark"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay={index * 300}
                    key={index}
                  >
                    <div className="icon">
                      <BiChevronRight />
                    </div>
                    {x}
                  </h4>
                </div>
              );
            })}
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
            src="/img/Passport/helpingcustomersgettheredesired.jpg"
            alt=""
            className=" "
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="350"
            style={{ width: "100%", objectFit: "cover" }}
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  padding: 15rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  .img-2 {
    height: 100%;
    border-radius: 10px;
    z-index: 80;
    object-fit: cover;
  }
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
  }

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
`;
