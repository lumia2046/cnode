import {
	REQUEST_PROFILE, RECEIVE_PROFILE, GET_COLLECTED_TOPICS
} from '../actions'

const initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).profile : {
	isFetching: false, collectedTopics: []
}

const profile = (state = initState, action) => {
	switch (action.type) {
		case REQUEST_PROFILE:
			return { ...state, isFetching: true }
		case RECEIVE_PROFILE:
			return { ...state, ...action.profile, isFetching: false }
		case GET_COLLECTED_TOPICS:
			return { ...state, collectedTopics: action.data }
		default:
			return state
	}
}

export default profile