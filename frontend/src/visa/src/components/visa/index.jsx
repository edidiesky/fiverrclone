import React from 'react'
import Mapindex from './map'
import Mainindex from './main'
import Banner1index from './banner1'
import styled from 'styled-components'

export default function VisaIndex() {
  return (
    <ContactContainer> 
      <Mainindex/>
      <Mapindex/>
      <Banner1index/>
    </ContactContainer>
  )
}
const ContactContainer = styled.div`
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

