import routes from '../routers'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { getStore } from '../store'
import { renderRoutes, matchRoutes } from 'react-router-config'

const render = async (req) => {
	const store = getStore()
	const matchedRoutes = matchRoutes(routes, req.path)
	const promises = []
	matchedRoutes.forEach((item) => {
		if (item.route.loadData) {
			promises.push(item.route.loadData(store))
		}
	})
	await Promise.all(promises)
	const context = {
		css: [],
	}
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={context}>
				{/* {routes.map((route) => (
					<Route {...route} />
				))} */}
				{renderRoutes(routes)}
			</StaticRouter>
		</Provider>
	)
	const cssStr = context.css.length ? context.css.join('\n') : ''
	return `
    <html>
        <head>
            <title>ssr</title>
        </head>
        <body>
            <div id="root">${content}</div>
            <script>
                window._inject={
                    store: ${JSON.stringify(store.getState())}
                }
            </script>
            <script src="/index.js"></script>
        </body>
    </html>
    `
}
export default render
