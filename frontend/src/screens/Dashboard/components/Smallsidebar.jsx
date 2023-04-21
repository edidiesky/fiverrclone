import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { RxCross2 } from 'react-icons/rx'
import {
    BiCreditCard
} from 'react-icons/bi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux'
import {
    HiUsers
} from 'react-icons/hi'
import { MdDashboard,MdAddBusiness } from 'react-icons/md'
import { BsCollection } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { FiSettings } from 'react-icons/fi'
import {
    offSidebar
} from '../../../Features'

export const sidebarData = [
    {
        id: 1,
        "icon1": <MdDashboard />,
        title: 'Dashboard',
        path: '/',
    },
    {
        id: 3,
        icon1: <MdAddBusiness />,
        title: "Add Products",
        path: "product/add",
      },
      { id: 4, icon1: <BsCollection />, title: "Orders", path: "order" },
      { id: 5, icon1: <HiUsers />, title: "Customers", path: "users" },
    { id: 5, "icon1": <CgProfile />, title: 'Profile', path: 'profile' },

]


export default function SmallSidebar() {
    const dispatch = useDispatch()
    const { sidebar } = useSelector(store => store.toggle)
    return (
        <SmallSidebarContent className={sidebar ? 'active' : ""}>
            <div className="barWrapper1">
                <RxCross2 onClick={() => dispatch(offSidebar())} />
            </div>
            <div className="smallSidebarWrapper">
                {
                    sidebarData.map(x => {
                        return <NavLink to={`${x.path}`} className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        } key={x.id} onClick={() => dispatch(offSidebar())}>
                            {x.title}
                        </NavLink>
                    })
                }
            </div>
        </SmallSidebarContent>
    )
}

const SmallSidebarContent = styled.div`
    position: fixed;
    left: 0;
    z-index: 2200;
    transition: all .6s;
    width:280px;
background:var(--white);
height:100vh;
top:0%;
left: -100%;
box-shadow:0 1rem 2rem rgba(0,0,0,.3);
    &.active {
        left:0;
    }
    @media (min-width:750px) {
        display:none;
    }
    .barWrapper1 {
        width:100%;
        display:flex;
        align-items:flex-end;
        justify-content:flex-end;
        padding:2rem 3rem;
        cursor:pointer;
        @media (min-width:780px) {
            display:none;
        }
  svg {
    width:3rem;
    height:3rem;
    color:#222;
  }
  }
    .smallImage {
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    .smallSidebarWrapper {
        width: 90%;
        display: flex;
        flex-direction: column;
        z-index: 400;
        margin:0 auto;
        gap:2rem;
        a {
			padding:9px 18px;
			font-size:1.3rem;
			height:4.2rem;
			text-transform:uppercase;
			font-weight:400;
			margin:0 auto;
			width:100%;
			color:var(--grey-1);
			display:flex;
			align-items:center;
			justify-content:flex-start;
			gap:1.4rem;
			&:hover {
				background:#163765f2;
				color:#fff;
			}
			svg {
				font-size:2rem;
			}
			&.active {
				background:var(--blue-2);
				position:relative;
				border-radius:4px;
				color:var(--white);
			}
		}
       }
`