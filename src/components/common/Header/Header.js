import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setTransition } from '../../../actions/hashUrl'
import styles from './styles.scss'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getSize from '../../../utils/getSize'

// @withRouter
@connect(store => ({ hashUrl: store.hashUrl }))
class Header extends Component {
	constructor() {
		super()
	}

	render() {
		const { isFetching, title, history, hashUrl } = this.props
		console.log(this.props.history)
		return (
			<div className={styles.header} style={{ width: window.width || '100%' }}>
				<MuiThemeProvider>
					<AppBar
						title={<p className={styles.title}>
							{isFetching ? '加载中' : title}
						</p>}
						iconElementLeft={<IconButton>
							<i className="iconfont" dangerouslySetInnerHTML={{ __html: '&#xe611;' }}></i>
						</IconButton>}
						onLeftIconButtonClick={() => {
							this.props.dispatch(setTransition({ transition: 'left' }))
							history.goBack()
							// window.location.href = `${window.location.href.split('#')[0]}#${hashUrl.oldUrl}`
						}}
					/>
				</MuiThemeProvider>
			</div>
		)
	}
}


export default withRouter(Header)