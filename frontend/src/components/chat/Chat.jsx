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
  /* background-color: #222; */
  background-color: #fff;

`;
