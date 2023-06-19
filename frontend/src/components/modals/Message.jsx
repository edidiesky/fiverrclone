import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
export default function Message({
  showAlert,
  alertText,
  alertType,
  handleClearAlert,
}) {
  // dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(handleClearAlert());
    }, 4000);
  }, []);

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
      {alertType === "danger" && <CgDanger className="fs-24" />}
      <div className="flex flex1">{alertText}</div>
      <div className="icon" onClick={() => dispatch(handleClearAlert())}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 350px;
  padding: 1.2rem 2rem;
  background-color: #f7f7f7;
  font-size: 17px;
  font-weight: 500;
  color: #333;
  transition: all 0.6s;
  transform: translate3d(0, -1000px, 0);
  opacity: 0;
  visibility: hidden;
  position: relative;
  display: none;
  &.active {
    transform: translate3d(0, 0px, 0);
    visibility: visible;
    opacity: 1;
    display: flex;
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
