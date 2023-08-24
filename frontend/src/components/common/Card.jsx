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
  const [tabindex, setTabIndex] = useState(0);

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

  if (type === "features") {
    return (
      <>
        {gigsIsLoading ? (
          <CardSkeleton />
        ) : (
          <Link
            to={`/gigs/${cardid}`}
            style={{ boxShadow: "var(--shadow)", borderRadius: "5px" }}
            className="w-100 MainCard flex column"
            key={cardid}
          >
            <div className="w-100 card">
              <img src={x?.image[0]} alt="" className="w-100" />
              {/* <div className="backdrop"></div> */}
            </div>
            <div
              style={{
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
              className="bottom w-100 back-white py-2 flex item-center gap-1"
            >
              <img
                src={x?.sellerId?.image}
                alt=""
                className="image"
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50%",
                }}
              />
              <div className="flex column">
                <h4 className="fs-14 family1 text-dark text-extra-bold">
                  {x?.category[0]}
                </h4>
                <h5 className="fs-14 text-light text-grey">
                  by {x?.sellerId?.username}
                </h5>
              </div>
            </div>
          </Link>
        )}
      </>
    );
  }
  if (type === "dashboard") {
    return (
      <>
        {gigsIsLoading ? (
          <CardSkeleton />
        ) : (
          <CardContent>
            <Link
              to={`/dashboard/create-gig/${cardid}`}
              className="w-100 cards flex column"
              key={x?.id}
            >
              <div className="detailsImageContainer">
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
                <div className="flex item-center w-100 justify-space">
                  <div className="flex gap-1 item-center">
                    <img
                      src="./images/johanna-richardson.jpg"
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%",
                      }}
                    />
                    <h5 className="fs-16 text-dark text-bold">Luckyash</h5>
                  </div>
                  <h5 className="fs-16 text-grey text-bold">Luckyash</h5>
                </div>
                <h4 className="desc fs-20 text-dark text-light">
                  {x?.title.substring(0, 44)}....
                </h4>
                <div
                  style={{ gap: ".3rem", padding: ".3rem 0" }}
                  className="w-100 flex text-dark text-bold item-center fs-18"
                >
                  <Star />
                  <span style={{ marginTop: ".3rem" }}>4.9</span>
                  <span
                    style={{ marginTop: ".3rem" }}
                    className="text-grey text-light"
                  >
                    (1K+)
                  </span>
                </div>

                <div className="w-100 flex item-center gap-1 fs-20 text-dark">
                  From
                  <span className="fs-18">${x?.price}</span>
                </div>
              </div>
            </Link>
          </CardContent>
        )}
      </>
    );
  }
  if (type === "profile") {
    return (
      <>
        {gigsIsLoading ? (
          <CardSkeleton />
        ) : (
          <CardContent className="profile">
            <div className="icon">
              <Heart />
            </div>
            <Link
              to={`/gigs/${cardid}`}
              className="w-100 cards profile gap-1 flex column"
              key={x?.id}
            >
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
              <div className="w-85 auto card_center flex column gap-1">
                <div className="flex item-center w-100 justify-space">
                  <div className="flex gap-1 item-center">
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
                </div>
                <h4 style={{fontWeight:"400"}} className="desc fs-18 text-dark text-bold">
                  {x?.title.substring(0, 50)}
                </h4>
                <div
                  style={{ gap: ".3rem", padding: ".3rem 0" }}
                  className="w-100 flex text-dark justify-space text-bold item-center fs-16"
                >
                  <div style={{ gap: ".5rem" }} className="flex item-center">
                    {" "}
                    <FaStar fontSize={"15px"} />
                    <span style={{ marginTop: ".3rem" }}>4.9</span>
                    <span
                      style={{ marginTop: ".3rem" }}
                      className="text-grey text-light"
                    >
                      (1K+)
                    </span>
                  </div>
                  <span className="text-light text-grey">
                    {x?.sellerId?.level}
                  </span>
                </div>

                {/* <div
                  style={{ marginTop: ".6rem" }}
                  className="w-100 fs-18 text-dark"
                >
                  From <span className="fs-18">${x?.price}</span>
                </div> */}
              </div>
              <div className="w-100 card_bottom flex justify-space item-center">
                <div className="w-85 auto flex item-center justify-space">
                  <div
                    style={{ gap: ".5rem" }}
                    className="flex item-center"
                  >
                    <FaHeart fontSize={'20px'} color="var(--grey-1)"/>
                  </div>
                  <div
                    style={{ gap: ".5rem" }}
                    className="flex item-center fs-24 text-bold text-dark"
                  >
                    <span className="fs-12 text-bold text-grey">
                      STARTING AT
                    </span>
                    ${x?.price}
                  </div>
                </div>
              </div>
            </Link>
          </CardContent>
        )}
      </>
    );
  }

  return (
    <>
      {gigsIsLoading ? (
        <CardSkeleton />
      ) : (
        <CardContent>
          <div className="icon">
            <Heart />
          </div>
          <Link
            to={`/gigs/${cardid}`}
            className="w-100 cards gap-1 flex column"
            key={x?.id}
          >
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
            <div className="w-100 flex column py-1 gap">
              <div className="flex item-center w-100 justify-space">
                <div className="flex gap-1 item-center">
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
                <h5 className="fs-16 text-grey text-bold">Luckyash</h5>
              </div>
              <h4 className="desc fs-18 py-1 text-dark text-light">
                {x?.title.substring(0, 44)}....
              </h4>
              <div
                style={{ gap: ".3rem", padding: ".3rem 0" }}
                className="w-100 flex text-dark text-bold item-center fs-18"
              >
                <Star />
                <span style={{ marginTop: ".3rem" }}>4.9</span>
                <span
                  style={{ marginTop: ".3rem" }}
                  className="text-grey text-light"
                >
                  (1K+)
                </span>
              </div>

              <div
                style={{ marginTop: ".6rem" }}
                className="w-100 fs-18 text-dark"
              >
                From <span className="fs-18">${x?.price}</span>
              </div>
            </div>
          </Link>
        </CardContent>
      )}
    </>
  );
}

const CardContent = styled.div`
  width: 100%;
  overflow: hidden;
  &.profile {
  }
  .cards {
    min-height: 34rem;
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
  .detailsImageContainer {
    height: 16rem;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    overflow: hidden;
    grid-gap: 0rem;
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
      left: 4%;
    }
    &.right {
      right: -4%;
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
