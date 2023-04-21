import React, {useEffect} from "react";
import styled from "styled-components";
import ChatIndex from "../components/chat/Chat";
import { Meta, Header } from "../components/common";

export default function Chat() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Meta title={"Messages"} />
      <ChatContainer className="chatContainer w-100 column gap-3 flex item-start">
        <Header type='chat' />
        <ChatWrapper>
          <ChatIndex />
        </ChatWrapper>
      </ChatContainer>
    </>
  );
}
const ChatContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: var(--light-grey);
  @media (max-width: 780px) {
    padding: 0;
    gap: 0;
  }
`;

const ChatWrapper = styled.div`
  width: 100%;
  background-color: var(--light-grey);
  overflow: hidden;
  place-items: center;
  display: grid;
  place-items: center;
  @media (max-width: 780px) {
    padding: 0;
    gap: 0;
  }
`;
