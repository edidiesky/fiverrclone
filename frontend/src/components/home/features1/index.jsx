import React from "react";
import styled from "styled-components";
import Head from "../../common/Head";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { Card, Slider } from "../../common";
import { projectData } from "../../../data";
import { useSelector } from "react-redux";
const options2 = {
  items: 4,
  stagePadding: 10,
  nav: true,
  loop: true,
  dots: false,
  margin: 20,
  navText: ["<", ">"],
  width: "100%",
  slideBy: 3,
  responsive: {
    0: {
      items: 2,
    },
    460: {
      items: 2,
    },
    760: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  },
};

export default function Features1Index() {
  const { Gigs, gigsIsLoading } = useSelector((store) => store.gigs);
  return (
    <Features1IndexContainer>
      <div className="w-90 auto column">
        <div className="w-100 Heades flex item-center justify-space">
          <Head text={"Inspiring work made on Fiverr"} />
          <Link to={""} className="link flex item-center gap-1">
            See More Projects <BiChevronRight />
          </Link>
        </div>
        <div className="w-100 project">
          <div className="w-100 grid grid-auto grid-gap1">
            <Slider options={options2}>
              {Gigs?.map((x) => {
                return <Card type={"features"} x={x} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </Features1IndexContainer>
  );
}

const Features1IndexContainer = styled.div`
  width: 100%;
  padding: 6rem 0;
  background-color: var(--light-grey);
  position: relative;
  .MainCard {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .owl-carousel .owl-stage-outer {
    overflow: hidden;
    min-height: 360px !important;
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
      width: 60px;
      height: 60px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 26px;
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
      width: 60px;
      height: 60px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 26px;
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
      left: -2%;
    }
    button.owl-next {
      right: -2%;
    }
  }

  .Heades {
    @media (max-width: 780px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .bottom {
    padding: 2rem;
    background-color: #fff;
  }
  .image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .project {
    padding: 5rem 0;
    width: 100%;
  }
  .grid-auto {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card {
    height: 24rem;
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    &:hover {
      .backdrop {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    .backdrop {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);

      transition: all 0.4s;
    }
    img {
      position: absolute;
      transition: all 0.4s;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
