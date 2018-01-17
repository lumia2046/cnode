export const SET_TRANSITION = 'SET_TRANSITION'
export const SET_HASH_URL = 'SET_HASH_URL'


export const setHashUrl = (hashUrl) => {
  return {
    type:SET_HASH_URL,
    data:hashUrl
  }
}

export const setTransition = (transiton) => {
  return {
    type:SET_TRANSITION,
    data:transiton
  }
}

