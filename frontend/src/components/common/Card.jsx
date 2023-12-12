import React, { useState } from "react";
import styled from "styled-components";
import Heart from "./svg/heart";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronLeft, BiChevronRight, BiHeart, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import Star from "./svg/star";
import CardSkeleton from "./cardskeleton";
import { FaHeart, FaStar } from "react-icons/fa";

export default function Card({ x, index, type }) {
  const { gigsIsError, gigsIsLoading } = useSelector((store) => store.gigs);
  const [tabindex, setTabIndex] = useState(-1);

  // const gigsIsLoading = true;

  const handleImagePosition = (position) => {
    if (position === "left") {
      setTabIndex(tabindex < 0 ? x?.image?.length - 1 : tabindex - 1);
    }
    if (position === "right") {
      setTabIndex(tabindex >= x?.image?.length - 1 ? 0 : tabindex + 1);
    }
  };
  const cardid = x?._id;

  return (
    <CardContent>
      <div className="icon">
        <Heart />
      </div>

      <Link
        to={`/gigs/${cardid}`}
        className="w-100 cards gap-1 flex  column"
        key={x?.id}
      >
        <div style={{ zIndex: "300" }} className="w-100 abolute hidden">
          {x?.image?.length >= 2 && (
            <div className="flex  hidden">
              {tabindex > 0 && (
                <div
                  className="btnArrow shadow left"
                  onClick={() => handleImagePosition("left")}
                >
                  <BiChevronLeft />
                </div>
              )}
              <div
                className="btnArrow shadow right"
                onClick={() => handleImagePosition("right")}
              >
                <BiChevronRight />
              </div>
            </div>
          )}
        </div>

        <div
          style={{ gap: "5px" }}
          className="custom_nav_wrapper flex  item-center justify-center"
        >
          {new Array(x?.image?.length).fill("").map((x, index) => {
            const active = tabindex === index;
            return (
              <div
                key={index}
                className={active ? "cutom_nav active" : "cutom_nav"}
              ></div>
            );
          })}
        </div>
        <div className="detailsImageContainer">
          {/* button  */}

          <div className="detailsImageWrapper">
            {x?.image?.map((x) => {
              return (
                <Link
                  to={`/gigs/${cardid}`}
                  style={{ transform: `translateX(-${tabindex * 100}%)` }}
                  className="w-100 card"
                >
                  <img src={x} alt="" className="w-100" />
                  <div className="backdrop"></div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-100 flex column py-1 gap-1">
          <div style={{ gap: ".6rem" }} className="flex w-100 column">
            <div className="flex  item-center w-100 justify-space">
              <div className="flex  gap-1 item-center">
                <img
                  src={x?.sellerId?.image}
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                  }}
                />
                <h5 className="fs-16 text-dark text-bold">
                  {x?.sellerId?.username}
                </h5>
              </div>
              <h5 className="fs-16 text-grey text-bold">
                {x?.sellerId?.level}
              </h5>
            </div>
            <h4
              style={{ fontSize: "1.6rem" }}
              className="desc text-grey text-bold"
            >
              {x?.title.substring(0, 50)}
            </h4>
            <div
              style={{ gap: ".2rem", padding: ".3rem 0", fontSize: "1.6rem" }}
              className="w-100 flex  text-dark text-bold item-center"
            >
              <Star />
              <span style={{ marginTop: ".1rem" }}>4.9</span>
              <span
                style={{ marginTop: ".3rem" }}
                className="text-grey text-light"
              >
                (1K+)
              </span>
            </div>

            <div
              style={{ marginTop: ".4rem", fontSize: "1.6rem" }}
              className="w-100 text-dark"
            >
              From <span className="">${x?.price}</span>
            </div>
          </div>
        </div>
      </Link>
    </CardContent>
  );
}

const CardContent = styled.div`
  width: 100%;
  overflow: hidden;
  &.profile {
  }
  .MainCard {
    min-height: 30rem;
    @media (max-width: 480px) {
      min-height: 50rem;
    }
    .card {
      height: 100%;
    }
  }
  .cards {
    min-height: 34rem;
    overflow: hidden;

    position: relative;
    &:hover {
      .btnArrow {
        &.right {
          right: 4%;
        }
      }
    }
    &.profile {
      border: 1px solid #e4e5e7;
      background-color: #fff;
      .detailsImageContainer {
        border-radius: none !important;
        .detailsImageWrapper {
          .card {
          }
        }
      }
      .card_center {
        /* background-color: red; */
        padding: 1rem 0;

        .desc {
          word-wrap: break-word;
          word-break: break-word;
        }
      }
      .card_bottom {
        border-top: 1px solid #e4e5e7;
        padding: 1rem 0;
      }
    }
  }
  .hidden {
    overflow: hidden;
  }
  &:hover {
    .desc {
      color: var(--green);
    }
  }
  .icon {
    position: absolute;
    top: 5%;
    right: 5%;
    z-index: 3000;
  }
  .custom_nav_wrapper {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -5%);
    z-index: 300;
    .cutom_nav {
      height: 0.5rem;
      width: 0.5rem;
      z-index: 200;
      border-radius: 50%;
      background-color: #cfcfcf;
      @media (max-width: 580px) {
        height: 0.3rem;
        width: 0.3rem;
      }
      &:nth-child(5) {
        transform: scale(0.7);
      }
      &:nth-child(4) {
        transform: scale(0.8);
      }

      &.active {
        background-color: #fff;
        &:nth-child(5) {
          transform: scale(1);
        }
        &:nth-child(4) {
          transform: scale(1);
        }
      }
    }
  }
  .detailsImageContainer {
    height: 16rem;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    overflow: hidden;
    grid-gap: 0rem;
    border-radius: 10px;
    &.profile {
      border-radius: 0px;
    }
    @media (max-width: 780px) {
      height: 25rem;
    }
    .detailsImageWrapper {
      position: absolute;
      transition: all 0.6s ease-in-out;
      width: 100%;
      border-radius: inherit;
      height: 100%;
      .card {
        position: absolute;
        border-radius: inherit;
        width: 100%;
        transition: all 0.4s ease-in-out;

        height: 100%;
        img {
          position: absolute;
          width: 100%;
          border-radius: inherit;

          height: 100%;
          object-fit: cover;
        }

        &:hover {
          .btnArrow {
            &.left {
              left: -8px;
            }
            &.right {
              right: -8px;
            }
          }
          .desc {
            color: var(--yellow);
          }
          .backdrop {
            background-color: rgba(255, 255, 255, 0.05);
          }
        }
        .backdrop {
          background-color: rgba(0, 0, 0, 0.2);
          position: absolute;
          transition: all 0.4s;
          width: 100%;
          height: 100%;
          border-radius: inherit;
        }
      }
    }
  }
  .btnArrow {
    position: absolute;
    width: 3rem;
    background-color: #fff;
    height: 3rem;
    top: 25%;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: all 0.4s;
    border: 1px solid rgba(0, 0, 0, 0.2);
    z-index: 3000;
    &.left {
      left: -20%;
    }
    &.right {
      right: -40%;
    }

    svg {
      font-size: 20px;
      color: #333;
    }
  }

  .px-2 {
    padding: 0.8rem 1.6rem;
  }

  .border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .bottom {
    padding: 1rem 1.5rem;
    background-color: #fff;
  }
  .text-secondary {
    color: var(--yellow);
  }
`;
