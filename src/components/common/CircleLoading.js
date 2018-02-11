import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import CircularProgress from 'material-ui/CircularProgress'
import getSize from '../../utils/getSize'

const { windowH, windowW } = getSize()
const style = {
	position:'relative',
	paddingTop: 0.5 * windowH - 40,
	textAlign: 'center'

}
const CircleLoading = () => (
	<div style={style}>
		<MuiThemeProvider>
			<CircularProgress size={60} thickness={7} />
		</MuiThemeProvider>
	</div>

);

export default CircleLoading;