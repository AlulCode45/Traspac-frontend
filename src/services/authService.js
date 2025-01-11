import axios from "axios";
import {API_URL} from "../utils/constant.js";
import client from "../utils/client.js";

const authLogin = async (email,password) => {
    try{
        const response = await axios.post(API_URL+'/auth/login', {
            email: email,
            password: password,
        })
        return response.data
    } catch (error) {
        console.error(error)
    }
}

const authLogout = async () => {
    try{
        await client.post('/auth/logout')
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('user')
        return true
    } catch (error) {
        console.error(error)
    }
}

const getUserProfile = async () => {
    try{
        return await client.get('/user').then(res => res.data)
    } catch (error) {
        console.error(error)
    }
}

export {
    authLogin,
    authLogout,
    getUserProfile
}