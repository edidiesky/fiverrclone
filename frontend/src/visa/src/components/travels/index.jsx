import React from 'react'
import styled from 'styled-components'
// import ApartmentsIndex from './Apartment'
import HerosIndex from './Hero'
export default function TravelsIndex() {
  return (
    <TravelContainer>
      <HerosIndex/>
      {/* <ApartmentsIndex/> */}
    </TravelContainer>
  )
}

const TravelContainer = styled.div`
   width: 100%;
`