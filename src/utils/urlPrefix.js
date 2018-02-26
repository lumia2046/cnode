import { os, host } from './getOS'

let prefix = os == 'win32' ? `http://${host}:8081` : '/api'
// let prefix = 'http://192.168.30.90:8080/s';

// let prefix = '/api'

export default prefix