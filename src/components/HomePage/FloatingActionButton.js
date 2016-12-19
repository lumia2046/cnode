import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router'
import prefix from '../../utils/routePrefix'

const style = {
  position:'fixed',
  bottom:50,
  right:50
};

/**
 * Default size and `mini` FABs, in primary (default), `secondary` and `disabled` colors.
 */
const FloatActionButton = () => (
  <MuiThemeProvider>
    <Link to={`${prefix}/publishTopic`}>
      <FloatingActionButton style={style} secondary={true}>
        <ContentAdd />
      </FloatingActionButton>
    </Link>
  </MuiThemeProvider>
);

export default FloatActionButton;