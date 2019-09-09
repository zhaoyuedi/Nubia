import axios from "axios";

const http = axios.create({
    timeout:1000,
    withCredentials:true
})


http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }else if(config.method == "post"){
        
    }

    return config;
},err=>{
    return Promise.reject(err);
})


http.interceptors.response.use(res=>{
    if(res.status == 200){
        return res.data;
    }
})

export default http;