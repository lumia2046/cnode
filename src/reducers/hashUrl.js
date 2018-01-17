import {
  SET_HASH_URL, SET_TRANSITION
} from '../actions/hashUrl'

const initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).hashUrl : {
  oldUrl: '/', currentUrl: '/', transition: 'none'
}

const hashUrl = (state = initState, action) => {
  switch (action.type) {
    case SET_HASH_URL:
    case SET_TRANSITION:
      return { ...state, ...action.data }
    default:
      return state
  }

}

export default hashUrl;