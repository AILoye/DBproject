import axios from "axios";

const server = axios.create({
    timeout:5000,
    // baseUrl:"",
    withCreadentials:true,
})

// 请求拦截器
server.interceptors.request.use((config)=>{
    if(config.method = "get"){
<<<<<<< HEAD
        config.params = {...config.data};
        
=======
        config.params = {...config.data};  
>>>>>>> e641015b2ddbbcfdf8871810fa81d59e26d54336
    }
    return config;
},(err)=>{
    return Promise.reject(err);
})

// 响应拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    }
    return res;
},(err)=>{
    return Promise.reject(err);
})
export default server;