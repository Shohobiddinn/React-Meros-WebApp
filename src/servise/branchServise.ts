import { postBranch } from '../@types/apiTypes';
import { Branches } from '../@types/branchTypes';
import { Get } from '../@types/default';
import axios from './axios';
import query from './query';
async function getBranches(p = query){
    const status = p.status ? `&status=${p.status}` : ``;
    const page = p.page ? `&page=${p.page}` : ``;
    const limit = p.limit ? `&limit=${p.limit}` : ``;

    const response = await axios.get(`/branch?${status}${page}${limit}`);
    return response.data; // TypeScript bu yerda ma'lumotlarni `Get<Branches[]>` deb qabul qiladi
}
function createBranch(data: postBranch) {
    return axios.post('/branch/add', data)
}

export {
    getBranches,  // Get all branches
    createBranch,
}