import {
  LOGIN_SUCCESS,LOGIN_FAILED,LOGOUT
} from '../actions'

const login = (state={succeed:false},action) => {
	switch (action.type){
		case LOGIN_SUCCESS:
		return {...state,succeed:true,loginName:action.loginName,loginId:action.loginId,accessToken:action.accessToken}
		case LOGIN_FAILED:
		return {...state,succeed:false,failedMessage:action.failedMessage}
		case LOGOUT:
		return {succeed:false}
		default :
		return state
	}
}

export default login