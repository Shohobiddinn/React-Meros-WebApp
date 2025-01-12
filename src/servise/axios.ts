import axios from 'axios';
import { getItem } from '../helpers/localeStorage';

axios.defaults.baseURL = 'http://65.21.190.82';

// Request interceptor
axios.interceptors.request.use(
    config => {
        const user = getItem('user');
        const authorization = user ? `Bearer ${user?.access_token}` : '';
        config.headers.Authorization = authorization;
        return config;
    },
    error => {
        console.error('Request error:', error);
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            console.error('Response error:', error.response.data);
            if (error.response.status === 401) {
                console.log('Unauthorized. Redirecting to login...');
            } else if (error.response.status === 500) {
                console.error('Server error occurred.');
            }
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axios;
