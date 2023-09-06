import React from 'react'
import styled from 'styled-components'
import {FaStarHalfAlt, FaStar} from 'react-icons/fa'
import {BsStar, BsStarFill} from 'react-icons/bs'


export default function Rating({value, type}) {
	// body...
	if(type ==='review') {
		return <RatingContent>
	        <div className='RatingContainer'>
	          <span>{value >= 1 ? <BsStarFill/>: value< 0.5? <BsStar/> : <BsStarFill/> }</span>
	        </div>
	       </RatingContent>
	}
	return <RatingContent>
	        <div className='RatingContainer'>
	          <span>{value >= 1 ? <FaStar/>: value< 0.5? <FaStarHalfAlt/> : <FaStar/> }</span>
	        </div>
	       </RatingContent>
}

const RatingContent = styled.div`
.RatingContainer {
	gap:.5rem;
	display:flex;
	align-items:center;
	gap:.4rem;
	span {
		svg {
			color:var(--grey-1);
			font-size: 16px;
		}
	}
	
}
h3 {
		font-size:1.4rem;
		color:var(--grey);
		font-weight:600;
	}

`