import React, { useState } from "react";
import styled from "styled-components";
import { BsStar, BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
export default function SelectReview() {
  return (
    <SelectReviewContainer>
      <div className="selectReviewWrapper flex-1">
        <div style={{gap:"6px"}} className="selectSpan flex item-center fs-18">
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
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
