import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(handleClearAlert())
  //   }, 10000);
  // }, []);

  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-space active"
          : "gap-1 flex item-center justify-space"
      }
    >
      <AiFillCheckCircle fontSize={"24px"} color="green" />
      <div className="flex flex1 text-extra-bold text-dark">
        {alertText}
      </div>
      <div className="icon" onClick={handleClearAlert}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 200px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: fixed;
  z-index: 10000;
  left: 2%;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  color: var(--dark-1);
  transition: all 0.6s;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -1000%);

  top: -5%;

  &.active {
    top: 5%;
    transform: translateX(-50%);
  }
  &.danger {
    background-color: var(--red);
    color: #fff;
    border-left: 4px solid var(--red);
  }
  @media (max-width: 780px) {
    min-width: 300px;
    justify-content: flex-start;
  }
  @media (max-width: 480px) {
    min-width: 200px;
    justify-content: flex-start;
    padding: 1rem 2rem;
  }
  .flex1 {
    flex: 1;
  }
  .icon {
    width: 1.6rem;
    height: 1.6rem;
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
      color: var(--dark-1);
    }
  }
`;
