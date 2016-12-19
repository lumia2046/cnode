import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import prefix from '../utils/routePrefix'
import {fetchArticle,fetchPublishTopic} from '../actions'
import Header from '../components/common/Header/Header'
import Dialog from '../components/common/Dialog'
import LinkToLogin from '../components/common/LinkToLogin/LinkToLogin'
import Form from '../components/PublishTopic/Form/Form'


class PublishTopic extends Component {
  constructor(){
    super();
    this.state = {
      isOpen:false,
      isFetching: false,
      titleErr:false,
      contentErr:false
    }
  }

  componentWillReceiveProps(newProps){
    const {publishTopic,dispatch} = newProps;
    if(!this.props.publishTopic.topicId || this.props.publishTopic.topicId !== publishTopic.topicId){
      this.setState({isFetching:false})
      dispatch(fetchArticle(publishTopic.topicId))
    }
  }

  showDialog() {
    this.setState({
      isOpen:true,
      isFetching:true
    })
  }
  close = () => {
    this.setState({
      isOpen:false
    })
  }

  ifTitleErr(boolean) {
    this.setState({
      titleErr: boolean
    })
  }
  ifContentErr(boolean) {
    this.setState({
      contentErr: boolean
    })
  }
  render(){
    const {dispatch,publishTopic,currentRouter,login} = this.props;
    const ifTitleErr = this.ifTitleErr.bind(this)
    const ifContentErr = this.ifContentErr.bind(this)
    const showDialog = this.showDialog.bind(this)
    const state = this.state
    return (
      <div>
        <Header title='发布新话题'/>
        <div style={{marginTop:100}}>
          {login.succeed && <Form {...({ifTitleErr,ifContentErr,showDialog,fetchPublishTopic,dispatch,login,state})}/>}
          {!login.succeed && <LinkToLogin dispatch={dispatch}/>}
        </div>
        <Dialog isOpen={this.state.isOpen} link={`${prefix}/topic/${publishTopic.topicId}`} close={this.close}>
          {state.isFetching && <div>加载中</div>}
          {!state.isFetching && <div>发送成功，去查看</div>}
        </Dialog>
      </div>
    )
  }
}

// HomePage.propTypes = {
//   selectedTab: PropTypes.string.isRequired,
//   topics: PropTypes.array.isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   page:PropTypes.number.isRequired,
//   scrollT:PropTypes.number.isRequired,
//   dispatch: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
  const {publishTopic,login} = state;
  // const {selectedTab,tabData} = state.homePage;
  // // 当组件第一次render时,还未进行任何action,初始化的state里没有tabData[selectedTab]，所以这里需要初始化
  // const {isFetching,page,scrollT,topics} = tabData[selectedTab] || {isFetching:false,page:0,scrollT:0,topics:[]}
  return {publishTopic,login}
}

// 用connect方法连接HomePage组件，实际上是在HomePage组件上加上了Connect(HomePage)这个父组件，HomePage里有关Connect的state变化的props就是通过mapStateToProps设置的
// connect方法的第二个参数如果不传的话就会默认将store.dispatch默认作为了dispatch参数传进HomePage的props，所以HomePage的props里就有一个dispatch
export default connect(mapStateToProps)(PublishTopic)