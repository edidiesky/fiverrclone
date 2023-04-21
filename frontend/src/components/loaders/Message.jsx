import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import {CgDanger} from 'react-icons/cg'

export default function Message({ form, alertText, alertType }) {
  return (
    <MessageContent
      className={
        alertText === "danger"
          ? "family1 gap-1 flex item-center justify-space active"
          : "family1 gap-1 flex item-center justify-space"
      }
    >
      <div className="icon">
        <CgDanger className='fs-18'/>
      </div>
      <div className="flex flex1"> Something went wrong try again</div>
      <div className="icon">
        <RxCross1 />
      </div>
    </MessageContent>
  );
}

const MessageContent = styled.div`
  min-width: 400px;
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
  font-size: 13px;
  font-weight: 700;
  color: var(--dark-1);
  &.active {
    border-left: 4px solid var(--red);
    color: var(--red);
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
    background-color: var(--light-grey);
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
