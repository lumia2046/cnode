import React, { PropTypes } from 'react'
import {Link} from 'react-router'
import prefix from '../../../utils/routePrefix'
import classnames from 'classnames'
import {setCurrentRouter} from '../../../actions'
import styles from './styles.scss'
import FlatButton from 'material-ui/FlatButton';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const LinkToLogin = props => {
	let {dispatch} = props
	const masterInfo = window.localStorage.getItem('masterInfo') ? true : false
	return (
		<div className={styles.linkToLogin} >
			{!masterInfo && 
				<Link to={`${prefix}/login`} className={styles.link} onClick={() => {
					dispatch(setCurrentRouter('login'))
					}}>
					<MuiThemeProvider>
						<FlatButton label="点击登陆" primary={true} />
					</MuiThemeProvider>
				</Link>
			}
			{masterInfo && 
				<div style={{paddingTop:100}}>
					<MuiThemeProvider>
						<CircularProgress size={60} thickness={7} />
					</MuiThemeProvider>
				</div>
				}
		</div>
	)
}

export default LinkToLogin