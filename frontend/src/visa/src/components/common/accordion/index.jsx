import React from 'react'
import styled from 'styled-components'
import AccordionCard from './AccordionCard'
import { AccordionData } from '../../../data/Accordion'
export default function Accordion() {
  return (
    <AccordionContainer>
      {AccordionData.map(x=> {
        return <AccordionCard key={x.id} x={x}/>
      })}
    </AccordionContainer>
  )
}

const AccordionContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
gap:1.4rem;

`
