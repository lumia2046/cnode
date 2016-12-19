import { combineReducers } from 'redux'
import homePage from './homePage'
import article from './article'
// import currentRouter from './currentRouter'
import login from './login'
import profile from './profile'
import message from './message'
import publishTopic from './publishTopic'
// import collectedTopics from './collectedTopics'

const rootReducer = combineReducers({homePage,article,login,profile,publishTopic,message})

export default rootReducer