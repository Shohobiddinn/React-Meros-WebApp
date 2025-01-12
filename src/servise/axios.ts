// import axios from 'axios';
// import { getItem } from '../helpers/localeStorage';
// import { NavigateFunction } from 'react-router-dom';
// axios.defaults.baseURL = 'http://65.21.190.82';

// // Request interceptor
// axios.interceptors.request.use(
//     config => {
//         const user = getItem('user');
//         const authorization = user ? `Bearer ${user?.access_token}` : '';
//         config.headers.Authorization = authorization;
//         return config;
//     },
//     error => {
//         console.error('Request error:', error);
//         return Promise.reject(error);
//     }
// );
// axios.interceptors.response.use(
//     response => {
//         return response;
//     },
//     error => {
//         if (error.response) {
//             console.error('Response error:', error.response.data);
//             if (error.response.status === 401) {
//                 console.log('Unauthorized. Redirecting to login...');
//                 navigate('/sign-in');
//             } else if (error.response.status === 500) {
//                 console.error('Server error occurred.');
//             }
//         } else if (error.request) {
//             console.error('No response received:', error.request);
//         } else {
//             console.error('Error:', error.message);
//         }
//         return Promise.reject(error);
//     }
// );

// export default axios;


import axios from 'axios';
import { getItem } from '../helpers/localeStorage';
import { NavigateFunction } from 'react-router-dom';

axios.defaults.baseURL = 'http://65.21.190.82';

const setupAxiosInterceptors = (navigate: NavigateFunction): void => {
    axios.interceptors.request.use(
        config => {
            const user = getItem('user');
            const authorization = user ? `Bearer ${user?.access_token}` : '';
            if (config.headers) {
                config.headers.Authorization = authorization;
            }
            return config;
        },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(
        response => response,
        error => {
            if (error.response?.status === 401) {
                navigate('/sign-in');
            }
            return Promise.reject(error);
        }
    );
};

export { setupAxiosInterceptors };
export default axios;
