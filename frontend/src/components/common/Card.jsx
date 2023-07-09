import React, { useState } from "react";
import styled from "styled-components";
import Heart from "./svg/heart";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronLeft, BiChevronRight, BiHeart, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
import Star from "./svg/star";
const CardLoading = () => {
  return (
    <CardLoadingContent className="w-100 flex column gap-1 back-white">
      <div className="top w-100"></div>
      <div className="center w-90 auto flex gap-1 item-center">
        <div className="topCenter skeleton"></div>
        <div className="bottomCenter skeleton"></div>
      </div>
      <div
        className="w-90 auto flex column item-start"
        style={{ gap: ".5rem" }}
      >
        <div className="w-100 h-6 duration1 skeleton"></div>
        <div
          style={{ width: "60%" }}
          className="w-50 h-6 duration2 skeleton"
        ></div>
      </div>{" "}
      <div
        className="w-90 auto flex column item-start"
        style={{ gap: ".5rem" }}
      >
        <div
          style={{ width: "50%" }}
          className="w-100 h-6 duration1 skeleton"
        ></div>
        <div
          style={{ width: "20%" }}
          className="w-50 h-6 duration2 skeleton"
        ></div>
      </div>
    </CardLoadingContent>
  );
};

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
          <CardLoading />
        ) : (
          <Link
            to={`/gigs/${x?._id}`}
            className="w-100 MainCard flex column"
            key={x?._id}
          >
            <div className="w-100 card">
              <img src={x?.image[0]} alt="" className="w-100" />
              {/* <div className="backdrop"></div> */}
            </div>
            <div className="bottom w-100 back-white py-2 flex item-center gap-1">
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
          <CardLoading />
        ) : (
          <CardContent>
            <Link
              to={`/dashboard/create-gig/${x?._id}`}
              className="w-100 cards flex column"
              key={x?.id}
            >
              <div className="detailsImageContainer">
                {/* <div className="icon">
                <Heart />
              </div> */}
                {/* button  */}
                {/* {x?.image?.length >= 2 && (
                <div className="flex">
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
              )} */}

                <div className="detailsImageWrapper">
                  {x?.image?.map((x) => {
                    return (
                      <Link
                        to={`/gigs/${x?._id}`}
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

  return (
    <>
      {gigsIsLoading ? (
        <CardLoading />
      ) : (
        <CardContent>
          <div className="icon">
            <Heart />
          </div>
          <Link
            to={`/gigs/${x?._id}`}
            className="w-100 cards flex column"
            key={x?.id}
          >
            <div className="detailsImageContainer">
              {/* button  */}
              {/* {x?.image?.length >= 2 && (
                <div className="flex">
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
              )} */}

              <div className="detailsImageWrapper">
                {x?.image?.map((x) => {
                  return (
                    <Link
                      to={`/gigs/${x?._id}`}
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

              <div className="w-100 fs-20 text-dark">
                From <span className="fs-20">${x?.price}</span>
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
  /* overflow: hidden; */
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
    height: 20rem;
    width: 100%;
    border-radius: 10px;
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

        height: 100%;
        img {
          position: absolute;
          width: 100%;
          border-radius: inherit;

          height: 100%;
          object-fit: cover;
        }
        .icon {
          position: absolute;
          width: 2.7rem;
          background-color: #fff;
          height: 2.7rem;
          top: 50%;
          border-radius: 50%;
          display: grid;
          place-items: center;
          transition: all 0.4s;
          &.left {
            left: -20%;
          }
          &.right {
            right: -20%;
          }

          svg {
            width: 50%;
            height: 50%;
            color: #333;
          }
        }
        &:hover {
          .icon {
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

const CardLoadingContent = styled.div`
  min-height: 35rem;
  min-width: 100%;
  background-color: #fff;
  .skeleton {
    opacity: 0.7;
    animation: card-loading 1s infinite alternate;
  }
  .top {
    height: 20rem;
    border-radius: 10px;
    opacity: 0.4;
    animation: card-loading 2s infinite alternate;
  }
  .bottomCenter {
    height: 1rem;
    flex: 0.3;
  }
  .h-6 {
    height: 1.5rem;
    border-radius: 5px;
  }
  .topCenter {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }
  .period1 {
    animation-duration: 1.5s;
  }
  .period2 {
    animation-duration: 2s;
  }
  @keyframes card-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 96%);
    }
  }
`;
