import axios from 'axios'
import { getItem } from '../helpers/localeStorage'

axios.defaults.baseURL = 'http://65.21.190.82'

axios.interceptors.request.use(config => {
    const user = getItem('user')
    const authorization = user ? `Bearer ${user?.access_token}` : ''
    config.headers.Authorization = authorization
    return config
})

export default axios