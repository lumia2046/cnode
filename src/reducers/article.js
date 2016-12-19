import {
  REQUEST_ARTICLE, RECEIVE_ARTICLE, CHANGE_CURRENT_TOPICID,SWITCH_SUPPORT,FETCH_COMMENT,RECORD_ARTICLE_SCROLLT
} from '../actions'

const article = (state={currentTopicId:''},action) => {
	let stateItem = state[action.topicId] || {}
	switch (action.type){
		case CHANGE_CURRENT_TOPICID:
		return {...state, currentTopicId:action.topicId}
		case SWITCH_SUPPORT:
		return {...state, switchSupportInfo:{replyId:action.replyId,index:action.index,success:action.success,action:action.action}}
		case FETCH_COMMENT:
		return {...state,isCommented:action.success}
		case RECORD_ARTICLE_SCROLLT:
		stateItem =  {...stateItem,scrollT:action.scrollT}
		return {...state,[action.topicId]:stateItem,currentTopicId:action.topicId}
		case REQUEST_ARTICLE:
		stateItem =  {...stateItem,isFetching:true}
		return {...state,[action.topicId]:stateItem,currentTopicId:action.topicId,isCommented:false}
		case RECEIVE_ARTICLE:
		stateItem = {...stateItem,isFetching:false,article:action.article}
		return {...state,[action.topicId]:stateItem}
		default :
		return state
	}
}

export default article