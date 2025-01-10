import axios from "axios";
import {API_URL} from "./constant.js";

const client = axios.create({
    baseURL: API_URL,
})

client.interceptors.request.use(config => {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
})

export default client