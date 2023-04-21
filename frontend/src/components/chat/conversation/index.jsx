import React from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";
import Top from "./Top";

export default function ConversationIndex() {
  return (
    <ConversationIndexWrapper>
      <Top />
      <div className="wrapper">
        <Left />
        <Right />
      </div>
    </ConversationIndexWrapper>
  );
}

const ConversationIndexWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 18vw;
    width: 100%;
    height: 100%;
    @media (max-width:780px) {
      grid-template-columns: 1fr;
    }
  }
`;
