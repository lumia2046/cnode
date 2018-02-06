import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './styles.scss'
import { setTransition } from '../../../actions/hashUrl'
import { Link } from 'react-router-dom'
import prefix from '../../../utils/routePrefix'
import { Tabs, Tab } from 'material-ui/Tabs'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import Badge from 'material-ui/Badge'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import IconButton from 'material-ui/IconButton'
import SwipeableViews from 'react-swipeable-views'
import getSize from '../../../utils/getSize'

@connect()
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    }

  }
  componentWillMount() {
    const { tabs, filter } = this.props;
    let slideIndex;
    tabs.forEach((tab, index) => {
      if (tab.filter === filter) {
        slideIndex = index;
      }
    })
    this.setState({
      slideIndex: slideIndex
    })
  }
  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
    this.props.onClick(this.props.tabs[value].filter)
  };

  render() {
    // this.props.tabs.forEach(tab => {
    //     tab.cn = classnames({[styles.active] : tab.filter === this.props.filter})
    // })
    return (
      <MuiThemeProvider>
        <div>
          <div className={styles.header} style={{ top: -this.props.fixedTop, width: window.width||'100%' }}>
            <AppBar title={<p style={{ textAlign: 'center' }}>NodeJS论坛</p>} onLeftIconButtonClick={this.props.toggleDrawer}
              iconElementRight={<div style={{ marginTop: -8 }}>
                <Badge badgeContent={this.props.unreadMessageCount} secondary={true} style={{ top: 3 }}>
                  <Link to={`${prefix}/message`} onClick={() => this.props.dispatch(setTransition({ transition: 'up' }))}>
                    <IconButton tooltip="未读消息" style={{ padding: 0, width: 25, height: 25 }}>
                      <div>
                        <NotificationsIcon style={{ color: 'white' }} />
                      </div>
                    </IconButton>
                  </Link>
                </Badge>
              </div>} />
            <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
              {this.props.tabs.map((tab, i) =>
                <Tab key={i} label={tab.title} value={i}>
                </Tab>
              )}
            </Tabs>
          </div>
          <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>
            {this.props.children}
          </SwipeableViews>
        </div>
      </MuiThemeProvider>
    )
  }
}
// Header.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired
// }

export default Header