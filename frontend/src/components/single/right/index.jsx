import React from "react";
import { Link } from "react-router-dom";
import { FaCheck, FaClock } from "react-icons/fa";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { onCartSidebar } from "../../../Features";
import Bolt from "../../common/svg/Bolt";
import { onAuthModal } from "../../../Features/user/userSlice";

export default function RightIndex() {
  const dispatch = useDispatch();
  const { GigsDetails } = useSelector((store) => store.gigs);
  const { userInfo } = useSelector((store) => store.user);
  const handleCreateReservation = () => {
    if (userInfo) {
      dispatch(onCartSidebar());
    } else {
      dispatch(onAuthModal());
    }
  };
  return (
    <RightIndexContent className="w-100">
      <div className="Right flex gap-1 column">
        {/* box */}
        <div className="w-100 border flex column gap-2">
          <div className="flex item-center">
            <div className="w-100 tab flex-1 tab1 fs-18 text-center text-bold text-grey">
              Basic
            </div>{" "}
            <div className="w-100 tab tab2 flex-1 fs-18 text-center text-bold text-grey">
              Standard
            </div>  <div className="w-100 tab tab3 flex-1 fs-18 text-center text-bold text-grey">
            Premium
          </div>
          </div>
          <div className="w-100 flex column gap-2 p2">
            {/* price */}
            <div className="w-100 flex item-center justify-space">
              <h4 className="fs-24 family2 text-dark text-bold">INITIAL PACKAGE</h4>
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
            <ul style={{ gap: "6px" }} className="flex column">
              <div className="w-100 flex item-center gap-1 fs-18 text-dark">
                <FaClock />
                {GigsDetails?.deliveryDays} Days Delivery
              </div>
              {GigsDetails?.subInfo.map((x, index) => {
                return (
                  <li
                    key={index}
                    className="flex item-center text-bold gap-1 fs-18 text-grey"
                  >
                    <FaCheck /> {x}
                  </li>
                );
              })}
            </ul>
            {/* set up a condition if the user is alrady login or authenticateed */}
            <div
              className="contactBtn w-100 family1 fs-20 green"
              onClick={handleCreateReservation}
            >
              Continue
            </div>
          </div>
        </div>
        {/* contact button */}
        <div className="w-100 flex back-grey py-2 radius1">
          <div className="contactBtn w-100 family1 fs-20">Contact Me</div>
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
  width: auto;
  .Right {
    position: sticky;
    top: 5%;
  }
  .tab {
    padding: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    @media (max-width: 580px) {
      padding:3rem 2rem;
    }
    &.tab2,
    &.tab3 {
      background: rgba(0, 0, 0, 0.03);
    }
    &.tab1 {
      border-bottom: 3px solid var(--dark-1);
    }
    &.tab1,
    &.tab2 {
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
  .p2 {
    padding: 2rem;
  }
  .p1 {
    padding: 1rem;
  }
  .border {
    border: 1px solid rgba(0, 0, 0, 0.2);
    @media (max-width: 580px) {
      border: none;
    }
  }
`;
