import axios from "axios";
import loading from "@lib/loading/index.js"

const http = axios.create({
    timeout:1000,
    withCredentials:true
})


http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }else if(config.method == "post"){
    }
    loading.open();
    return config;
},err=>{
    return Promise.reject(err);
})


http.interceptors.response.use(res=>{
    if(res.status == 200){
        loading.close();
        return res.data;
    }
})

<<<<<<< HEAD
export default http;
=======
export default http
>>>>>>> c62495f6bddf5dd148cbb864e093733cd05a5c60
