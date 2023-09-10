import React from "react";
import styled from "styled-components";
import InboxIndex from "./inbox";

export default function ChatIndex() {
  return (
    <ChatIndexWrapper className="w-100 auto">
      <InboxIndex />
    </ChatIndexWrapper>
  );
}

const ChatIndexWrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  /* background-color: #222; */

`;
