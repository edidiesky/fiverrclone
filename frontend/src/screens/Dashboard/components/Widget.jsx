import React, {useState} from 'react'
import Styled from 'styled-components'
import {FaEye, FaMoneyCheck} from 'react-icons/fa'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {BiStats} from 'react-icons/bi'
import { useSelector, useDispatch } from "react-redux";

export default function Widget() {
	const [widgettab, setWidgetTab] = useState(1)
	const { totalProduct, isStatLoading } = useSelector((store) => store.product);
	const {  totalUser } = useSelector((store) => store.user);
	const WidgetData = [
		{
			id:1,
			title:'Total Sales',
			qty:'$100,357',
			icon:<RiMoneyDollarCircleLine/>,
			back:'#ff3333',
			percent:'2.6',
		},
		{
			id:2,
			title:'Visitors',
			qty:`${totalUser}`,
			icon:<FaEye/>,
			back:'#50fc61',
			percent:'-0.06',
		},
		{
			id:4,
			title:'Total Product',
			qty:`${totalProduct}`,
			icon:<BiStats/>,
			back:'#1457ed',
			percent:'+1.06',
		}
		]
		
	return (
		<WidgetWrapper>
		  {
		  	WidgetData.map((x, index)=> {
		  		return <div className={widgettab === x.id?'widgetCard active':"widgetCard"} key={x.id} onClick={()=> setWidgetTab(x.id)}>
		  		    <div className='Icons'>
		  		     {x.icon}
		  		    </div>
		  		   <h2><span className='span1'>{x.title}</span>{x.qty}</h2>
		  		</div>
		  	})
		  }
		</WidgetWrapper>
		)
}

const WidgetWrapper = Styled.div`
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(160px, 1fr));
grid-gap:2rem;
@media (max-width:780px) {
	grid-template-columns:1fr;
}

 .widgetCard {
 	padding:2rem 2.6rem;
 	background:var(--white);
 	display:flex;
 	flex-direction:column;
 	gap:1.8rem;
 	width:100%;
 	border-radius:10px;
 	transition:all .3s;
 	h4 {
 		font-size:1.3rem;
 		color:var(--grey-2);
 		font-weight:400;
 		.span2 {
 			color:var(--green);
 		}
 	}


 	h2 {
 		font-size:3.5rem;
 		color:var(--text-color);
 		font-weight:600;
		text-transform:uppercase;
 		.span1 {
 			display:block;
 			font-size:1.4rem;
 			color:var(--grey-2);
 			font-weight:400;
 			padding-bottom:1rem;
 		}
 	}

 	 .Icons {
 	 	width:5rem;
 	 	height:5rem;
 	 	position:relative;
 	 	display:flex;
 	 	align-items:center;
 	 	justify-content:center;
 	 	background:var(--blue-2);
 	 	border-radius:6px;
 	 	svg {
 	 		width:70%;
 	 		height:70%;
 	 		color:#fff;
 	 	}
 	 }
 	&.active, &:hover {
 		background:var(--blue-2);
 		.Icons {
 			background:#fff;
 			svg {
 				color:var(--blue-2);
 			}
 		}

 		h2, h4 {
 			color:var(--white);
 			.span2 {
 				color:var(--white);
 			}
 		}
 	}
 }
`