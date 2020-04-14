import { CHANGE_LIST, CHANGE_VISIT_TIME } from './constants'

const defaultState = {
	name: 'my name',
	list: [],
	visitTime: 0,
}

export default (state = defaultState, action) => {
	switch (action.type) {
		case CHANGE_LIST:
			return {
				...state,
				list: action.list,
			}
		case CHANGE_VISIT_TIME:
			return {
				...state,
				visitTime: ++state.visitTime,
			}
		default:
			return state
	}
}
