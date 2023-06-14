import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { RiCheckboxCircleFill } from "react-icons/ri";

export default function Message({ alertText, showAlert, alertType }) {
  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-space active"
          : alertType === "danger"
          ? "gap-1 flex item-center danger justify-space"
          : "gap-1 flex item-center justify-space"
      }
    >
      <div className="icon flex item-center justify-center">
        <RiCheckboxCircleFill
          className="fs-20 text-green"
          color="var(--green)"
        />
      </div>
      <div className="flex flex1">{alertText}</div>
      <div className="icon flex item-center justify-center">
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 400px;
  padding: 1.7rem 2rem;
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.26);
  background-color: #fff;
  position: fixed;
  z-index: 5000;
  left: -100%;
  border-radius: 7px;
  bottom: 20px;
  border-left: 4px solid var(--green);
  font-size: 14px;
  font-weight: 700;
  color: var(--dark-1);
  transition: all 1s;
  &.active {
    left: 2%;
    display: flex;
  }
  @media (max-width: 780px) {
    min-width: 300px;
    justify-content: flex-start;
  }
  .flex1 {
    flex: 1;
  }
  .icon flex item-center justify-center {
    svg {
      font-size: 1.8rem;
      color: #333;
      cursor: pointer;
    }
  }
`;
