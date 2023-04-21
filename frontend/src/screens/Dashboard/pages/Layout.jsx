import React, { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route, Outlet } from 'react-router-dom'
import {
	Header,
} from '../components'
import Sidebar from './Sidebar'
const LayoutWrapper = styled.div`

background:var(--grey-4);
min-height:100vh;
width:100%;
display:flex;
.LayoutContainer {
	width:100%;
		.OutletWrapper{
		    width:100%;
		    padding-bottom:3.5rem;
		}
	
}

`

export default function Layout() {
	return (
		<LayoutWrapper>
			<Sidebar />
			<div className='LayoutContainer'>
				<div className='OutletWrapper'>
					<Outlet />
				</div>
			</div>
		</LayoutWrapper>
	)
}