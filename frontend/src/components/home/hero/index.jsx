import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

const heroBackgroundData = [
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616487/jenny-2x.jpg",
    author: "Jenny",
    role: "Creative assistant",
  },
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616493/colin-2x.jpg",
    author: "Colin",
    role: "Product Assistant",
  },
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616493/jordan-2x.jpg",
    author: "Scarlet",
    role: "Product Assistant",
  },
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616497/christina-2x.jpg",
    author: "christina",
    role: "Product Assistant",
  },
];

export default function HeroIndex() {
  const [tabindex, setTabIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTabIndex(tabindex === 3 ? 0 : tabindex + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, [setTabIndex, tabindex]);

  return (
    <>
      <div className="content2 w-100">
        <HeroIndexContent className="content2">
          <div className="w-85 auto">
            <div className="w-100 auto justify-center item-center flex column gap-2">
              <h2 className="fs-40 text-white text-start">
                Find the right <span className="span1">freelance</span> service
                right away
              </h2>
              <form className={"w-100 forms py-2 flex column gap-2"}>
                <div className="w-100 h-100 item-center formWrapper flex">
                  <input
                    type="text"
                    placeholder="Search for any service"
                    className="input fs-16"
                  />
                </div>
                <div className="buttons w-100 fs-20 text-bold text-white flex item-center justify-center">
                  <BiSearch className="fs-24 text-white" />
                </div>
              </form>
            </div>
          </div>
        </HeroIndexContent>
      </div>
      <div className="w-100 content1">
        <HeroIndexContent className="content1">
          <div style={{ position: "absolute" }} className="w-100 h-100">
            {heroBackgroundData.map((x, index) => {
              return (
                <img
                  key={index}
                  src={x.backgroundImage}
                  alt=""
                  className={index === tabindex ? "images active" : "images"}
                />
              );
            })}
          </div>
          <div className="w-90 auto">
            <div className="w-100 flex header column gap-2">
              <h2 className="fs-40 text-white">
                Find the right <span className="span1">freelance</span> service
                right away
              </h2>
              <form className={"w-100 form py-2"}>
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
                className="w-100 flex item-center gap-1 text-white fs-20 family1 text-white"
                style={{ flexWrap: "wrap" }}
              >
                Popular:{" "}
                <Link
                  to={"/categories/graphics-design/Website Design"}
                  className="links fs-16 family1"
                >
                  Website Design
                </Link>
                <Link
                  to={"/categories/programming-tech/WordPress"}
                  className="links fs-16 family1"
                >
                  WordPress
                </Link>
                <Link
                  to={"/categories/cp/ai-services"}
                  className="links fs-16 family1"
                >
                  AI Services
                </Link>
                <Link
                  to={"/categories/graphics-design/Logo Design"}
                  className="links fs-16 family1"
                >
                  Logo Design
                </Link>
              </div>
            </div>
          </div>
        </HeroIndexContent>
        <HeroBottomIndexContent
          className="bottoms w-100 flex py-3 item-center justify-center"
          style={{
            background: "var(--light-grey)",
            padding: "2rem 0",
            flexWrap: "wrap",
          }}
        >
          <div className="fs-24 text-grey2">Trusted by :</div>
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
        </HeroBottomIndexContent>
      </div>
    </>
  );
}

const HeroBottomIndexContent = styled.div`
  gap: 2.5rem;
  @media (max-width: 480px) {
    gap: 1.3rem;
  }
`;
const HeroIndexContent = styled.div`
  padding: 25rem 0;
  min-height: 100%;
  position: relative;
  display: flex;
  /* height: 50vh; */
  @media (max-width: 880px) {
    padding: 20rem 0;
  }
  place-items: center;

  .buttons {
    background-color: #1dbf73 !important;
    height: 6rem;
    padding: 1.5rem 2rem;
  }
  &.content2 {
    background-color: #0a4226;
    .forms {
      padding: 0;
      background-color: transparent;

      .formWrapper {
        width: 100%;
        padding: 0;
        input {
          width: 100%;
          padding: 0;
          height: 6rem;
          padding: 0 2rem;
          border-radius: 4px !important;
        }
      }
      .buttons {
        background-color: #1dbf73 !important;
        height: 6rem;
      }
    }
  }
  @media (max-width: 780px) {
    &.content1 {
      display: none;
    }
  }
  @media (min-width: 780px) {
    &.content2 {
      display: none;
    }
  }
  .images {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: all 1s ease;
    &.active {
      opacity: 1;
    }
  }
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
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .header {
    position: relative;
    z-index: 4000;
    width: 50%;
    @media (max-width: 980px) {
      width: 70%;
    }
  }
  .span1 {
    font-style: italic;
    font-family: serif;
  }
  h2 {
    font-size: 5rem;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    @media (max-width: 980px) {
      font-size: 4.8rem;
      line-height: 1.1;
    }
    @media (max-width: 480px) {
      font-size: 4.5rem;
      line-height: 1.1;
    }
  }
  .form {
    width: 100%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    height: 5rem;
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
  .bottoms {
    
  }
`;
