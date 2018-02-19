import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { switchSupport, fetchComment, fetchArticle, recordArticleScrollT, fetchProfile } from '../actions'
import Header from '../components/common/Header/Header'
import CircleLoading from '../components/common/CircleLoading'
import AsyncContainer from '../components/common/AsyncContainer'
import Content from '../components/Article/Content/Content'
import Reply from '../components/Article/Reply/Reply'
import getSize from '../utils/getSize'


class Article extends Component {
  constructor() {
    super()
    this.state = {
      fadeIn: true
    }
  }
  componentWillMount() {

    const { scrollT, dispatch, article, isFetching } = this.props

    if (scrollT) {
      // window.scrollTo(0, scrollT)
    }
    // window.scrollTo(0, scrollT)

    if (!article.author && !isFetching) {
      const topicId = window.location.href.split('topic/')[1].split('?_')[0]
      dispatch(fetchArticle(topicId))
    }
  }

  componentWillReceiveProps(newProps) {
    const { scrollT } = newProps
    document.getElementById('articleContainer').scrollTop = scrollT
  }

  componentDidMount() {
    const { scrollT } = this.props
    document.getElementById('articleContainer').scrollTop = scrollT
  }

  componentWillUnmount() {
    const { currentTopicId, dispatch, profile, login } = this.props
    dispatch(recordArticleScrollT(currentTopicId, document.getElementById('articleContainer').scrollTop))
    if (!window.sessionStorage.masterProfile && login.loginName === profile.loginname) {
      window.sessionStorage.masterProfile = JSON.stringify(profile)
    }
  }

  render() {
    let { isFetching, article, currentTopicId, login, switchSupportInfo, isCommented, dispatch, collectedTopics, profile } = this.props
    if (login.loginName !== profile.loginname && window.sessionStorage.masterProfile) {
      collectedTopics = JSON.parse(window.sessionStorage.masterProfile).collectedTopics
    }
    return (

      <div id='articleContainer' style={{ width: window.width, height: window.height, overflow: 'auto' }}>
        <Header isFetching={isFetching} title='详情' showBack={true} position={true} />
        {Object.keys(article).length === 0 && <CircleLoading />}
        {Object.keys(article).length !== 0 &&
          <div>
            <Content {...({ article, dispatch, fetchProfile, login, collectedTopics, profile })} />

            <Reply replies={article.replies}
              {...({ login, dispatch, switchSupportInfo, currentTopicId, profile, isCommented })} />

          </div>
        }
      </div>

    )
  }
}

function mapStateToProps(state) {
  const { currentRouter, login, profile } = state;
  const { currentTopicId, switchSupportInfo, isCommented } = state.article;
  const { collectedTopics } = profile
  const isFetching = state.article[currentTopicId] ? state.article[currentTopicId].isFetching : false;
  const scrollT = state.article[currentTopicId] ? state.article[currentTopicId].scrollT : '0';
  const article = state.article[currentTopicId] && state.article[currentTopicId].article ? state.article[currentTopicId].article : {};
  return { isFetching, scrollT, article, currentTopicId, login, switchSupportInfo, currentRouter, collectedTopics, profile, isCommented }
}


export default connect(mapStateToProps)(Article)