import React from "react";
import styled from "styled-components";

export default function Partners() {
  return (
    <PartnersContent>
      <div className="container">
        <div className="w-100 hidden">
          <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
            Our Global Partners
          </h2>
        </div>

        <div className="row">
          <div className="blog-post-image-wrapper hidden">
            <img
              src="/img/student_2.jpg"
              alt=""
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="250"
              className="w-100 imgs mb-4"
            />
          </div>
          <div className="rowLeft flex column gap-1">
            <div className="w-100 hidden">
              <h4
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
                className="fs-40"
              >
                {" "}
                Global Opportunities
              </h4>
            </div>

            <div className="w-100 hidden">
              <p
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="450"
                className="fs-16 text-dark text-light"
              >
                Are you dreaming of traveling the world or immigrating to a new
                country? We are here to help! Our expert team provides a
                comprehensive range of travel and immigration services to make
                your journey hassle-free. From visa processing to passport
                services, immigration law to customs clearance, we have got you
                covered. With our assistance, you can explore the world with
                confidence and peace of mind. Trust us to be your reliable
                partner on your travel and immigration journey.
              </p>
            </div>

            <hr className="solid1"></hr>
            <div className="post-infos d-flex"></div>
          </div>
        </div>
      </div>
    </PartnersContent>
  );
}

const PartnersContent = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15rem 0;
  .imgs {
    width: 100%;
    height: 30rem;
  }
  .rowLeft {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 100%;
    align-items: flex-start;
    h2 {
      font-weight: 400;
      color: var(--grey-1);
    }
  }
`;
