import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Rating from "../../../common/Rating";
import FilterTypes from "../../../services/top/FilterTypes";
import { useSelector } from "react-redux";

export default function Details() {
  const [delivertime, setDeliveryTime] = useState(false);
  const { reviews } = useSelector((store) => store.reviews);
  return (
    <DetailsWrapper className="flex column gap-2 ">
      {reviews?.length === 0 ? (
        <h3 className="fs-20 text-dark family1">No Reviews yet</h3>
      ) : (
        <div className="flex column gap-1">
          <h3 className="fs-24 text-dark family1">Reviews</h3>
          <div className="flex fs-18 text-blue item-center gap-2">
            <h4 className="fs-20 text-grey">
              {reviews?.length} reviews for this Gig
            </h4>
            <Rating value={5} />
          </div>
          {/* // search section */}
          <form className={"w-100 py-2"}>
            <input
              type="text"
              placeholder="Search for reviews"
              className="input"
            />
            <div className="button flex item-center justify-center">
              <BiSearch />
            </div>
          </form>

          {/* sort section */}

          <h5 className="fs-14 family1 flex item-center gap-1 text-light text-grey2">
            Sort By{" "}
            <FilterOptions>
              <div
                className="w-100 fs-16 flex item-center gap-1 text-extra-bold text-dark text-center"
                onClick={() => setDeliveryTime(!delivertime)}
              >
                Best selling{" "}
                {delivertime ? (
                  <BiChevronUp className="fs-18" />
                ) : (
                  <BiChevronDown className="fs-18" />
                )}
              </div>
              {delivertime && (
                <div className="w-100 filters">
                  <FilterTypes
                    type={"selling"}
                    setDeliveryTime={setDeliveryTime}
                  />
                </div>
              )}
            </FilterOptions>
          </h5>
        </div>
      )}
    </DetailsWrapper>
  );
}

const FilterOptions = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 6px;
  position: relative;
  .bottom {
    background-color: #fff;
  }
  .filters {
    position: absolute;
    min-width: 220px;
    top: 120%;
    max-height: 400px;
    z-index: 30000;
    left: -50%;
    border-radius: 6px;
    padding: 2rem 2rem;
    background-color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
  label {
    border-radius: 5px;
    padding: 1rem;
    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
    }
  }
`;

const DetailsWrapper = styled.div`
  form {
    height: 4rem;
    width: clamp(50%, 400px, 90%);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.8);
    }
    .input {
      width: 100%;
      height: 100%;
      padding: 1rem 2rem;
      font-size: 1.8rem;
      border: none;
      box-shadow: none;
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
  }
`;
