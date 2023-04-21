import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {  } from '../../../Features'
import { useSelector, useDispatch } from 'react-redux'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'
const PaginationContainer = styled.div`
width:100%;
padding:1rem 0;
display:flex;
align-items:center;
justify-content:flex-end;
.PaginationWrapper {
	width:100%;
	display:flex;
	align-items:center;
	gap:1.5rem;
    justify-content:flex-end;
	
	button {
		border:none;
		outline:none;
		height:3rem;
		width:3rem;
		border:1.5px solid var(--grey-2);
		background:transparent;
		font-size:1.4rem;
		font-weight:600;
		color:var(--text-color);
		border-radius:3px;
		transition:all .2s;
		cursor:pointer;
		display:flex;
	    align-items:center;
	    justify-content:center;

	    svg {
	    	font-size:2rem;
	    }
		&.active, &:hover {
			border:2.2px solid var(--text-color);
			box-shadow:0 1rem 3rem rgba(0,0,0,.3);
		}
	}
	.btnWrapper {
		display:flex;
	align-items:center;
	gap:.6rem;
	}
}

`
export default function Pagination({ type }) {
	// body...
	const [pagindex, setPagIndex] = useState(1)
	const dispatch = useDispatch()
	const { userpage, totalUser, usernoOfpage } = useSelector(store => store.user)



	// // users pagination
	// const decreaseUserPageNumber = (index) => {
	// 	if (userpage <= usernoOfpage) {
	// 		dispatch(getUserPage(usernoOfpage))
	// 	} else {
	// 		dispatch(getUserPage(userpage - 1))
	// 	}
	// }
	// const increaseUserPageNumber = (index) => {
	// 	if (userpage >= usernoOfpage) {
	// 		dispatch(getUserPage(1))
	// 	} else {
	// 		dispatch(getUserPage(userpage + 1))
	// 	}
	// }
	// const handleUserPage = (index) => {
	// 	setPagIndex(index + 1)
	// 	dispatch(getUserPage(index))
	// }



	// if (type === 'users') {
	// 	return (
	// 		<PaginationContainer>
	// 			<div className='PaginationWrapper'>
	// 				<button onClick={() => decreaseUserPageNumber(userpage)}><BiChevronLeft /></button>
	// 				<button onClick={() => increaseUserPageNumber(userpage)}><BiChevronRight /></button>
	// 			</div>
	// 		</PaginationContainer>
	// 	)
	// }
}




