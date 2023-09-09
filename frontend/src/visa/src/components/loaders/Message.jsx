import React, { useEffect } from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { clearCartMessage } from "../../Features";

export default function Message({ showAlert, alertText, alertType }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        dispatch(clearCartMessage());
      }, 7000);
    }
  }, [showAlert]);
  return (
    <MessageContent
      className={
        showAlert
          ? "family1 gap-1 flex item-center justify-space active"
          : "family1 gap-1 flex item-center justify-space"
      }
    >
      {alertType === "danger" && <CgDanger className="fs-24" />}
      <div className="flex flex1">{alertText}</div>
      <div className="icon" onClick={() => dispatch(clearCartMessage())}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 650px;
  padding: 1.2rem 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.26);
  background-color: #070606;
  position: fixed;
  z-index: 10000;
  left: 50%;
  border-radius: 5px;
  min-height: 8rem;
  transform: translateX(-50%);
  top: 20px;
  border-left: 4px solid var(--green);
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  transition: all 0.6s;
  /* transform: translate3d(0, -100px, 0); */
  top: -150px;
  &.active {
    top: 20px;
  }
  @media (max-width: 780px) {
    min-width: 400px;
    justify-content: flex-start;
    font-size: 14px;
    align-items: center;
  }
    @media (max-width: 480px) {
    min-width: 300px;
    justify-content: flex-start;
    font-size: 14px;
    align-items: center;
  }
  .flex1 {
    flex: 1;
  }
  .icon {
    cursor: pointer;
    svg {
      font-size: 20px;
      color: var(--grey-2);
    }
  }
`;
