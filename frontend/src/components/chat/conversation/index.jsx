import React, { useState } from "react";
import styled from "styled-components";
import Left from "./Left";
import Right from "./Right";
import Top from "./Top";

export default function ConversationIndex() {
  const [onsidebar, setOnSidebar] = useState(true);
  return (
    <ConversationIndexWrapper>
      <div className="wrapper">
        <Left setOnSidebar={setOnSidebar} onsidebar={onsidebar}  />
        {onsidebar && <Right setOnSidebar={setOnSidebar} />}
      </div>
    </ConversationIndexWrapper>
  );
}

const ConversationIndexWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  position: sticky;
  top: 0;
  .wrapper {
    display: flex;
    height: 100%;
  }
`;
