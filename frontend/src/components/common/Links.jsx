import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BiChevronRight } from 'react-icons/bi'

export default function Links({ step1, step2, step3, title2, title3, title4, title1 }) {
  const [index, setIndex] = useState(0)
  return (
    <LinksContainer>
      {step1 ?
        <Link to={`/`}
          className={step1 && !step2 && !step3 ? 'active fs-16 text-grey' : "fs-16 text-grey"}>
           {title1 || step1}
        </Link>
        :
        <Link to={`${step1}`}
          className={step1 && step2 && step3 ? 'active fs-18' : "fs-18"} style={{ display: "none", color: "#ccc" }}>
           {title1 || step1}
        </Link>
      }
      {step2 ?
        <Link to={`/categories/${step2}`}
          className={step1 && step2 && !step3 ? 'active fs-18' : "fs-16 text-grey"}>
          <BiChevronRight className='fs-20'/> {title2 || step2}
        </Link>
        :
        <Link to={`/categories/${step2}`}
          className={step1 && step2 && !step3 ? 'active fs-18' : "fs-18"} style={{ display: "none", color: "#ccc" }}>
          <BiChevronRight className='fs-20'/> {title2 || step2}
        </Link>
      }
      {step3 ?
        <Link to={`/categories/${step2}/${step3}`}
          className={step1 && step2 && step3 ? 'active fs-18' : "fs-16 text-grey"}>
          <BiChevronRight className='fs-20'/> {title3 || step3}
        </Link>
        :
        <Link to={`/categories/${step2}/${step3}`}
          className={step1 && step2 && step3 ? 'active fs-16 text-grey' : "fs-18"} style={{ display: "none", color: "#ccc" }}>
          <BiChevronRight className='fs-20'/> {title3 || step3}
        </Link>
      }
    </LinksContainer>
  )
}

const LinksContainer = styled.div`
width:100%;
        display:flex;
        align-items:center;
        gap:.8rem;
        a {
            display:flex;
             align-items:center;
             gap:.8rem;
            text-align:start;
            font-size:1.8rem;
            font-weight:400;
            color:var(--blue-1);
            cursor: pointer;
            /* &.active {
            z-index:-1;
        } */
            
        }
    
`
