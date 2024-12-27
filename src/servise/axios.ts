import axios from 'axios'
import { getItem } from '../helpers/localeStorage'

axios.defaults.baseURL = 'https://demo.m14.uz'

axios.interceptors.request.use(config => {
    const user = getItem('user')
    const authorization = user ? `Bearer ${user?.access_token}` : ''
    config.headers.Authorization = authorization
    return config
})

export default axios