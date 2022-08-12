import axios from "axios";
import Cookie from "js-cookie";

export const http2 = () => {
    return axios.create({
        baseURL: process.env.BASE_URL
    })
}

http2.interceptors.request.use((config)=>{
    config.headers = {
        Authorization: `Bearer ${Cookies.get('token')}`
    }
    return config;
}, (error)=>{
    return Promise.reject(error)
});

http2.interceptors.response.use((response)=>{
    return response;
}, (err)=>{
    console.log(err.response);
    if(error.response.statue === 403) {
        Cookies.remove('token');
        window.location.href = '/login'
    }
})