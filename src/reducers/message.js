import {
	FETCH_MESSAGE,MARK_ALL_MESSAGES
} from '../actions'

const message = (state={isMarked:false,hasReadMessage:[],hasNotReadMessage:[]},action) => {
	switch (action.type){
		case FETCH_MESSAGE:
		return {...state,hasReadMessage:action.hasReadMessage,hasNotReadMessage:action.hasNotReadMessage}
		case MARK_ALL_MESSAGES:
		return {...state,isMarked:action.isMarked}
		default :
		return state
	}
}

export default message