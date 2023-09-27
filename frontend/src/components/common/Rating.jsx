import React from "react";
import styled from "styled-components";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Rating({ value, type }) {
  // body...

  return (
    <RatingContent>
      <div className="RatingContainer">
        
          <span>
            {value >= 1 ? (
              <BsStarFill />
            ) : value < 0.5 ? (
              <BsStar />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {" "}
            {value >= 2 ? (
              <BsStarFill />
            ) : value < 1.5 ? (
              <BsStar />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {value >= 3 ? (
              <BsStarFill />
            ) : value < 2.5 ? (
              <BsStar />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {value >= 4 ? (
              <BsStarFill />
            ) : value < 3.5 ? (
              <BsStar />
            ) : (
              <BsStarFill />
            )}
          </span>
          <span>
            {value >= 5 ? (
              <BsStarFill />
            ) : value < 0.5 ? (
              <BsStar />
            ) : (
              <BsStarFill />
            )}
          </span>
      </div>
    </RatingContent>
  );
}

const RatingContent = styled.div`
  .RatingContainer {
    gap: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.1rem;
    span {
      svg {
        color: var(--grey-1);
        font-size: 16px;
        @media (max-width: 580px) {
          font-size: 13px;
        }
      }
    }
  }
  h3 {
    font-size: 1.4rem;
    color: var(--grey);
    font-weight: 600;
  }
`;
