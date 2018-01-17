import {
	GET_COLLECTED_TOPICS
} from '../actions'

const initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).collectedTopics : {
	success: false
}


const collectedTopics = (state = initState, action) => {
	switch (action.type) {
		case GET_COLLECTED_TOPICS:
			return { ...state, success: action.success, data: action.data, userName: action.userName }
		default:
			return state
	}
}

export default collectedTopics