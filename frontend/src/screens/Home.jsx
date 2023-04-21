import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Meta } from '../components/common';
import HomeIndex from '../components/home';
import styled from 'styled-components'
import Header from '../components/home/header';
import { clearGigsAlert, getAllGigs } from '../Features';


export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(clearGigsAlert())
    dispatch(getAllGigs())
  }, []);
  // actions
  const dispatch = useDispatch()
  return (
    <>
     <Meta/>
     <Header/>
    <HomeContainer>
     <HomeIndex/>
    </HomeContainer>
    </>
  )
}


const HomeContainer = styled.div`
width:100%;
overflow:hidden;
`
