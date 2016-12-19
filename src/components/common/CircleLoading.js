import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';
import getSize from '../../utils/getSize'

const {windowH,windowW} = getSize()
const style = {
	display:'block',
	margin:`${0.5*windowH-30}px auto`

}
const CircleLoading = () => (
	<MuiThemeProvider>
		<CircularProgress size={60} thickness={7} style={style}/>
	</MuiThemeProvider>
);

export default CircleLoading;