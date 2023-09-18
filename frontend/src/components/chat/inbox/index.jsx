import React, { useState } from "react";
import styled from "styled-components";
import ConversationIndex from "../conversation";
import InboxLeft from "./Left";

export default function InboxIndex() {
  return (
    <InboxIndexWrapper>
      <InboxLeft />
      <ConversationIndex />
    </InboxIndexWrapper>
  );
}

const InboxIndexWrapper = styled.div`
  width: 97%;
  margin: 0 auto;
  height: 76vh;
  display: flex;
  align-items: flex-start;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
