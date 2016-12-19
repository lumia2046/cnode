import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetchAccess,fetchMessage,fetchProfile} from '../actions'
import Header from '../components/common/Header/Header'
import Content from '../components/Article/Content/Content'
import Reply from '../components/Article/Reply/Reply'
import getSize from '../utils/getSize'


class App extends Component {
  componentWillMount(){
    // console.log('componentWillMount')
    const {dispatch} = this.props;
    const LoadingAction = (accessToken,loginName) => {
      dispatch(fetchAccess(accessToken))
      dispatch(fetchMessage(accessToken))
      dispatch(fetchProfile(loginName))
    }
    if(window.localStorage.getItem('masterInfo')){
      let masterInfo = window.localStorage.getItem('masterInfo')
      masterInfo = JSON.parse(masterInfo)
      const accessToken = masterInfo.accessToken
      const loginName = masterInfo.loginName
      LoadingAction(accessToken,loginName)
    }else{
      const accessToken = '1cbc2a58-6c1b-426f-971d-070676fb849d'
      const loginName = 'lumia2046'
      LoadingAction(accessToken,loginName)
    }
  }
  componentWillReceiveProps(newProps){
    // console.log(newProps)
  }
  componentWillUnmount(){
    // console.log('componentWillUnmount')
  }

  render() {
      return (
          <div>{this.props.children}</div>
      )
  }
}

App.propTypes = {
  // currentTopicId: PropTypes.string.isRequired,
  // article: PropTypes.object.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const {login,profile} = state
  return {login,profile}
}


export default connect(mapStateToProps)(App)