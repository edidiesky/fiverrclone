import React, { useState } from "react";
import styled from "styled-components";
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function DetailsTopLeft() {
  const [tabindex, setTabIndex] = useState(0);
  const { GigsDetails } = useSelector((store) => store.gigs);

  const handleImagePosition = (position) => {
    if (position === "left") {
      setTabIndex(tabindex < 0 ? GigsDetails?.image?.length - 1 : tabindex - 1);
    }
    if (position === "right") {
      setTabIndex(
        tabindex >= GigsDetails?.image?.length - 1 ? 0 : tabindex + 1
      );
    }
  };

  return (
    <DetailsTopLeftContainer className="detailsImage">
      <div className="detailsImageContainer">
        <div
          className="btnArrow left"
          onClick={() => handleImagePosition("left")}
        >
          <BiChevronLeft />
        </div>
        <div
          className="btnArrow right"
          onClick={() => handleImagePosition("right")}
        >
          <BiChevronRight />
        </div>
        <div className="detailsImageWrapper">
          {GigsDetails?.image?.map((x, index) => {
            return (
              <div
                className="imagesWrapper"
                key={index}
                style={{ transform: `translateX(-${tabindex * 100}%)` }}
              >
                <img src={x} alt="images" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="imageOptions">
        {GigsDetails?.image?.map((x, index) => {
          return (
            <div
              className="imageWrapper"
              key={index}
              onClick={() => setTabIndex(index)}
            >
              <img src={x} alt="images" />
              <div
                className={
                  tabindex === index ? "imageGradient active" : "imageGradient"
                }
              ></div>
            </div>
          );
        })}
      </div>
    </DetailsTopLeftContainer>
  );
}

const DetailsTopLeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  &.detailsImage {
    @media (max-width: 350px) {
      width: 280px;
    }
  }
  .imageOptions {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-top: 2rem;
    grid-gap: 1.6rem;
    @media (max-width: 680px) {
      grid-template-columns: repeat(5, 1fr);
      width: 100%;
    }
    @media (max-width: 350px) {
      grid-template-columns: 1fr 1fr;
      width: 280px;
    }
    .imageWrapper {
      height: 8rem;
      position: relative;
      &:hover .imageGradient {
        background: rgba(0 0 0 /10%);
      }
      .imageGradient {
        height: 100%;
        width: 100%;
        position: absolute;
        background: rgba(255 255 255 /60%);
        &.active {
          background: rgba(0 0 0 /20%);
        }
      }
      img {
        width: 100%;
        position: absolute;
        object-fit: cover;
        height: 100%;
      }
    }
  }
  .detailsImageContainer {
    width: 100%;
    position: relative;
    &:hover .btnArrow {
      opacity: 1;
    }
    .btnArrow {
      z-index: 80;
      width: 5rem;
      position: absolute;
      height: 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 50%;
      transition: all 0.4s;
      cursor: pointer;
      /* @media (max-width: 780px) {
        display: none;
      } */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      &:hover {
      }
      svg {
        font-size: 26px;
        color: #222;
      }
      &.right {
        right: -3%;
        top: 50%;
        transform: translateY(-50%);
      }
      &.left {
        left: -3%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .detailsImageWrapper {
      width: 100%;
      position: relative;
      display: grid;
      grid-template-columns: repeat(4, 100%);
      overflow: hidden;
      height: 50rem;
      background: #f5f5f5;
      @media (max-width: 780px) {
        height: 100%;
      }
      .imagesWrapper {
        width: 100%;
        position: relative;
        transition: all 0.6s ease-in-out;
        &:hover {
          img {
            transform: scale(1.1);
          }
        }
        img {
          width: 100%;
          transition: all 0.6s ease-in-out;
        }
      }
    }
  }
`;
