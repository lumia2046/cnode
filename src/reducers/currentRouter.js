import {
  CURRENT_ROUTER
} from '../actions'

const currentRouter = (state='home',action) => {
	switch (action.type){
		case CURRENT_ROUTER:
		return action.router
		default :
		return state
	}
}

export default currentRouter