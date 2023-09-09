import React from "react";
import styled from "styled-components";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";
export default function AccordionCard({ x }) {
  const [toggle, setToggle] = useState(false);
  return (
    <AccordionCardWrapper>
      <div
        className={toggle ? "accordionCardTop active" : "accordionCardTop"}
        onClick={() => setToggle(!toggle)}
      >
        <h3>{x.title}</h3>
        <div className="toggleBtn">{toggle ? <BiMinus /> : <BiPlus />}</div>
      </div>
      <div className={toggle ? "accordionBottom active" : "accordionBottom"}>
        <p>{x.response}</p>
      </div>
    </AccordionCardWrapper>
  );
}

const AccordionCardWrapper = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 40px;
  border-top-right-radius: 40px;
  &:hover {
    cursor: pointer;
    background-color: transparent;
    .accordionCardTop {
      background-color: transparent;

      .toggleBtn {
        svg {
          color: var(--blue-2);
        }
      }
    }
  }

  .accordionBottom {
    max-height: 0;
    width: 100%;
    transition: all 0.6s;
    &.active {
      max-height: 28rem;
    }
    p {
      font-size: 1.8rem;
      color: var(--dark-1);
      font-weight: 400;
      width: 90%;
      padding: 2rem;
    }
  }
  .accordionCardTop {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 3rem;
    border-radius: 40px;
    &.active {
      background-color: var(--blue-2);
      .toggleBtn {
        svg {
          color: #fff;
        }
      }
      h3 {
        color: #fff;
      }
    }
    .toggleBtn {
      width: 4rem;
      height: 4rem;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 70%;
        height: 70%;
        color: var(--blue-2);
      }
    }
    h3 {
      font-size: 2.1rem;
      width: 100%;
      font-weight: 600;
      color: var(--blue-2);
      text-transform: none;
    }
  }
`;
