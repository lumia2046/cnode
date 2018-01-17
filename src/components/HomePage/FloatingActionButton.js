import React from 'react'
import { connect } from 'react-redux'
import { setTransition } from '../../actions/hashUrl'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'
import prefix from '../../utils/routePrefix'

const style = {
  position: 'fixed',
  bottom: 50,
  right: 50
};

@connect()
class FloatActionButton extends React.Component {
  render() {
    return (
      <Link to={`${prefix}/publishTopic`} onClick={() => this.props.dispatch(setTransition({ transition: 'up' }))}>
        <MuiThemeProvider>
          <FloatingActionButton style={style} secondary={true}
            onMouseEnter={() => this.props.dispatch(setTransition({ transition: 'none' }))}
            onTouchStart={() => {
              this.props.dispatch(setTransition({ transition: 'none' }))
            }}>
            <ContentAdd />
          </FloatingActionButton>
        </MuiThemeProvider>
      </Link>
    )
  }

}


export default FloatActionButton;