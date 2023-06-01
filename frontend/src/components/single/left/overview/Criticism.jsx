import React from "react";
import styled from "styled-components";
import moment from "moment";
import Rating from "../../../common/Rating";
import { Slider } from "../../../common";
import { useSelector } from "react-redux";

const options = {
  items: 1,
  nav: true,
  dots: false,
  margin: 40,
  navText: ["<", ">"],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 1,
    },
  },
};
// 
export default function Criticism() {
  const { reviews } = useSelector((store) => store.reviews);
  return (
    <CriticismWrapper>
      {reviews?.length === 0 ? (
        <h4
          className="fs-16 text-dark family1"
          style={{
            border: "1px solid rgba(0,0,0,.08)",
            padding: "1.5rem",
          }}
        >
          No Reviews yet
        </h4>
      ) : (
        <div className="w-100 flex column gap-2">
          {/* reviews top */}
          <div className="comment flex w-100 item-center justify-space">
            <h3 className="fs-20 text-bold text-dark">
              What people loved about this seller
            </h3>
            {/* <Link
            to={""}
            className="fs-16 text-light text-blue flex item-center gap-1"
          >
            See all Reviews <BiChevronRight />
          </Link> */}
          </div>
          {/* reviews bottom */}
          <CriticismCard
            className=" radius1 w-100"
            style={{
              border: "1px solid rgba(0,0,0,.08)",
            }}
          >
            <div className="carousel-container">
              <Slider options={options}>
                {reviews?.map((x, index) => {
                  let createddate = moment(x?.createdAt);
                  createddate = createddate.format("MMMM Do YYYY");
                  return (
                    <div key={index} className="flex item-start gap-2 w-100">
                      {/* name */}
                      <div className="flex w-100 item-start gap-2 w-100">
                        <img
                          src={x?.reviewuser?.image}
                          alt=""
                          className="avatar flex item-center justify-center"
                        />
                        {/* left */}
                        <div className="flex flex-1 gap-1 column">
                          {/* top */}
                          <div className="comment flex item-center gap-1">
                            {/* name */}
                            <h4 className="fs-16 text-dark text-bold">
                              {x?.reviewuser?.username}
                            </h4>
                            {/* country */}
                            <h4 className="fs-16 text-grey text-bold">
                              {x?.reviewuser?.country
                                ? x?.reviewuser?.country
                                : null}
                            </h4>
                            <div
                              className="flex item-center gap-1 fs-14"
                              style={{
                                paddingLeft: "1rem",
                                borderLeft: "1px solid #777",
                              }}
                            >
                              <Rating value={x.rating} />
                              <h4 className="fs-16 text-grey text-bold">
                                {x.rating}
                              </h4>
                            </div>
                          </div>
                          {/* comment */}
                          <p className="text-grey fs-16 text-light">
                            {x.description}
                          </p>
                          {/* time */}
                          <h4 className="fs-16 text-grey2 text-light">
                            {createddate}
                          </h4>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </CriticismCard>
        </div>
      )}
    </CriticismWrapper>
  );
}

const CriticismWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  .owl-carousel .owl-item img {
    display: block;
    width: 4rem !important;
  }
  .carousel-container {
    max-width: 600px;
  }
  .owl-nav {
    position: absolute;
    top: 35%;
    width: 100%;
    z-index: 10;
    background-color: #fff;
    &.disabled {
      display: none;
    }
    button.owl-next {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 20px;
      color: #777;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 20px;
      &.disabled {
        display: none;
      }
      &:hover {
        background-color: #fff;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
        color: #777;
      }
    }
    button.owl-prev {
      left: -8%;
    }
    button.owl-next {
      right: -10%;
    }
  }
`;

const CriticismCard = styled.div`
  position: relative;
  width: 100%;
  padding: 2rem;
  width: clamp(45%, 650px, 100%);
  @media (max-width: 480px) {
    padding: 1.5rem 1.2rem;
  }
  .comment {
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .avatar {
    width: 4.5rem;
    height: 4.5rem;
  }

  .btnArrow {
    z-index: 80;
    width: 3.5rem;
    position: absolute;
    height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 50%;
    transition: all 0.4s;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    &:hover {
    }
    svg {
      font-size: 26px;
      color: #222;
    }
    &.right {
      right: -2%;
      top: 50%;
      transform: translateY(-50%);
    }
    &.left {
      left: -2%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
`;
