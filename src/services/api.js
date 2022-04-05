import axios from 'axios'

export const key = "3aafebafc255849c8d002125b382e256bcaecf73";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Autorization': `Bearer ${key}`
    }
})

export default api;