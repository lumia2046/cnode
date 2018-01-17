import {
  FETCH_START, FETCH_END, FETCH_ERROR, CLEAR_ERROR
} from '../actions/fetchError'

const initState = sessionStorage.getItem('store') ? JSON.parse(sessionStorage.getItem('store')).fetchError : {
  error: null, fetched: null
}

const fetchError = (state = initState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, fetched: 'start' }
    case FETCH_END:
      return { ...state, fetched: 'end' }
    case FETCH_ERROR:
      return { ...state, error: action.data, fetched: 'failed' }
    case CLEAR_ERROR:
      return { ...state, error: null }
    default:
      return state
  }

}

export default fetchError