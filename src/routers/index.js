import React from 'react'
import Home from '../components/Home'
import Login from '../components/Login'
import App from '../App'
export default [
	{
		path: '/',
		component: App,
		routes: [
			{
				path: '/',
				exact: true,
				component: Home,
				key: 'home',
				loadData: Home.loadData,
			},
			{
				path: '/login',
				exact: true,
				component: Login,
				key: 'login',
			},
		],
	},
]
