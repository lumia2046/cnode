import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetchAccess,fetchMessage,logout,fetchArticle,fetchProfile} from '../actions'
import Header from '../components/common/Header/Header'
import Profile from '../components/common/Profile/Profile'
import getSize from '../utils/getSize'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      toggleOn:true
    }
  }
  componentWillReceiveProps(newProps){
    let {succeed,loginName,accessToken,dispatch,profile} = newProps;
    if(succeed && !profile.isFetching && profile.loginname !== loginName){
      if(this.state.toggleOn && !window.localStorage.getItem('masterInfo')){
        accessToken = accessToken.trim()
        loginName = loginName.trim()
        let masterInfo = {accessToken,loginName}
        masterInfo = JSON.stringify(masterInfo)
        window.localStorage.setItem('masterInfo',masterInfo)
      }
      dispatch(fetchProfile(loginName))
      dispatch(fetchMessage(accessToken))
    }
  }
  onToggle = () => {
    this.setState({
      toggleOn:!this.state.toggleOn
    })
  }
  render(){
    let {dispatch,article,profile,failedMessage,succeed,loginName,loginId,accessToken,collectedTopics} = this.props;
    if(loginName !== profile.loginname && window.sessionStorage.masterProfile){
      profile = JSON.parse(window.sessionStorage.masterProfile)
      collectedTopics = profile.collectedTopics
    }
    const masterInfo = window.localStorage.getItem('masterInfo') ? true : false
    return (
      <div>
        <Header isFetching={profile.loginname?false:true} title='个人中心' showBack={false}/>
        <div style={{textAlign:'center',marginTop:100}}>
          {!masterInfo && !succeed && 
            <MuiThemeProvider>
              <div>
                <div>
                  <TextField hintText="请输入Access Token" floatingLabelText="请输入Access Token" ref='input'/>
                </div>
                <div style={{display:'inline-block',margin:'0 auto'}}>
                  <Toggle label="记住登陆信息" defaultToggled={true} onToggle={this.onToggle} style={{maxWidth: 200}}/>
                </div>
                <div>
                    <RaisedButton  label="登陆" primary={true} onClick={() => {
                    const input = this.refs.input.input.value
                    if(!input.trim()){
                      return null;
                    }
                    dispatch(fetchAccess(input))
                  }}/>
                </div>
              </div>
            </MuiThemeProvider>
          }
          {!succeed && failedMessage && 
            <h2 style={{color:'red'}}>{failedMessage}</h2>
          }
          {succeed && !profile.loginname &&
            <MuiThemeProvider>
              <CircularProgress size={60} thickness={7} />
            </MuiThemeProvider>
          }
          {succeed && profile.loginname  &&
            <div>
              <Profile {...({collectedTopics,profile,dispatch,fetchArticle,article})}/>
            </div>
          }
        </div>
      </div>
  )
  }
}


function mapStateToProps(state) {
  const {article,profile,login,currentRouter} = state;
  const {failedMessage,succeed,loginName,loginId,accessToken} = login;
  const {collectedTopics} = profile
  return {article,profile,succeed,loginName,loginId,accessToken,failedMessage,collectedTopics}
}

// 用connect方法连接HomePage组件，实际上是在HomePage组件上加上了Connect(HomePage)这个父组件，HomePage里有关Connect的state变化的props就是通过mapStateToProps设置的
// connect方法的第二个参数如果不传的话就会默认将store.dispatch默认作为了dispatch参数传进HomePage的props，所以HomePage的props里就有一个dispatch
export default connect(mapStateToProps)(Login)