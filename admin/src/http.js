import axios from 'axios'

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL || '/admin/api' 
    // baseURL: 'http://localhost:4000/admin/api'
})

export default http