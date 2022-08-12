import axios from "axios";
import Cookie from "js-cookie";

export const http = () => {
    const headers = {};
    const token = Cookie.get('token')
    if(token) {
        headers.authorization = `Bearer ${token}`;
    }
    return axios.create({
        headers,
        baseURL: process.env.BASE_URL
    })
}