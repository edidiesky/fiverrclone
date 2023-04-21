import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Head from "../common/Head";
const exploreData = [
  {
    id: 1,
    text: "Graphics & Design",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg",
  },
  {
    id: 2,
    text: "Digital Marketing",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg",
  },
  {
    id: 3,
    text: "Writing & Translation",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/online-marketing.a3e9794.svg",
  },
  {
    id: 4,
    text: "Video & Animation",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/video-animation.1356999.svg",
  },
  {
    id: 5,
    text: "Graphics & Design",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/graphics-design.91dfe44.svg",
  },
  {
    id: 6,
    text: "Music & Audio",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/music-audio.ede4c90.svg",
  },
  {
    id: 7,
    text: "Programming & Tech",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/programming.6ee5a90.svg",
  },
  {
    id: 8,
    text: "Business",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/business.fabc3a7.svg",
  },
  {
    id: 9,
    text: "Lifestyle",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/lifestyle.112b348.svg",
  },
  {
    id: 10,
    text: "Graphics & Design",
    image:
      "https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/data.855fe95.svg",
  },
];
export default function Explore() {
  return (
    <div
      className="w-100 py-10 back-white item-center"
      style={{ background: "#Fff" }}
    >
      <div className="w-90 auto flex column gap-2">
        <div className="w-100 flex item-center justify-space">
          <Head text={"Explore the marketplace"} />
        </div>
        <ExploreIcon
          className={"w-100"}
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gridRowGap: "4rem",
          }}
        >
          {exploreData.map((x) => {
            return (
              <Link
                to={"/"}
                className="w-100 card flex item-center justify-center column gap-2"
                key={x.id}
              >
                <div className="w-100 imageWrapper flex item-center justify-center ">
                  <img src={x.image} alt="" className="image" />
                </div>
                <h4 className="fs-20 text-light text-dark">{x.text}</h4>
              </Link>
            );
          })}
        </ExploreIcon>
      </div>
    </div>
  );
}

export const ExploreIcon = styled.div`
  display: grid;
  grid-column-gap: 4rem;
  .card {
    &:hover {
      .imageWrapper::after {
        width: 40%;
        background-color: var(--green);
      }
    }
  }
  .imageWrapper {
    position: relative;
    &::after {
      width: 20%;
      transition: all 0.3s;
      position: absolute;
      bottom: -10%;
      content: "";
      left: 50%;
      height: 2px;
      border-radius: 20px;
      background-color: var(--grey-2);
      transform: translateX(-50%);
    }
  }
  .image {
    height: 5.5rem;
    width: 5.5rem;
  }
`;
