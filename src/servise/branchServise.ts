import { postBranch } from '../@types/apiTypes';
import axios from './axios';
import query from './query';
function getBranches(p = query) {
    const status = p.status ? `&status=${p.status}` : ``;
    const page = p.page ? `&page=${p.page}` : ``;
    const limit = p.limit ? `&limit=${p.limit}` : ``;
    return axios.get(`/branch?${status}${page}${limit}`)
}
function createBranch(data: postBranch) {
    return axios.post('/branch', data)
}

export default {
    getBranches,  // Get all branches
}