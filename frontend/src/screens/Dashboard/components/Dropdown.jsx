import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Dropdown({ x, onDrop }) {
	return (
		<div className={onDrop ? 'droplist active' : 'droplist'}>
			<NavLink to={`/dashboard/${x.path}`}
				className={({ isActive }) =>
					isActive ? 'nav-links active' : 'nav-links'
				}>
				{x.title}
			</NavLink>
		</div>
	)
}