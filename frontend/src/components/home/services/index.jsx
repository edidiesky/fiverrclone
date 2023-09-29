import React from "react";
import styled from "styled-components";
import Head from "../../common/Head";
import { Link } from "react-router-dom";
import {BiChevronRight, BiChevronLeft} from 'react-icons/bi'
import { Slider } from "../../common";
import { categorydata } from "../../../data/categorydata";

const options2 = {
  items: 5,
  nav: true,
  dots: false,
  loop: true,
  margin: 30,
  navText: ['<','>'],
  width: "100%",
  slideBy: 5,
  responsive: {
    0: {
      items: 1,
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



export default function ServicesIndex() {
  return (
    <ServicesIndexContainer>
      <div className="w-90 auto flex column gap-2">
        <div className="w-100 Heades flex item-start justify-space">
          <Head text={"Popular professional services"} />
        </div>
        <div className="w-100 grid grid-auto grid-gap1">
          <Slider className="owl-theme" options={options2}>
            {categorydata.map((x) => {
              return (
                <Link
                  to={`/categories/${x.category[0]}/${x.category[1]}`}
                  className="w-100 flex column"
                  key={x.id}
                  style={{ position: "relative" }}
                >
                  <div className="w-100 card">
                    <img src={x.image} alt="" className="w-100" />
                    <div className="backdrop"></div>
                  </div>
                  <div className="bottom w-100 back-white py-2 flex item-center gap-1">
                    <div className="flex column">
                      <h5 className="fs-16 text-bold text-white">
                        {x.authorName}
                      </h5>
                      <h4 className="fs-30 family2 text-light text-white">
                        {x.subName}
                      </h4>
                    </div>
                  </div>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </ServicesIndexContainer>
  );
}

const ServicesIndexContainer = styled.div`
  width: 100%;
  padding: 3rem 0;
  position: relative;
  .owl-nav {
    position: absolute;
    top: 35%;
    width: 100%;
    z-index: 10;

    &.disabled {
      display: none;
    }
    button.owl-next,
    button.owl-prev {
      width: 50px;
      height: 50px;
      background-color: #fff;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      border-radius: 50%;
      transition: all 0.4s;
      font-size: 20px;
      @media (max-width: 780px) {
        width: 34px;
        height: 34px;
        font-size: 16px;
      }
    }
    button.owl-next {
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
      transition: all 0.4s;
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
      left: -2%;
    }
    button.owl-next {
      right: -2%;
    }
  }
  h4 {
    font-weight: 900;
  }
  .Heades {
    @media (max-width: 780px) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  .bottom {
    padding: 2rem;
    position: absolute;
  }
  .image {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
  .project {
    overflow-x: auto;
    margin: 0 auto;
    padding: 5rem 0;
    width: 100%;
    min-width: 1000px;
  }
  .grid-auto {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card {
    position: relative;
    overflow: hidden;
    height: 40rem;

    &:hover {
      .backdrop {
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
    .backdrop {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.4s;
    }
    img {
      transition: all 0.4s;
      width: 100%;
      position: absolute;
      height: 100%;
      object-fit: cover;
    }
  }
`;
