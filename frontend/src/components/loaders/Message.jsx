import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { CgDanger } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import { errorMessage } from "../../utils/framer";
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
  if (alertType === "danger") {
    return (
      <ErrorMessage
        as={motion.div}
        variants={errorMessage}
        initial="hidden"
        animate={showAlert ? "visible" : "exit"}
        exit={"exit"}
        className={"gap-1 flex item-center justify-center"}
      >
        <div className="flex fs-15 item-center justify-center flex1 text-extra-bold">
          {alertText}
        </div>
      </ErrorMessage>
    );
  }
  return (
    <MessageContent
      className={
        showAlert
          ? "gap-1 flex item-center justify-center justify-space active"
          : "gap-1 flex item-center justify-center justify-space"
      }
    >
      <AiFillCheckCircle fontSize={"24px"} color="green" />
      <div className="flex flex1 text-extra-bold text-dark">{alertText}</div>
      <div className="icon" onClick={handleClearAlert}>
        <RxCross1 />
      </div>
    </MessageContent>
  );
}
const ErrorMessage = styled(motion.div)`
  min-width: 200px;
  border-radius: 1px;
  padding: 10px 20px;
  min-height: 6rem;
  font-size: 15px;

  background: #8507071d;
  color: #b80909b1;
`;

const MessageContent = styled.div`
  min-width: 200px;
  padding: 1rem;
  box-shadow: var(--shadow);
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12) !important;
  background-color: #fff;
  position: fixed;
  z-index: 10000;
  left: 2%;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 600;
  color: var(--dark-1);
  transition: all 0.6s;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -1000%);
  opacity: 0;
  visibility: hidden;

  top: -5%;

  &.active {
    top: 5%;
    transform: translateX(-50%);
    opacity: 1;
    visibility: visible;
  }
  &.danger {
    background-color: var(--red);
    color: #fff;
    border-left: 4px solid var(--red);
  }
  @media (max-width: 780px) {
    min-width: 200px;
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
