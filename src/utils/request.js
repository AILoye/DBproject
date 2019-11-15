import axios from "axios";
import loading from "@lib/loading/index.js"
const server = axios.create({
    timeout:5000,
    // baseUrl:"",
    withCreadentials:true,
})

// 请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method = "get"){
        config.params = {...config.data};
    }
    loading.loadingMount();//出现
    return config;
},(err)=>{
    return Promise.reject(err);
})

// 响应拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        loading.loadingDestroy();//消失return 之后不再执行
        return res.data;
    }
    
},(err)=>{
    return Promise.reject(err);
})
export default server;