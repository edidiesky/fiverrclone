import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { Meta } from "../components/common";
import TravelsIndex from "../components/travels";

export default function Travels() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <>
      <Meta title={"Travels"} />
      <TravelContainer>
        {/* <TravelsIndex /> */}
      </TravelContainer>
    </>
  );
}

const TravelContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
  