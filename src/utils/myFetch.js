import originFetch from 'isomorphic-fetch'
import { fetchError,fetchStart,fetchEnd } from '../actions/fetchError'

// let dispatch = window.myDispatch
const myFetch = (url, option) => {
    // window.fetchingUrl = window.fetchingUrl || []
    // console.log('aaaaaaaa',window.fetchingUrl,url)
    // if(window.fetchingUrl.includes(url)){
    //     // console.log('aaaaaaaa',url)
    //     return new Promise((r,w)=>{
    //         let res = {}
    //         res.json = () => new Promise((r,w)=>r({data:[{}]}))
    //         r(res)
    //     })
    // }
    // window.fetchingUrl.push(url)

    let myOption = {
        credentials: 'include',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    }
    option = option || {}
    option = { ...myOption, ...option }
    return new Promise((resolve, reject) => {
        originFetch(url, option)
            .then(res => {
                if (res.ok) {
                    resolve(res)
                } else {
                    res.json().then(json => {
                        reject(json)
                        // throw new Error(json)
                    })
                }
                // window.fetchingUrl.splice(window.fetchingUrl.indexOf(url),1)
            })
            // .catch(error => reject(error))
            .catch(error => myDispatch(fetchError(error)))
    })
        .catch(error => myDispatch(fetchError(error)))
}

export default myFetch