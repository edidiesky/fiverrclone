import React from "react";
import styled from "styled-components";
import { projectData } from "../../../data";
import { Head, Slider } from "../../common";
import Card from "../../common/Card";
import { useSelector } from "react-redux";

const options2 = {
  items: 5,
  stagePadding: 10,
  nav: true,
  dots: false,
  margin: 20,
  navText: ["<", ">"],
  width: "100%",
  slideBy: 4,
  responsive: {
    0: {
      items: 3,
    },
    460: {
      items: 2,
    },
    760: {
      items: 2,
    },
    1024: {
      items: 5,
    },
  },
};

export default function GigsIndex() {
  const { Gigs, gigsIsLoading } = useSelector((store) => store.gigs);
  return (
    <GigsIndexContainer>
      <div className="w-90 auto py-6  flex column gap-2">
        <div className="w-100 Heades flex item-start justify-space">
          <Head text={"Recently Viewed & More"} />
        </div>
        <div className="w-100 project">
          <div className="w-100">
            <Slider className="owl-theme" options={options2}>
              {Gigs?.map((x, index) => {
                return <Card x={x} index={index} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </GigsIndexContainer>
  );
}

const GigsIndexContainer = styled.div`
  width: 100%;
  position: relative;
  .grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
      width: 55px;
      height: 55px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 24px;
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
      width: 55px;
      height: 55px;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      color: #777;
      font-size: 24px;
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

  .grid-auto {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
