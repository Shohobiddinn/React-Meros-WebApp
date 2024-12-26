import axios from "./axios"
import { AuthAction } from "../@types/authTypes";
import { formData } from "../utils";
const AuthService = {
    submitPost(data: AuthAction) {
        return axios.post('/auth/token', formData(data))
    },
}

export default AuthService