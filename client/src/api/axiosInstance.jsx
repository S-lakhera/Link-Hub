import axios from 'axios'

let baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

export default axiosInstance;