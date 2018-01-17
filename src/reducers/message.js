import {
	FETCH_MESSAGE, MARK_ALL_MESSAGES
} from '../actions'

const initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).message : {
	isMarked: false, hasReadMessage: [], hasNotReadMessage: []
}

const message = (state = initState, action) => {
	switch (action.type) {
		case FETCH_MESSAGE:
			return { ...state, hasReadMessage: action.hasReadMessage, hasNotReadMessage: action.hasNotReadMessage }
		case MARK_ALL_MESSAGES:
			return { ...state, isMarked: action.isMarked }
		default:
			return state
	}
}

export default message