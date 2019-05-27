import {get} from 'axios';
// 发送 api 请求获取网络数据
export function getPost(){
    return get('https://jsonplaceholder.typicode.com/posts')
}