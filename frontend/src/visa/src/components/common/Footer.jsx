import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaCcPaypal,
  FaCcStripe,
  FaCcApplePay,
  FaCcVisa,
  FaPhoneVolume,
  FaPhoneAlt,
  FaAt,
} from "react-icons/fa";

const iconsListData = [
  { id: 1, icon: <FaCcVisa /> },
  { id: 2, icon: <FaCcPaypal /> },
  { id: 3, icon: <FaCcStripe /> },
  { id: 4, icon: <FaCcApplePay /> },
];

const data = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "Project", path: "" },
  { id: 3, title: "Company", path: "" },
  { id: 4, title: "Blog", path: "" },
  { id: 5, title: "Services", path: "" },
  { id: 6, title: "Contact", path: "" },
];

const list = [
  "Coronavirus (COVID-19)",
  "FAQs",
  "About DiscoveryPass.com",
  "Customer Service",
  " Help",
  "Partner help",
  "Careers",
  "Sustainability",
  "Press Center",
  "Safety Resource Center",
  "Investor relations",
  "Terms & Conditions",
  "Partner dispute",
  "How We Work",
  "Privacy & cookie statement",
  "MSA statement",
  "Corporate contact",
];

export default function Footer() {
  return (
    <FooterContainer>
      <div className="footerWrapper w-90 auto">
        <div className="footertop w-90 auto flex item-center justify-space">
          <h2 className="text-white">
            Get Notified by our latest update
            <span className="block text-grey fs-20 py-1 family1">
              Stay up to date with the latest news and update
            </span>
          </h2>
          <div className="form flex item-center">
            <input type="text" placeholder="Enter your email" />
            <div className="submitBtn fs-18 flex item-center justify-center text-white">
              Subscribe
            </div>
          </div>
        </div>
        <div className="footerBottom w-90 auto flex item-start gap-4">
          <h3 className="fs-30 text-white">
            DiscoveryPass
            <span className=" text-grey capitalize text-light family1 block">
              Discovery Pass immigration Agency was established with a small
              idea that was incepted in the minds of its promoters. We
              skillfully guide applicants for their work permit process to any
              country they aspire to settle.
            </span>
          </h3>
          <div className="w-100 wrapper">
            <ul className="flex column gap-1 fs-16 text-light text-grey">
              {list.map((x, index) => {
                return <li key={index}>{x}</li>;
              })}
            </ul>{" "}
            <ul className="flex column gap-1 fs-16 text-light text-grey">
              {list.slice(0,5).map((x, index) => {
                return <li key={index}>{x}</li>;
              })}
            </ul>{" "}
            <ul className="flex column gap-1 fs-16 text-light text-grey">
              {list.slice(0,8).map((x, index) => {
                return <li key={index}>{x}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="footerCenter w-100">
          <div className="w-90 auto footertop flex item-center justify-space">
            <h4 className="fs-12 family1 text-grey text-bold">
              @copyright 2023 DiscoveryPass, All rights reserved
            </h4>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  padding-top: 15rem;
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--dark-1);
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-gap: 4rem;
  }
  .footerCenter {
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .form {
    height: 6rem;
    width: 400px;
    @media (max-width: 780px) {
      height: 7rem;
    }
    .submitBtn {
      background-color: var(--green);
      height: 100%;
      padding: 0 2rem;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      @media (max-width: 780px) {
        height: 7rem;
        align-items: center;
        justify-content: center;
        font-size: 18px;
      }
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      padding: 0 2rem;
      font-family: inherit;
      font-size: 20px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
  }
  h3 {
    width: 50%;
    span {
      margin-top: 1rem;
      font-size: 14px;
    }
  }
  .footerBottom {
    padding-top: 5rem;
  } .footertop,
  .footerBottom {
    @media (max-width: 780px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 4rem;
    }
  }
  .footerWrapper {
    display: flex;
    flex-direction: column;
    gap: 10rem;
    position: relative;
    z-index: 500;
    align-items: center;
  }
`;
