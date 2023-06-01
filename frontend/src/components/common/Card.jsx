import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { BiChevronLeft, BiChevronRight, BiHeart, BiStar } from "react-icons/bi";
import { Link } from "react-router-dom";
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
        <div className="w-50 h-6 duration2 skeleton"></div>
      </div>
    </CardLoadingContent>
  );
};

export default function Card({ x, index, type }) {
  const { gigsIsError, gigsIsLoading } = useSelector((store) => store.gigs);
  // const gigsIsLoading = true;
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

  return (
    <>
      {gigsIsLoading ? (
        <CardLoading />
      ) : (
        <CardContent>
          <Link
            to={`/gigs/${x?._id}`}
            className="w-100 cards flex column"
            key={x?.id}
          >
            <div className="w-100 card">
              <img src={x?.image[0]} alt="" className="w-100" />
              <div className="backdrop"></div>
              <div className="icon left">
                <BiChevronLeft />
              </div>
              <div className="icon right">
                <BiChevronRight />
              </div>
            </div>
            <div className="bottom w-100 back-white py-2 flex item-center gap-1">
              <img
                src={x?.sellerId?.image}
                alt=""
                className="images"
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                }}
              />
              <div className="flex column">
                <Link
                  to={"/"}
                  className="fs-16 a family1 text-extra-bold text-dark"
                >
                  {x?.sellerId?.username}
                </Link>
                <h4 className="fs-14 text-grey text-light">{x?.sellerId?.level}</h4>
              </div>
            </div>
            <p className="bottom desc w-90 fs-18 text-dark text-light">
              {x?.title.substring(0, 44)}....
            </p>
            <div className="w-100 border gap-1 flex text-grey2 family1 px-2 text-bold item-center fs-14">
              <BiStar className="text-secondary fs-16" />
              <div className="flex item-center text-secondary fs-14">
                {x?.rating}
                <span className="text-grey2">({x?.reviews})</span>
              </div>
            </div>
            <div className="bottom w-100 flex item-center justify-space">
              <BiHeart className="fs-20 text-grey" />
              <div className="fs-14 uppercase text-light text-grey">
                Starting at <span className="fs-20 text-dark">${x?.price}</span>
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
  &:hover {
    .desc {
      color: var(--green);
    }
  }

  .px-2 {
    padding: 0.8rem 1.6rem;
  }

  .border {
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }
  .cards {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  .bottom {
    padding: 1rem 1.5rem;
    background-color: #fff;
  }
  .text-secondary {
    color: var(--yellow);
  }
  .card {
    min-height: 15rem;
    position: relative;
    /* overflow: hidden; */
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
      height: 15rem;
    }
    img {
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 15rem;
      object-fit: cover;
    }
  }
`;

const CardLoadingContent = styled.div`
  min-height: 35rem;
  min-width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  .skeleton {
    opacity: 0.7;
    animation: card-loading 1s infinite alternate;
  }
  .top {
    height: 20rem;
    opacity: 0.4;
    animation: card-loading 2s infinite alternate;
  }
  .bottomCenter {
    height: 1rem;
    flex: 0.3;
  }
  .h-6 {
    height: 1rem;
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
