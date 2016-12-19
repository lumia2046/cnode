import {
  SELECT_TAB, RECORD_SCROLLT,
  REQUEST_TOPICS, RECEIVE_TOPICS
} from '../actions'


const selectedTab = (state, action) => {
  switch (action.type) {
    case SELECT_TAB:
      return action.tab
    default:
      return state
  }
}

// 当组件第一次发出REQUEST_TOPICS后，需要对其返回的state进行初始化，否则没有topics等属性会报错
function tabDataItem (state = {isFetching:false,page:0,scrollT:0,topics:[]}, action) {
  switch (action.type) {
    case REQUEST_TOPICS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_TOPICS:
      if(state.page < action.page){
        let topics = state.topics
        action.topics = topics.concat(action.topics)
      }
      return {
        ...state,
        isFetching: false,
        page:action.page,
        topics:action.topics,
        limit:action.limit
      }
    case RECORD_SCROLLT:
    return {
      ...state,
      scrollT:action.scrollT
    }
    default:
      return state
  }
}

const tabData = (state = { }, action) => {
  switch (action.type) {
    case RECEIVE_TOPICS:
    case REQUEST_TOPICS:
    case RECORD_SCROLLT:
      return {
        ...state,
        [action.tab]: tabDataItem(state[action.tab], action)
      }
    default:
      return state
  }
}

const homePage = (state={selectedTab:'all',tabData:{}},action) => {
  if(state){
  	const sTab = selectedTab(state.selectedTab,action);
  	const tData = tabData(state.tabData,action);
  	// 返回的一定要是一个新的对象，如果只是改变原来的state,返回的还是原来的state对象,就无法被store.subscribe监听到，从而不会对组件状态进行更新
  	return {...state, selectedTab:sTab,tabData:tData}
  }
  return state
  
}

export default homePage;

