import React from "react";
import { FaClock } from "react-icons/fa";
import styled from "styled-components";
import Banner3 from "./Banner3";
export default function ContactIndex() {
  return (
    <ContactIndexWrapper>
      <Banner3 />
      <div className="grid">
        <div className="contactLeft">
          <h4 className="fs-30 font-weight-bold">
            Contact Us
            <span className="d-block family1 fs-16 text-light">
              Feel free to ask for details, don't save any questions!
            </span>
          </h4>
          <div className="contactFormRightWrapper">
            <div className="contactForm">
              <label htmlFor="firstname" className="searchLabel">
                FulL Name
                <input
                  placeholder="FulL Name"
                  type="text"
                  className="search"
                  id="firstname"
                />
              </label>
              <label htmlFor="lastname" className="searchLabel">
                Email Address
                <input
                  placeholder="Email Address"
                  type="text"
                  className="search"
                  id="lastname"
                />
              </label>
            </div>
            <label htmlFor="inquiry" className="searchLabel">
              Subject
              <input
                placeholder="Your Subject Request"
                type="text"
                className="search"
                id="inquiry"
              />
            </label>
            <label htmlFor="inquiry" className="searchLabel">
              Subject
              <textarea
                placeholder="Your Subject Request"
                type="text"
                className="searchArea"
                id="inquiry"
              />
            </label>
            <button className="btn py-1 px-3 fs-14">Send Message</button>
          </div>
        </div>
        <div className="contactRight flex column gap-4">
          <h5 className="fs-26 font-weight-bold text-blue">
            Get in Touch
            <span className="d-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget leo at velit imperdiet varius. In eu ipsum vitae velit congue
              iaculis vitae at risus.
            </span>
            <span className="d-block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eget leo at velit imperdiet varius. In eu ipsum vitae velit congue
              iaculis vitae at risus.
            </span>
          </h5>
          <div className="w-100 flex column gap-2">
            <h5 className="fs-26 font-weight-bold text-blue">Our Office</h5>
            <div className="flex column gap-3">
              <div className="flex fs-14 item-center gap-1">
                <FaClock style={{ color: "var(--blue-2)", fontSize: "2rem" }} />{" "}
                <strong>Location:</strong> 1234 Street Name, City Name, United
                States
              </div>
              <div className="flex fs-14 item-center gap-1">
                <FaClock style={{ color: "var(--blue-2)", fontSize: "2rem" }} />{" "}
                <strong>Phone:</strong> 1(123) 456-789
              </div>
              <div className="flex fs-14 item-center gap-1">
                <FaClock style={{ color: "var(--blue-2)", fontSize: "2rem" }} />{" "}
                <strong>Email:</strong> [email-protected]
              </div>
            </div>
          </div>

          <div className="w-100 flex column gap-3">
            <h5 className="fs-26 font-weight-bold text-blue">Business Hours</h5>
            <div className="flex column gap-3">
              <div className="flex fs-14 item-center gap-1">
                <FaClock style={{ color: "var(--blue-2)", fontSize: "2rem" }} />{" "}
                Monday - Friday - 9am to 5pm
              </div>
              <div className="flex fs-14 item-center gap-1">
                <FaClock style={{ color: "var(--blue-2)", fontSize: "2rem" }} />{" "}
                Saturday - 9am to 2pm
              </div>
              <div className="flex fs-14 item-center gap-1">
                <FaClock style={{ color: "var(--blue-2)", fontSize: "2rem" }} />{" "}
                Sunday - Closed
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactIndexWrapper>
  );
}

const ContactIndexWrapper = styled.div`
  .grid {
    padding: 6rem 0;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 30vw;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
  .contactRight {
    h5 {
      span {
        font-size: 1.8rem;
        font-weight: 400;
        color: var(--grey-1);
        padding-top: 1.5rem;
      }
    }
  }
  .contactLeft {
    h4 {
      span {
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--grey-1);
        padding-top: 1.5rem;
      }
    }
    .contactFormRightWrapper {
      width: 90%;
      padding: 2rem 0;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      @media (max-width: 780px) {
        width: 100%;
      }
      .contactForm {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap: 1rem;
      }
      .searchLabel {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        font-size: 1.6rem;
        font-weight: 600;
        color: var(--dark-1);

        .searchArea {
          height: 15rem;
          border: none;
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 1.4rem 3rem;
          font-size: 1.6rem;
          transition: all 0.2s;
          font-family: "Montserrat", sans-serif;
          color: var(--dark-1);
          border-radius: 8px;
          &:focus {
            border: 1.5px solid rgba(0, 0, 0, 0.6);
          }
        }
        .search {
          border: none;
          outline: none;
          border: 1px solid rgba(0, 0, 0, 0.1);
          padding: 2rem 3rem;
          font-size: 1.6rem;
          transition: all 0.2s;
          border-radius: 8px;

          &:focus {
            border: 1.5px solid rgba(0, 0, 0, 0.6);
          }
        }
      }
      .btn {
        padding: 1.6rem 2rem;
        @media (max-width: 480px) {
          padding: 1.8rem 2.3rem;
        }
        cursor: pointer;
        font-size: 1.6rem;
        font-weight: 600;
        color: #fff;
        background: var(--blue-2);
        text-transform: uppercase;
        transition: all 0.3s;
        border: 2px solid var(--blue-2);
      }
    }
  }
`;
