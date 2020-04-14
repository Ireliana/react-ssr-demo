import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import routers from '../routers'
import { Provider } from 'react-redux'
import { getClientStore } from '../store'
import { renderRoutes } from 'react-router-config'

const App = () => {
	return (
		<Provider store={getClientStore()}>
			<BrowserRouter>
				{/* {routers.map((route) => (
					<Route {...route} />
				))} */}
				{renderRoutes(routers)}
			</BrowserRouter>
		</Provider>
	)
}

ReactDom.hydrate(<App />, document.getElementById('root'))
