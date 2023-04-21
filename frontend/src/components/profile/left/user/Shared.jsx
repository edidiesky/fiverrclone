import React, { useState } from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../../../common/Rating";

export default function Shared() {
  return (
    <SharedContent>
      {/* bototm */}
      <div className="w-100 py-2 flex column gap-1">
        {/* description */}
        <div className="flex bottom w-100 fs-16 text-dark text-bold column gap-2">
          <span className="flex fs-18 justify-space item-center gap-2">
          Shared activity information
          </span>
          {/* sample description */}
          <span className="text-light fs-14 family1 text-grey2">
            In order to provide the best possible work and service, some
            information about your activity on Fiverr may be shared with
            sellers. Manage settings
          </span>
        </div>
      </div>
    </SharedContent>
  );
}

const SharedContent = styled.div`
  padding: 2rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  .input {
    background-color: #fff;
    padding: 1.2rem 2rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  .descTab {
    height: 20rem;
    padding: 2rem;
    background-color: #f5f5f5;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    display: none;
    &.active {
      display: flex;
    }
    .area {
      border: none;
      outline: none;
      background-color: inherit;
      font-size: 14px;
      height: 15rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  a:hover {
    text-decoration: underline;
  }
  .skills {
    border: 1px solid rgba(0, 0, 0, 0.3);
    padding: 0.9rem 1.2rem;
    border-radius: 40px;
  }
  .list {
    flex-wrap: wrap;
    gap: 1.2rem;
  }
  .bottom {
    padding-bottom: 1.6rem;
  }
`;
