//暂时缺少请求拦截，相应拦截等功能
import axios, {AxiosInstance,AxiosRequestConfig} from 'axios';

class Request {
    private readonly baseUrl:string;
    constructor(_baseUrl:string) {
        this.baseUrl = _baseUrl;
    }

    getInsideCondig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {

            }
        }
        return config;
    }
   
    request(options:AxiosRequestConfig) {
        const instance = axios.create();
        options = Object.assign(this.getInsideCondig(),options)
        // this.interceptors(instance,options.url);
        return instance(options);
    }
    
}
const http = new Request("http://localhost:300");
export default http;