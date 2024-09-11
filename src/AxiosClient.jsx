import axios from "axios";
import {REACT_APP_API_BASE_URL} from "./config";

const instance = axios.create({
    baseURL: REACT_APP_API_BASE_URL
});
instance.interceptors.request.use((config) => {
    const AUTH_TOKEN = `Bearer ${localStorage.getItem("authToken")}`;
    if (AUTH_TOKEN)
        config.headers.Authorization = AUTH_TOKEN;
    return config;
});
export default instance;
