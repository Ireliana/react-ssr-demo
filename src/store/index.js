import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as homeReducer } from './Home'

const reducer = combineReducers({
	home: homeReducer,
})
export const getStore = () => {
	return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
	return createStore(
		reducer,
		window._inject.store || {},
		applyMiddleware(thunk)
	)
}
