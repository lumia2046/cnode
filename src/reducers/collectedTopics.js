import {
  GET_COLLECTED_TOPICS
} from '../actions'

const collectedTopics = (state={success:false},action) => {
	switch (action.type){
		case GET_COLLECTED_TOPICS:
		return {...state,success:action.success,data:action.data,userName:action.userName}
		default :
		return state
	}
}

export default collectedTopics