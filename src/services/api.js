import axios from 'axios';

const api = axios.create({
    baseURL: 'http:/198.168.0.38/5040'
})

export default api;