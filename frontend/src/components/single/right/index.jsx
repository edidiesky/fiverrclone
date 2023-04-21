import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaClock } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { onCartSidebar } from "../../../Features";

export default function RightIndex() {
  const dispatch = useDispatch();
  return (
    <RightIndexContent className="w-100">
      <div className="Right flex gap-1 column">
        {/* box */}
        <div className="w-100 border flex column gap-2">
          <div className="w-100 p2 border fs-16 family1 text-bold text-grey">
            Basic
          </div>
          <div className="w-100 flex column gap-2 p2">
            {/* price */}
            <div className="w-100 flex item-center justify-space">
              <h4 className="fs-18 text-grey text-light">INITIAL PACKAGE</h4>
              {/* price */}
              <h4 className="fs-18 text-grey text-light">$28</h4>
            </div>
            {/* work desc */}
            <h4 className="fs-16 text-grey text-light">
              1 Professional Logo concept + Jpeg + PNG
            </h4>
            {/* basic info */}
            <ul className="flex column gap-1">
              <div className="w-100 flex item-center gap-1 fs-16 text-grey">
                <FaClock />5 Days Delivery
              </div>
              <li className="flex item-center gap-1 fs-16 text-grey2">
                <FaCheck /> 1 concept included
              </li>
              <li className="flex item-center text-light gap-1 fs-16 text-grey2">
                <FaCheck /> Logo transparency
              </li>
              <li className="flex item-center text-light gap-1 fs-16 text-grey2">
                <FaCheck /> Vector file
              </li>
              <li className="flex item-center text-light gap-1 fs-16 text-grey2">
                <FaCheck /> Printable file
              </li>
            </ul>
            <div className="contactBtn family1 fs-16 green" onClick={()=> dispatch(onCartSidebar())}>Continue</div>
          </div>
        </div>
        {/* contact button */}
        <div className="w-100 flex back-grey py-2 radius1">
          <div className="contactBtn family1 fs-16">Contact Me</div>
        </div>
        {/* additional info */}
        <div className="w-100 p1 border flex item-center gap-2">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16Z"
              fill="#E4E5E7"
            ></path>
            <path
              d="M18 2H10.5L7 17.5H15L13 30L24.5 11.5H16L18 2Z"
              fill="#FFD596"
              stroke="#404145"
              stroke-width="1.5"
              stroke-linejoin="round"
            ></path>
            <path
              d="M24 21V23"
              stroke="#C5C6C9"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M24 25V27"
              stroke="#C5C6C9"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M23 24H21"
              stroke="#C5C6C9"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M27 24H25"
              stroke="#C5C6C9"
              stroke-width="2"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M3.5 5V6.66667"
              stroke="#C5C6C9"
              stroke-width="1.66667"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M3.5 8.33325V9.99992"
              stroke="#C5C6C9"
              stroke-width="1.66667"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M2.66667 7.5H1"
              stroke="#C5C6C9"
              stroke-width="1.66667"
              stroke-miterlimit="10"
            ></path>
            <path
              d="M6.00016 7.5H4.3335"
              stroke="#C5C6C9"
              stroke-width="1.66667"
              stroke-miterlimit="10"
            ></path>
          </svg>
          <h5 className="fs-18 text-dark text-bold">
            Highly responsive!
            <span className="block fs-16 text-grey text-light">
              Known for exceptionally quick replies
            </span>
          </h5>
        </div>
      </div>
    </RightIndexContent>
  );
}

const RightIndexContent = styled.div`
  width: 100%;
  .Right {
    position: sticky;
    top: 5%;
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.08);
  }
`;
