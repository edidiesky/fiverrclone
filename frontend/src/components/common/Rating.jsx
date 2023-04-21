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
	          <span>{value >= 2 ? <BsStarFill/>: value<1.5? <BsStar/> : <BsStarFill/> }</span>
	          <span>{value >= 3 ? <BsStarFill/>: value<2.5? <BsStar/> : <BsStarFill/> }</span>
	          <span>{value >= 4 ? <BsStarFill/>: value<3.5? <BsStar/> : <BsStarFill/> }</span>
	          <span>{value >= 5 ? <BsStarFill/>: value<4.5? <BsStar/> : <BsStarFill/> }</span>
	          
	        </div>
	       </RatingContent>
	}
	return <RatingContent>
	        <div className='RatingContainer'>
	          <span>{value >= 1 ? <FaStar/>: value< 0.5? <FaStarHalfAlt/> : <FaStar/> }</span>
	          <span>{value >= 2 ? <FaStar/>: value<1.5? <FaStarHalfAlt/> : <FaStar/> }</span>
	          <span>{value >= 3 ? <FaStar/>: value<2.5? <FaStarHalfAlt/> : <FaStar/> }</span>
	          <span>{value >= 4 ? <FaStar/>: value<3.5? <FaStarHalfAlt/> : <FaStar/> }</span>
	          <span>{value >= 5 ? <FaStar/>: value<4.5? <FaStarHalfAlt/> : <FaStar/> }</span>
	          
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
			color:var(--yellow);
		}
	}
	
}
h3 {
		font-size:1.4rem;
		color:var(--grey);
		font-weight:600;
	}

`