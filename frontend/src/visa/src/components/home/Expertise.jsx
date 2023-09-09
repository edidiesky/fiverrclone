import React from 'react'
import styled from 'styled-components'

export default function Newsletter() {
 
  return (
    <NewsletterContent>
        <div className="newsletterWrapper">
            <div className="newsletterLeft" data-aos="fade-right" data-aos-duration='800'>
                <h2>Trusted Buying Experience
                    <span>Incididunt labore magna aliqua veniams</span>
                </h2>

                <button className="startBtn">Get Started</button>
            </div>
            
        </div>
    </NewsletterContent>    
  )
}

const NewsletterContent = styled.div`
width:100%;
margin:0 auto;
max-width:1600px;
z-index:50;
position:relative;
background:var(--blue-2);
 .newsletterWrapper {
    width:90%;
    margin:0 auto;
    padding:4rem;
    .newsletterLeft {
        width: 100%;
        display:flex;
        justify-content: space-between;
        gap:3rem;
        align-items:center;
        h2 {
            font-size:4rem;
            font-weight:300;
            color:#fff;

            span {
                display:block;
                font-size:2rem;
                padding:2rem 0;
                font-weight:300;
                line-height: 34px;
            }
        }
        .startBtn {
                border:none;
                outline:none;
                padding:1.4rem 3.5rem;
                font-size:1.6rem;
                color:var(--blue-2);
                background:#fff;
                &:hover {
                    opacity:.8;
                }
        }
    }
 }
`
