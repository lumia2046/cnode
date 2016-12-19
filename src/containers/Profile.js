import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {fetchArticle} from '../actions'
import Header from '../components/common/Header/Header'
import ProfileComponent from '../components/common/Profile/Profile'
import getSize from '../utils/getSize'


class Profile extends Component {
  render(){
    const {profile} = this.props
    return (
      <div>
        <div>
          <Header title='详情' showBack={true}/>
          {profile.loginname &&
            <div style={{marginTop:100}}>
              <ProfileComponent  {...({...this.props,fetchArticle})}/>
            </div>
            
          }
        </div>
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
  const {profile,article} = state;
  const {collectedTopics} = profile;
  return {profile,article,collectedTopics}
}


export default connect(mapStateToProps)(Profile)