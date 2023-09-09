import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { useSelector, useDispatch } from "react-redux";
import { clearCartMessage } from "../../Features";

export default function Message({showAlert, alertText, alertType }) {
  const dispatch = useDispatch();
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
      <div className="icon" onClick={()=> dispatch(clearCartMessage())}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 450px;
  padding: 1.2rem 2rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.26);
  background-color: #fff;
  position: fixed;
  z-index: 10000;
  left: 50%;
  border-radius: 5px;
  transform: translateX(-50%);
  top: 20px;
  border-left: 4px solid var(--green);
  font-size: 15px;
  font-weight: 700;
  color: var(--dark-1);
  transition: all 0.6s;
  /* transform: translate3d(0, -100px, 0); */
  top: -100px;
  &.active {
    top: 20px;
  }
  @media (max-width: 780px) {
    min-width: 300px;
    justify-content: flex-start;
  }
  .flex1 {
    flex: 1;
  }
  .icon {
    width: 2.4rem;
    height: 2.4rem;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background-color: #f5f5f5;
    cursor: pointer;
    &:hover {
      background-color: var(--grey-1);
      svg {
        color: #fff;
      }
    }
    svg {
      width: 50%;
      height: 50%;
      color: var(--grey-2);
    }
  }
`;
