import React, { useState } from "react";
import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";
export default function SelectReview({tab, setTab}) {
  return (
    <SelectReviewContainer>
      <div className="selectReviewWrapper flex-1">
        <div
          style={{ gap: "6px" }}
          className="selectSpan flex item-center fs-18"
        >
          <span onClick={() => setTab(1)}>
            {" "}
            {tab === 1 || tab === 2 || tab === 3 || tab === 4 || tab === 5 ? (
              <BsStarFill />
            ) : (
              <BsStar />
            )}
          </span>{" "}
          <span onClick={() => setTab(2)}>
            {" "}
            {tab === 2 || tab === 3 || tab === 4 || tab === 5 ? (
              <BsStarFill />
            ) : (
              <BsStar />
            )}
          </span>{" "}
          <span onClick={() => setTab(3)}>
            {" "}
            {tab === 3 || tab === 4 || tab === 5 ? <BsStarFill /> : <BsStar />}
          </span>{" "}
          <span onClick={() => setTab(4)}>
            {" "}
            {tab === 4 || tab === 5 ? <BsStarFill /> : <BsStar />}
          </span>{" "}
          <span onClick={() => setTab(5)}>
            {" "}
            {tab === 5 ? <BsStarFill /> : <BsStar />}
          </span>
        </div>
      </div>
    </SelectReviewContainer>
  );
}

const SelectReviewContainer = styled.div`
  .selectReviewWrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: flex-end;
    .selectSpan {
      svg {
        color: #ffd500;
      }
    }
    &.active {
      .selectSpan {
        svg {
          color: #e1cf1b;
        }
      }
    }
  }
`;
