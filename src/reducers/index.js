import { combineReducers } from 'redux'
import homePage from './homePage'
import article from './article'
import login from './login'
import profile from './profile'
import message from './message'
import publishTopic from './publishTopic'
import hashUrl from './hashUrl'
import fetchError from './fetchError'

const rootReducer = combineReducers({
    homePage,
    article,
    login,
    profile,
    publishTopic,
    message,
    hashUrl,
    fetchError
})

export default rootReducer