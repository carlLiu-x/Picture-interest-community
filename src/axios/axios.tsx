import axios from "axios";
import http from "./Request";

export const get = (url:string,data:any)=>{
    return http.request({
        url:url,
        method: 'get',
        params:data
    })
}

// post by body
export const post = (url:string,data:any)=>{
    return http.request({
        url:url,
        method:'post',
        data:data
    })
}

// post by params
export const post2 = (url:string,data:any)=>{
    return http.request({
        url:url,
        method:'post',
        params:data
    })
}

