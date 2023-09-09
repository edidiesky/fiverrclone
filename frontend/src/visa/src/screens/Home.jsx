import React, { useEffect } from 'react'
import { Meta } from '../components/common';
import HomeIndex from '../components/home';
import styled from 'styled-components'
import { Header} from "../components/common";
export default function Home() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <HomeContainer>
     <Meta/>
    <HomeContainer>
     <HomeIndex/>
    </HomeContainer>
    </HomeContainer>
  )
}


const HomeContainer = styled.div`
width:100%;
overflow: hidden;
min-height: 100vh;
  margin: 0;
  padding: 0;
`
