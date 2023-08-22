import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

const heroBackgroundData = [
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616487/jenny-2x.jpg",
    author: "Jenny",
    role: "Creative assistant",
  },
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616493/colin-2x.jpg",
    author: "Colin",
    role: "Product Assistant",
  },
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616493/jordan-2x.jpg",
    author: "Scarlet",
    role: "Product Assistant",
  },
  {
    backgroundImage:
      "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616497/christina-2x.jpg",
    author: "christina",
    role: "Product Assistant",
  },
];

// 'scarlett': 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616487/scarlett-2x.jpg',
// 'jordan': 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616493/jordan-2x.jpg',
// 'christina': 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,dpr_2.0/v1/attachments/generic_asset/asset/4637ac0b5e7bc7f247cd24c0ca9e36a3-1690384616497/christina-2x.jpg',
// 'jonathan': 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f16fc0eaaecb30c935ec6dc8fe995ac9-1680247089239/bg-hero-7-1792-x2.jpg',
// 'veronica': 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f16fc0eaaecb30c935ec6dc8fe995ac9-1680247089246/bg-hero-8-1792-x2.jpg',
// 'colin-de': 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f16fc0eaaecb30c935ec6dc8fe995ac9-1680247089234/bg-hero-9-1792-x2.jpg',
// 'jenny-de': 'https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/f16fc0eaaecb30c935ec6dc8fe995ac9-1680247089237/bg-hero-10-1792-x2.jpg',

export default function HeroIndex() {
  const [backgroundtab, setBackgroundTab] = useState(0);
  return (
    <HeroIndexContent>
      <div className="w-100 imageWrapper flex justify-center item-center">
        {heroBackgroundData.map((x, index) => {
          return (
            <img
              key={index}
              src={x.backgroundImage}
              alt=""
              className="w-100"
            />
          );
        })}
      </div>
      <div className="w-85 auto grid grid-2 item-center">
        <div className="w-100 flex column gap-2">
          <h2 className="fs-40 text-white">
            Expertise, when you need it
            <span className="block text-light fs-12">
              Give your team the flexibility to connect with vetted freelancers,
              execute every project, and expand in-house capabilities.
            </span>
          </h2>
          <form className={"w-100 py-2"}>
            <input
              type="text"
              placeholder="Try Graphic Designer"
              className="input"
            />
            <div className="button flex item-center justify-center">
              <BiSearch />
            </div>
          </form>
        </div>
        <div className=""></div>
      </div>
    </HeroIndexContent>
  );
}

const HeroIndexContent = styled.div`
  background-color: #0d084d;
  padding: 6rem 0;
  min-height: 50vh;
  h2 {
    font-size: 5rem;
    font-weight: 700;
    font-family: "Montserrat", sans-serif;
  }
  form {
    height: 4rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    transition: all 0.5s;
    &.active {
      display: none;
    }
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.8);
    }
    .input {
      width: 100%;
      height: 100%;
      padding: 1rem 2rem;
      font-size: 1.4rem;
    }
    .button {
      height: 4rem;
      background: var(--green);
      color: #fff;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      svg {
        font-size: 20px;
      }
    }
  }
`;
