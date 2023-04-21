import React, { useState } from "react";
import styled from "styled-components";
import ConversationIndex from "../conversation";
import InboxLeft from "./Left";
import InboxRight from "./Right";

export default function InboxIndex() {
  const [active, setActive] = useState(false);
  const ToggleState = () => {
    setActive(!active);
  };
  return (
    <InboxIndexWrapper>
      <InboxLeft toggle={ToggleState} />
      {!active ? <InboxRight /> : <ConversationIndex />}
    </InboxIndexWrapper>
  );
}

const InboxIndexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 25vw 1fr;
  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;
