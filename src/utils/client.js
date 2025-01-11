import axios from "axios";
import {API_URL} from "./constant.js";

const client = axios.create({
    baseURL: API_URL,
})

client.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + sessionStorage.getItem('token')
    return config;
})

export default client