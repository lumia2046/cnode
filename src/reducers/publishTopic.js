import {
	PUBLISH_TOPIC
} from '../actions'

const initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).publishTopic : {
	success: false
}


const publishTopic = (state = initState, action) => {
	switch (action.type) {
		case PUBLISH_TOPIC:
			return { ...state, success: action.success, topicId: action.topicId }
		default:
			return state
	}
}

export default publishTopic



