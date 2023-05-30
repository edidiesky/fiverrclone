import React, { useState } from "react";
import styled from "styled-components";
import FilterTypes from "./FilterTypes";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export default function TopHeader({ title }) {
  const [delivertime, setDeliveryTime] = useState(false);
  const [budget, setBudget] = useState(false);
  return (
    <div>
      <div className="w-100 flex column gap-1">
        {/* title */}
        <h2 className="fs-35 family1 text-dark">{title}</h2>
        <h5 className="fs-18 text-light text-grey2">
          Visualize your ideas with realistic 3D Modeling & Rendering
        </h5>
        <div className="w-100 py-2 flex item-center gap-2">
          {/* delivery time */}
          <FilterOptions>
            <div
              className="w-100 fs-16 flex item-center gap-1 family1 text-dark text-center"
              onClick={() => setDeliveryTime(!delivertime)}
            >
              Delivery Time{" "}
              {delivertime ? (
                <BiChevronUp className="fs-18" />
              ) : (
                <BiChevronDown className="fs-18" />
              )}
            </div>
            {delivertime && (
              <div className="w-100 filters">
                <FilterTypes type={"time"} />
              </div>
            )}
          </FilterOptions>
          {/* budget */}
          <FilterOptions>
            <div
              className="w-100 fs-16 flex item-center text-bold gap-1 family1 text-dark text-center"
              onClick={() => setBudget(!budget)}
            >
              Budget{" "}
              {budget ? (
                <BiChevronUp className="fs-18" />
              ) : (
                <BiChevronDown className="fs-18" />
              )}
            </div>
            {budget && (
              <div className="w-100 filters">
                <FilterTypes type={"budget"} setBudget={setBudget} />
              </div>
            )}
          </FilterOptions>
        </div>
      </div>
    </div>
  );
}

const FilterOptions = styled.div`
  padding: 1.2rem 2rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 6px;
  position: relative;
  .bottom {
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
  }
  .filters {
    position: absolute;
    min-width: 300px;
    top: 120%;
    max-height: 400px;
    z-index: 30000;
    left: 0;
    border-radius: 6px;
    padding: 2rem 2rem;
    background-color: #fff;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.6);
  }
`;
