import React, { useEffect } from "react";
import { Meta } from "../components/common";
import styled from "styled-components";
import { Header } from "../components/common";
import PassportIndex from "../components/passport";
export default function Pasport() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <>
      <Meta title={'Passport'}/>
      <PasportContainer>
        <PassportIndex />
      </PasportContainer>
     
    </>
  );
}

const PasportContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
