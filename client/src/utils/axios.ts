import axios from "axios";

export const API_URL = 'http//:localhost/5000/api'

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true
})

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Autorization = `Bearer ${window.localStorage.getItem('token')}`;
        return config;
    }
}
)