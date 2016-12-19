import fetch from 'isomorphic-fetch'

export const REQUEST_TOPICS = 'REQUEST_TOPICS'
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS'
export const SELECT_TAB= 'SELECT_TAB'
export const RECORD_SCROLLT='RECORD_SCROLLT'
export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'
export const CHANGE_CURRENT_TOPICID = 'CHANGE_CURRENT_TOPICID'
export const CURRENT_ROUTER = 'CURRENT_ROUTER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGOUT = 'LOGOUT'
export const REQUEST_PROFILE = 'REQUEST_PROFILE'
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
export const SWITCH_SUPPORT = 'SWITCH_SUPPORT'
export const FETCH_COMMENT = 'FETCH_COMMENT'
export const SWITCH_COLLECTED = 'SWITCH_COLLECTED'
export const RECORD_ARTICLE_SCROLLT = 'RECORD_ARTICLE_SCROLLT'
export const PUBLISH_TOPIC = 'PUBLISH_TOPIC'
export const FETCH_MESSAGE = 'FETCH_MESSAGE'
export const MARK_ALL_MESSAGES = 'MARK_ALL_MESSAGES'
export const GET_COLLECTED_TOPICS = 'GET_COLLECTED_TOPICS'
// HomePage
export const selectTab = tab => ({
  type:SELECT_TAB,
  tab
})

const requestTopics = tab => ({
  type:REQUEST_TOPICS,
  tab
})

const receiveTopics = (tab,topics,page,limit) => ({
  type:RECEIVE_TOPICS,
  tab,
  topics,
  page,
  limit
})

export const fetchTopics = (tab,page=1,limit=20) => {
  return dispatch => {
    dispatch(requestTopics(tab))
    fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=${limit}`)
    .then(response => response.json())
    .then(json => dispatch(receiveTopics(tab,json.data,page,limit)))
  }
}

export const recordScrollT = (tab,scrollT) => {
  return ({
    type:RECORD_SCROLLT,
    tab,
    scrollT
  })
}


// Article
const requestArticle = (topicId) => ({
  type:REQUEST_ARTICLE,
  topicId
})
const receiveArticle = (topicId,article) => ({
  type:RECEIVE_ARTICLE,
  topicId,
  article
})
const changeCurrentTopicId = topicId => ({
  type:CHANGE_CURRENT_TOPICID,
  topicId
})

export const recordArticleScrollT = (topicId,scrollT) => ({
  type:RECORD_ARTICLE_SCROLLT,
  topicId,
  scrollT
})
export const fetchArticle = (topicId,request=true) => {
  return dispatch => {
    if(request){
      dispatch(requestArticle(topicId))
      fetch(`https://cnodejs.org/api/v1/topic/${topicId}`)
      .then(response => response.json())
      .then(json => dispatch(receiveArticle(topicId,json.data)))
    }else{
      dispatch(changeCurrentTopicId(topicId))
    }
  }
}

export const switchSupport = (accessToken,replyId,index) => {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/reply/${replyId}/ups`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `accesstoken=${accessToken}`
        })
    .then(response => response.json())
    .then(json => dispatch({
      type:SWITCH_SUPPORT,
      replyId,
      index,
      success:json.success,
      action:json.action
    }))
  }
}

export const fetchComment = (accessToken,topicId,content,replyId) => {
  return dispatch => {
    const postConent = replyId ? `accesstoken=${accessToken}&content=${content}&replyId=${replyId}`:`accesstoken=${accessToken}&content=${content}`
    fetch(`https://cnodejs.org/api/v1/topic/${topicId}/replies`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: postConent
        })
    .then(response => response.json())
    .then(json => dispatch({
      type:FETCH_COMMENT,
      success:json.success,
      replyId:json.reply_id
    }))
  }
}

export const switchCollected = (isCollected,accessToken,articleId) => {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topic_collect/${isCollected?'de_collect':'collect'}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `accesstoken=${accessToken}&topic_Id=${articleId}`
        })
    .then(response => response.json())
    .then(json => dispatch({
      type:SWITCH_COLLECTED,
      success:json.success
    }))
  }
}

// Footer
export const setCurrentRouter = router => ({
  type:CURRENT_ROUTER,
  router
})

// Login
export const fetchAccess = accessToken => {
  return dispatch => {
    fetch('https://cnodejs.org/api/v1/accesstoken', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: `accesstoken=${accessToken}`
                    })
                .then(response => response.json())
                .then(json => {
                    if (json.success){
                        dispatch(loginSucceed(json.loginname,json.id,accessToken))
                    } else {
                        dispatch(loginFailed(json.error_msg));
                    }
                 })
  }
}

const loginSucceed = (loginName,loginId,accessToken) => ({
  type:LOGIN_SUCCESS,
  loginName,
  loginId,
  accessToken
})

const loginFailed = failedMessage => ({
  type:LOGIN_FAILED,
  failedMessage
})

export const logout = () => ({
  type:LOGOUT
})


// profile
const requestProfile = loginname => ({
  type:REQUEST_PROFILE,
  loginname
})
const receiveProfile = (loginname,profile) => ({
  type:RECEIVE_PROFILE,
  loginname,
  profile
})
const getCollectedTopics = (userName) => {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/topic_collect/${userName}`)
    .then(response => response.json())
    .then(json => dispatch({
      type:GET_COLLECTED_TOPICS,
      success:json.success,
      data:json.data
    }))
  }
}
export const fetchProfile = (loginname) => {
  return dispatch => {
    dispatch(requestProfile(loginname))
    dispatch(getCollectedTopics(loginname))
    fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
    .then(response => response.json())
    .then(json => dispatch(receiveProfile(loginname,json.data)))
  }
}

// publishTopic
export const fetchPublishTopic = (accessToken,tab,title,content) => {
  return dispatch => {
    const postConent =  `accesstoken=${accessToken}&tab=${tab}&content=${content}&title=${title}`
    fetch(`https://cnodejs.org/api/v1/topics`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: postConent
        })
    .then(response => response.json())
    .then(json => dispatch({
      type:PUBLISH_TOPIC,
      success:json.success,
      topicId:json.topic_id
    }))
  }
}

// message
export const fetchMessage = (accessToken) => {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/messages?accesstoken=${accessToken}`)
    .then(response => response.json())
    .then(json => dispatch({
      type:FETCH_MESSAGE,
      hasReadMessage:json.data.has_read_messages,
      hasNotReadMessage:json.data.hasnot_read_messages
    }))
  }
}

export const markAllMessages = (accessToken) => {
  return dispatch => {
    fetch(`https://cnodejs.org/api/v1/message/mark_all`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `accesstoken=${accessToken}`
        })
    .then(response => response.json())
    .then(json => dispatch({
      type:MARK_ALL_MESSAGES,
      isMarked:json.success
    }))
  }
}