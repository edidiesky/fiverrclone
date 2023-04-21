import React from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

export default function ReviewDetails() {
  return (
    <div>
      {/* reviews info */}
      {/* reviews search */}
      <div className="w-100 flex column gap-1 item-start"></div>
      <Search className={"w-100 py-2"}>
        <input
          type="text"
          placeholder="Search Reviews"
          className="input family1"
        />
        <div className="button flex item-center justify-center">
          <BiSearch />
        </div>
      </Search>
    </div>
  );
}

const Search = styled.form`
  height: 4rem;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.5s;
  &.active {
    display: none;
  }
  @media (max-width: 1080px) {
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
  .input {
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    font-size: 1.6rem;
  }
  .button {
    height: 4rem;
    background: var(--dark-1);
    color: #fff;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    svg {
      font-size: 20px;
    }
  }
`;
