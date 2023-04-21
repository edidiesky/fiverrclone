import React from "react";
import styled from "styled-components";
import InboxIndex from "./inbox";

export default function ChatIndex() {
  return (
    <ChatIndexWrapper className="w-90 auto">
      <InboxIndex />
    </ChatIndexWrapper>
  );
}

const ChatIndexWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fff;
  height: 80vh;
  @media (max-width: 980px) {
    width: 100%;
    border: none;
    height: 86vh;
  }
`;
