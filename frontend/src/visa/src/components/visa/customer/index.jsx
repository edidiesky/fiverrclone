import React from 'react'
import styled from 'styled-components'


export default function CustomersIndex() {
  return (
    <CustomersIndexWrapper>
         <div className="container pt-4">
          <h3 className="text-extra-bold fs-40 text-8 mb-2">
            <span>We're not the only ones </span>
            <span className="word-rotator-words bg-primary">
              <b>happy</b>
            </span>
            <span> about Porto Template...</span>
          </h3>
          <h4 className="text-primary lead tall text-4">
            45,000 CUSTOMERS IN 100 COUNTRIES USE PORTO TEMPLATE. MEET OUR
            CUSTOMERS.
          </h4>
      </div>
    </CustomersIndexWrapper>
  )
}

const CustomersIndexWrapper = styled.div`
    width: 100%;
    .container {
        padding: 10rem 0;
        h3 {
            color: var(--dark-1);
            font-size: 40;
            line-height: 2;
            text-transform: none;
            text-align: center;
            width: 100%;
        }
        h4 {
            font-size: 2rem;
            font-weight: 400;
            color: var(--blue-2 );
            font-family: "Sintony", sans-serif;
            line-height: 2;
            text-transform: none;
            text-align: center;
            width: 100%;
        }
    }
`
