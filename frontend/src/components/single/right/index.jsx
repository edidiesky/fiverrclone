import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaClock } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { onCartSidebar } from "../../../Features";
import Bolt from "../../common/svg/Bolt";

export default function RightIndex() {
  const dispatch = useDispatch();
  const { GigsDetails } = useSelector((store) => store.gigs);
  const { userInfo } = useSelector((store) => store.user);
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
              <h4 className="fs-18 text-dark text-bold">INITIAL PACKAGE</h4>
              {/* price */}
              <h4 className="fs-24 text-dark text-light">
                ${GigsDetails?.price}
              </h4>
            </div>
            {/* work desc */}
            <h4 className="fs-18 text-grey text-light">
              {GigsDetails?.shortDescription}
            </h4>
            {/* basic info */}
            <ul className="flex column gap-1">
              <div className="w-100 flex item-center gap-1 fs-16 text-dark">
                <FaClock />
                {GigsDetails?.deliveryDays} Days Delivery
              </div>
              {GigsDetails?.subInfo.map((x, index) => {
                return (
                  <li
                    key={index}
                    className="flex item-center text-bold gap-1 fs-16 text-grey"
                  >
                    <FaCheck /> {x}
                  </li>
                );
              })}
            </ul>
            {/* set up a condition if the user is alrady login or authenticateed */}
            {userInfo ? (
              <div
                className="contactBtn family1 fs-16 green"
                onClick={() => dispatch(onCartSidebar())}
              >
                Continue
              </div>
            ) : (
              <Link
                to={"/join/login"}
                className="contactBtn family1 fs-16 green"
              >
                Continue
              </Link>
            )}
          </div>
        </div>
        {/* contact button */}
        <div className="w-100 flex back-grey py-2 radius1">
          <div className="contactBtn family1 fs-16">Contact Me</div>
        </div>
        {/* additional info */}
        <div className="w-100 p1 border flex item-center gap-2">
          <Bolt />
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
