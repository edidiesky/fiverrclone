import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function HeroIndex() {
  return (
    <>
      <HeroIndexContent>
        <img
          src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/76e89842118995cfef742b0d9eab0707-1674662995485/bg-hero-6-900-x2.png"
          alt=""
          className="w-100 image"
        />
        <div className="w-90 auto">
          <div className="w-100 flex header column gap-2">
            <h2 className="fs-40 text-white">
              Find the perfect <span className="span1">freelance</span> services
              for your business
            </h2>
            <form className={"w-100 py-2"}>
              <div className="w-100 h-100 item-center formWrapper flex">
                <BiSearch className="fs-24 text-grey" />
                <input
                  type="text"
                  placeholder="Try Graphic Designer"
                  className="input"
                />
              </div>
              <div className="button fs-20 text-bold text-white flex item-center justify-center">
                Search
              </div>
            </form>
            <div
              className="w-100 flex item-center gap-1 text-white fs-16 family1 text-white"
              style={{ flexWrap: "wrap" }}
            >
              Popular:{" "}
              <Link
                to={"/categories/graphics-design/Website Design"}
                className="links fs-12 family1"
              >
                Website Design
              </Link>
              <Link
                to={"/categories/programming-tech/WordPress"}
                className="links fs-12 family1"
              >
                WordPress
              </Link>
              <Link
                to={"/categories/cp/ai-services"}
                className="links fs-12 family1"
              >
                AI Services
              </Link>
              <Link
                to={"/categories/graphics-design/Logo Design"}
                className="links fs-12 family1"
              >
                Logo Design
              </Link>
            </div>
          </div>
        </div>
      </HeroIndexContent>
      <div
        className="bottom w-100 flex gap-3 py-3 item-center justify-center"
        style={{
          background: "var(--light-grey)",
          padding: "2rem 0",
          flexWrap: "wrap",
        }}
      >
        <div className="fs-20 text-grey2">Trusted by :</div>
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta2x.b364aec.png"
          alt=""
          style={{ height: "6rem" }}
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google2x.4fa6c20.png"
          alt=""
          style={{ height: "6rem" }}
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix2x.6b36ad6.png"
          alt=""
          style={{ height: "6rem" }}
        />

        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg2x.0d06f7b.png"
          alt=""
          style={{ height: "6rem" }}
        />
        <img
          src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal2x.d2fa54d.png"
          alt=""
          style={{ height: "6rem" }}
        />
      </div>
    </>
  );
}

const HeroIndexContent = styled.div`
  padding: 6rem 0;
  min-height: 80rem;
  position: relative;
  display: flex;
  place-items: center;
  .links {
    padding: 0.6rem 1.4rem;
    text-align: center;
    border: 1px solid #fff;
    border-radius: 30px;
    &:hover {
      background-color: #fff;
      color: var(--dark-1);
    }
  }
  .image {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .header {
    position: relative;
    z-index: 4000;
    width: 50%;
    @media (max-width: 780px) {
      width: 80%;
    }
  }
  .span1 {
    font-style: italic;
    font-family: serif;
  }
  h2 {
    font-size: 5rem;
    font-weight: 700;
    font-family: "Roboto Condensed", sans-serif;
  }
  form {
    height: 5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    transition: all 0.5s;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    &.active {
      display: none;
    }
    .formWrapper {
      height: 100%;
      width: 100%;
      padding: 0 2rem;
      .input {
        width: 100%;
        height: 100%;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
      }
    }

    .button {
      height: 5rem;
      background: var(--green);
      color: #fff;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      svg {
        font-size: 24px;
      }
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
