import React from "react";
import styled from "styled-components";
import Accordion from "../common/accordion";

export default function Faq() {
  return (
    <FaqContent>
      <div className="container flex column gap-2 justify-center item-center w-100 py-8">
        <div className="w-100 center hidden">
          <h2
            className="text-bold relative center"
            data-aos="fade-up"
            data-aos-duration="1100"
            data-aos-delay="200"
          >
            Frequently Asked Questions
            <div className="w-100 hidden">
              <span
                className="block fs-16 pt-3 text-light text-grey w-100 auto family1 "
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="350"
              >
                Our client's most frequent asked questions
              </span>
            </div>
          </h2>
        </div>
        <div className="w-100 accCard py-3">
          <div className="w-100">
            <Accordion />
          </div>
        </div>
      </div>
    </FaqContent>
  );
}

const FaqContent = styled.div`
  width: 100%;
  background-color: #f7f7f7;
  .container {
    width: 90%;
  }
  button {
    padding: 1.5rem 2rem;
  }
  .accCard {
    display: grid;
    grid-template-columns: 1fr ;
    grid-gap: 4rem;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
`;
