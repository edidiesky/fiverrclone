import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
export default function ErrorMessage({
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
    <ErrorMessageContent
      className={
        showAlert
          ? "gap-1 flex fs-18 item-center justify-space active"
          : "gap-1 flex fs-18 item-center justify-space"
      }
    >
      <CgDanger fontSize={"20px"} color="red" />

      <h5
        className={
          alertType === "danger"
            ? "flex flex1 fs-18 text-extra-bold activered"
            : "flex flex1 fs-18 text-extra-bold"
        }
      >
        {alertText}
      </h5>
      {/* <div className="icon" onClick={handleClearAlert}>
        <RxCross1 />
      </div> */}
    </ErrorMessageContent>
  );
}

const ErrorMessageContent = styled.div`
  min-width: 200px;
  padding: 1.4rem;
  background-color: #fbd8d857;
  color: #e50b0b;
  z-index: 10000;
  left: 2%;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.6s;
  opacity: 0;
  visibility: hidden;
  position: relative;
  transform: translate3d(0, 100px, 0);
  &.active {
    transform: translate3d(0, 0px, 0);
    visibility: visible;
    opacity: 1;
    display: flex;
  }
  h5 {
    font-size: inherit;
    &.activered {
      color: var(--red);
    }
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
