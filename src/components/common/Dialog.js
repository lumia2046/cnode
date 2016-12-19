import React from 'react';
import { hashHistory,browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const DialogExample = (props) => {
  const handleClose = () => {
    props.close()
  };
  const handleJump = () => {
    props.close()
    if(props.link){
      hashHistory.push(props.link)
      // browserHistory.push(props.link)
    }
    if(props.action){
      props.action()
    }
    
  }
  const actions = props.singleButton ? [<FlatButton label="确定" primary={true} onTouchTap={handleClose}/>] : 
  [<FlatButton label="取消" primary={true} onTouchTap={handleClose}/>,
    <FlatButton label="确定" primary={true} onTouchTap={handleJump}/>];
  return (
    <MuiThemeProvider>
      <Dialog
        title={props.title || ''}
        actions={actions}
        modal={false}
        open={props.isOpen}
        onRequestClose={handleClose}>
        {props.children}
      </Dialog>
    </MuiThemeProvider>
  );
}

export default DialogExample