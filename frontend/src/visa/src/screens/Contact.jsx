import React, { useEffect } from 'react'
import styled from 'styled-components';
import {Meta } from '../components/common';
import ContactIndex from '../components/contact';

export default function Contact() {
  useEffect(()=> {
    window.scrollTo({top:0, left:0, behavior:'smooth'})
  }, [])
  return (
    <>
    <Meta title={'Contact'}/>
    <ContactContainer>
      <ContactIndex/>
    </ContactContainer>
    </>
  )
}


const ContactContainer = styled.div`
  width: 100%;
  overflow: hidden;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;


