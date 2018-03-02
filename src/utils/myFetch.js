import originFetch from 'isomorphic-fetch'
import { fetchError, fetchStart, fetchEnd } from '../actions/fetchError'

const getData = async (url, option) => {
    try {
        let response = await originFetch(url, option)
        if (response.ok) {
            return response
        } else {
            let error = await response.json()
            throw error
        }
    } catch (error) {
        myDispatch(fetchError(error))
    }
    return new Promise(() => { })
}

const myFetch = (url, option) => {

    let myOption = {
        credentials: 'include',
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        }
    }
    option = option || {}
    option = { ...myOption, ...option }

    // 方案1
    // return new Promise((resolve, reject) => {
    //     originFetch(url, option)
    //         .then(response => {
    //             if (response.ok) {
    //                 resolve(response)
    //             } else {
    //                 response.json().then(json => {
    //                     //response的then里产生或抛出的异常，无法直接抛出到该链式调用外面去被originFetch的catch捕获，除非获取到了originFetch的reject
    //                     reject(json)//直接拿到这个return的new Promise的reject方法，能被它的catch方法（即最外面那个catch方法）捕捉到
    //                 })
    //             }
    //         })
    //         .catch(error => myDispatch(fetchError(error)))//获取originFetch链式调用里产生的异常，这里能获取到的是fetch请求失败，无返回response，服务器无响应的异常
    // })
    //     .catch(error => {   //获取的是reject(json)里的json数据
    //         myDispatch(fetchError(error))
    //         return new Promise(() => { }) //catch后面如果有then,then里面的方法执行可能会报错，要想其不执行的办法是返回一个promise对象携带空的方法
    //     })

    
    //方案2
    // return new Promise((resolve, reject) => {
    //     originFetch(url, option)
    //         .then(response => {
    //             if (response.ok) {
    //                 resolve(response)
    //             } else {
    //                 response.json().then(json => {
    //                    throw json
    //                 })
    //                 .catch(error => myDispatch(fetchError(error)))//也可以直接在这里获取response里抛出的错误
    //                 //promise对象如果不调用resolve方法，后面的then链路里的函数是不会被执行的
    //             }
    //         })
    //         .catch(error => myDispatch(fetchError(error)))//获取originFetch链式调用里产生的异常，这里能获取到的是fetch请求失败，无返回response，服务器无响应的异常
    // })

    //方案3
    //getData方法在最上面定义
    return getData(url, option)
}

export default myFetch