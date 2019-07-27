import axios from 'axios'

let instance = axios.create({
    baseURL: 'http://localhost:1904'
})

function get(url = '', params = {}) {
    return instance.get(url, params)

}

function post(url = '', params = {}) {

    return instance.post(url, params)

}
function deletes(url = '', params = {}) {

    return instance.delete(url, params)

}
function put(url = '', params = {}) {

    return instance.put(url, params)

}
export default {
    get, post,
    deletes,
    put
}