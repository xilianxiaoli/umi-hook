import { request  } from 'umi';

const get = (url:string,params:any={},options:any={})=>{
    return request(url,{method:'get',params:params,...options})
}

const post = (url:string,params:any={},options:any={})=>{
    return request(url,{method:'post',data:params,...options})
}

export {
    get,post
}