import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<Link to="/">首页</Link>
			<Link to="/login">登录页</Link>
			<Link to="/404">not found</Link>
		</header>
	)
}
export default Header
