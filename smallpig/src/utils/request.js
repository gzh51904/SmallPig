import axios from 'axios';

// https://www.nanshig.com/mobile/index.php
//axios.defaults.baseURL = 'https://www.nanshig.com/mobile/index.php';https://www.xiaozhu158.com/wechat/mark/marklistload
let instance = axios.create({
    baseURL:'http://10.3.141.204:1904'
})
 function get(url,params={}){
   return instance.get(url,params)
}
function post(url,params={}){
    return instance.post(url,params); 
 }
export default {
    get,
    post
}