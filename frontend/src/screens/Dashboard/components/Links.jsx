import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsSlashLg } from 'react-icons/bs'

export default function Links({ step1, step2, step3, title2, title3, title4 }) {
  const [index, setIndex] = useState(0)
  return (
    <LinksContainer>
      {step1 ?
        <Link to={`/avada/Dashboard/`}
          className={step1 && !step2 && !step3 ? 'active' : ""}>
          Dashboard
        </Link>
        :
        <Link to={`/avada/Dashboard/${step1}`}
          className={step1 && step2 && step3 ? 'active' : ""} style={{ display: "none", color: "#ccc" }}>
          Dashboard
        </Link>
      }
      {step2 ?
        <Link to={`/avada/Dashboard/${step2}`}
          className={step1 && step2 && !step3 ? 'active' : ""}>
          / {title2}
        </Link>
        :
        <Link to={`/avada/Dashboard/${step2}`}
          className={step1 && step2 && !step3 ? 'active' : ""} style={{ display: "none", color: "#ccc" }}>
          / {title2}
        </Link>
      }
      {step3 ?
        <Link to={`/avada/Dashboard/${step2}/${step3}`}
          className={step1 && step2 && step3 ? 'active' : ""}>
          / {title3}
        </Link>
        :
        <Link to={`/avada/Dashboard/${step2}/${step3}`}
          className={step1 && step2 && step3 ? 'active' : ""} style={{ display: "none", color: "#ccc" }}>
          / {title3}
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
            font-size:1.4rem;
            font-weight:400;
            color:var(--grey-2);
            cursor: pointer;
            &.active {
            color:var(--blue-1);
            font-weight:600;
        }
            
        }
    
`
