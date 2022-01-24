import axios from "axios";
import http from "./Request";

export const get = (url:string,data:any)=>{
    return http.request({
        url:url,
        method: 'get',
        data:data
    })
}
export const post = (url:string,data:any)=>{
    return http.request({
        url:url,
        method:'post',
        data:data

    })
}