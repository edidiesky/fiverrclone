import React, { useEffect } from 'react'
import styled from "styled-components";
import AgentsIndex from '../components/agents';
import { Header, Meta } from '../components/common';

export default function Agents() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <>
    <Meta title={'About'}/>
    <AgentsContainer>
      <AgentsIndex/>
    </AgentsContainer>
    </>
  )
}

const AgentsContainer = styled.div`
  width: 100%;
  overflow: hidden;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;
