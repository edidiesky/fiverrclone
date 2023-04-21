import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

export default function HeroIndex() {
  return (
    <HeroIndexContent>
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
        <div className="w-100 flex justify-center item-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F1269a57212df4631b866219ba2013fa8%2Facded1afc5c34e9abb345bb03f8bbb06?format=webp&width=2000"
            alt=""
            className="w-100"
          />
        </div>
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
