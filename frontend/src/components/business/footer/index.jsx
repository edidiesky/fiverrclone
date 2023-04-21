import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

export default function FooterIndex() {
  return (
    <FooterIndexContent>
      <div className="w-85 auto flex py-6 item-center justify-center column gap-2">
        <h2 className="text-center">
          Manage <span className="span1">projects</span> from anywhere
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
    </FooterIndexContent>
  );
}

const FooterIndexContent = styled.div`
  background-color: #0d084d;
  .span1 {
    font-family: serif;
  }
  .w-85 {
    width: 50%;
    margin: 0 auto;
    @media (max-width:780px) {
        width: 80%;
    }
  }
  h2 {
    font-size: 4rem;
    font-weight: 700;
    color: #fff;
    span {
      &.span1 {
        font-family: serif;
        font-style: italic;
      }
    }
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
